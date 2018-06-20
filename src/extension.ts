'use strict';
import * as vscode from 'vscode';

// use https://github.com/domenic/opener
var opener = require('opener');

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('extension.transmitDockSend', () => {

        let editor = vscode.window.activeTextEditor;
        if ( ! editor) {
            return; // No open text editor
        }
        
        opener(['-a', 'Transmit', '-g', editor.document.fileName]);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}