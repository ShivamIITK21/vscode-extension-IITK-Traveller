# IITK Traveller Support 

This extension features syntax highlighting, autocompletion and hover hints for IITK Traveller.  

# How to Run?
To run the source code, open the directory in VSCode and press F5, this will open a new vscode window with the extension installed on it.

# How to install?

Install dependencies

```
npm i
```

Install vsrc using npm

```
npm install -g @vscode/vsce
```

Compile the source code using vsrc

```
vsce package
```

Install the generated vsrc file using

```
code --install-extension iitk-traveller-support-0.0.1.vsix
```
