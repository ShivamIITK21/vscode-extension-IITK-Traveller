import * as vscode from 'vscode';
import {explanations} from "./data/explainations";

let hoverfunc = vscode.languages.registerHoverProvider('iitkt',{
    provideHover(document, position, token){
        const range = document.getWordRangeAtPosition(position);
        const word = document.getText(range);

        if(word in explanations){
            const explanation = explanations[word];
            return new vscode.Hover([explanation]);
        }
    }
});

export {hoverfunc};