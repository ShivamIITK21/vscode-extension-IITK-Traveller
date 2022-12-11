import * as vscode from 'vscode';
import {explanations} from "./data/explainations";

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "IITK-Traveller-Support" is now active!');

	let disposable = vscode.commands.registerCommand('iitk-traveller-support.welcome', () => {
		vscode.window.showInformationMessage('Welcome to IITK! Enjoy your stay!');
	});

	context.subscriptions.push(disposable);

    let hoverfunc = vscode.languages.registerHoverProvider('iitkt',{
        provideHover(document, position, token){
            const range = document.getWordRangeAtPosition(position);
            const word = document.getText(range);
            console.log("I AM HERE!");
            console.log(word);

            if(word in explanations){
                const explanation = explanations[word];
                return new vscode.Hover([explanation]);
            }
        }
    });

    context.subscriptions.push(hoverfunc);
}

// This method is called when your extension is deactivated
export function deactivate() {}
