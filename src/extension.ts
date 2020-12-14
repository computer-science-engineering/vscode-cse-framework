// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { readFileSync } from 'fs';
import * as fs from 'fs';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscode-cse-framework" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('vscode-cse-framework.copyFramingOverwrite', () => {
		const wsedit = new vscode.WorkspaceEdit();
		const workspaceFolders = vscode.workspace.workspaceFolders;
		if (workspaceFolders != null && workspaceFolders.length > 0) {
			const wsPath = workspaceFolders[0].uri.fsPath; // gets the path of the first workspace folder
			const filePath = vscode.Uri.file(wsPath + '/hello/world.md');
			vscode.window.showInformationMessage(filePath.toString());
			wsedit.createFile(filePath, { overwrite: true, ignoreIfExists: true });
			vscode.workspace.applyEdit(wsedit);
			vscode.window.showInformationMessage('Created a new file: hello/world.md');
			try {
				fs.copyFileSync("./static-to-copy/.gitignore", wsPath)
			} 
			catch (Error) {
				console.log(Error.message)
			}
		}

		// Display a message box to the user
		vscode.window.showInformationMessage('Copied Framing!');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
