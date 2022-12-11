import * as vscode from 'vscode';
import { explanations } from './data/explainations';



let completions = vscode.languages.registerCompletionItemProvider('iitkt', {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

        let comps: vscode.CompletionItem[] = [];
        for(let key in explanations){
            comps.push(new vscode.CompletionItem(key));
        }

        return comps;
    }
});


export {completions};