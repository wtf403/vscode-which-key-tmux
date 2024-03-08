export const extensionId = "wtf403.whichkeytmux";
export const contributePrefix = "whichkeytmux";
export enum ConfigKey {
    Delay = "delay",
    ShowIcons = "showIcons",
    ShowButtons = "showButtons",
    UseFullWidthCharacters = "useFullWidthCharacters",
    SortOrder = "sortOrder",
    Bindings = "bindings",
    Overrides = "bindingOverrides",
}
export enum CommandKey {
    Show = "show",
    Register = "register",
    Trigger = "triggerKey",
    UndoKey = "undoKey",
    SearchBindings = "searchBindings",
    ShowTransient = "showTransient",
    RepeatRecent = "repeatRecent",
    RepeatMostRecent = "repeatMostRecent",
    ToggleZenMode = "toggleZenMode",
    OpenFile = "openFile",
}

export enum SortOrder {
    None = "none",
    Custom = "custom",
    CustomNonNumberFirst = "customNonNumberFirst",
    TypeThenCustom = "typeThenCustom",
    Alphabetically = "alphabetically",
    NonNumberFirst = "nonNumberFirst",
}

export enum ContextKey {
    Active = "whichkeytmuxActive",
    Visible = "whichkeytmuxVisible",
    TransientVisible = "whichkeytmuxTransientVisible",
}

export const Configs = {
    Delay: `${contributePrefix}.${ConfigKey.Delay}`,
    ShowIcons: `${contributePrefix}.${ConfigKey.ShowIcons}`,
    ShowButtons: `${contributePrefix}.${ConfigKey.ShowButtons}`,
    UseFullWidthCharacters: `${contributePrefix}.${ConfigKey.UseFullWidthCharacters}`,
    SortOrder: `${contributePrefix}.${ConfigKey.SortOrder}`,
    Bindings: `${contributePrefix}.${ConfigKey.Bindings}`,
    Overrides: `${contributePrefix}.${ConfigKey.Overrides}`,
};

export const Commands = {
    Show: `${contributePrefix}.${CommandKey.Show}`,
    Register: `${contributePrefix}.${CommandKey.Register}`,
    Trigger: `${contributePrefix}.${CommandKey.Trigger}`,
    UndoKey: `${contributePrefix}.${CommandKey.UndoKey}`,
    SearchBindings: `${contributePrefix}.${CommandKey.SearchBindings}`,
    ShowTransient: `${contributePrefix}.${CommandKey.ShowTransient}`,
    RepeatRecent: `${contributePrefix}.${CommandKey.RepeatRecent}`,
    RepeatMostRecent: `${contributePrefix}.${CommandKey.RepeatMostRecent}`,
    ToggleZen: `${contributePrefix}.${CommandKey.ToggleZenMode}`,
    OpenFile: `${contributePrefix}.${CommandKey.OpenFile}`,
};
