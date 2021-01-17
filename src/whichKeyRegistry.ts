import { Disposable } from "vscode";
import { toBindingItem } from "./bindingItem";
import KeyListener from "./keyListener";
import { StatusBar } from "./statusBar";
import WhichKeyCommand from "./whichKeyCommand";
import { defaultWhichKeyConfig, toWhichKeyConfig } from "./whichKeyConfig";

export class WhichKeyRegistry implements Disposable {
    private registry: Record<string, WhichKeyCommand>;
    private statusBar: StatusBar;
    private keyListener: KeyListener;

    constructor(statusBar: StatusBar, keyListener: KeyListener) {
        this.statusBar = statusBar;
        this.keyListener = keyListener;
        this.registry = {};
    }

    register(obj: any) {
        const config = toWhichKeyConfig(obj);
        if (config) {
            const key = config.bindings;
            if (!this.has(key)) {
                this.registry[key] = new WhichKeyCommand(this.statusBar, this.keyListener);
            }

            this.registry[key].register(config);
            return true;
        } else {
            console.warn('Incorrect which-key config format.');
            return false;
        }
    }

    has(section: string): boolean {
        return section in this.registry;
    }

    show(args: any) {
        if (typeof args === 'string') {
            return this.registry[args].show();
        } else if (Array.isArray(args)) {
            function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
                return value !== null && value !== undefined;
            }
            const bindings = args.map(toBindingItem).filter(notEmpty);
            return WhichKeyCommand.show(bindings, this.statusBar, this.keyListener);
        } else {
            const key = defaultWhichKeyConfig.bindings;
            if (!this.has(key)) {
                this.register(defaultWhichKeyConfig);
            }
            return this.registry[key].show();
        }
    }

    unregister(section: string) {
        if (this.has(section)) {
            this.registry[section].unregister();
        }
    }

    dispose() {
        for (const key of Object.keys(this.register)) {
            this.registry[key].unregister();
        }
    }
}