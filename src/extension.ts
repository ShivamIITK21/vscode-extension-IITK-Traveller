import * as vscode from 'vscode';
import { hoverfunc } from './hover';
import { completions } from './completion';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "IITK-Traveller-Support" is now active!');

	let disposable = vscode.commands.registerCommand('iitk-traveller-support.welcome', () => {
		vscode.window.showInformationMessage('Welcome to IITK! Enjoy your stay!');
	});

	context.subscriptions.push(disposable);
    context.subscriptions.push(hoverfunc);
    context.subscriptions.push(completions);
}

// This method is called when your extension is deactivated
export function deactivate() {}
