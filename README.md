# VSCode which-key TMUX

 Check original README of [vscode-which-key](https://github.com/VSpaceCode/vscode-which-key/) first

Adds TMUX-like keybindings (your need to create `"whichkeytmux.bindings":` and `whichkeytmux.transient` in `settings.json`)  

You can add quick open delay with [apc extension](https://github.com/drcika/apc-extension):

```json
"apc.stylesheet": {
    ".quick-input-widget.show-file-icons": "transition:  opacity steps(1) .4s, display 0s allow-discrete; @starting-style {opacity: 0;}}"
},
```

It's also better to disable tabs in editor groups, close your explorer view, and just use `⌘+P` or Harpoon-like extension for tab management:

```json
"workbench.editor.showTabs": "single",
"workbench.editor.limit.enabled": true,
"workbench.editor.limit.perEditorGroup": true,
"workbench.editor.limit.value": 1,
```

You can check my configs here (WIP): <https://github.com/wtf403/.dotfiles/tree/main/vscode>
