// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fse from 'fs-extra'

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
		const workspaceFolders = vscode.workspace.workspaceFolders;
		if (workspaceFolders != null && workspaceFolders.length > 0) {
			const wsPath = workspaceFolders[0].uri.fsPath; // gets the path of the first workspace folder
			let sourceDir = __dirname + "/static-to-copy/"
			let destDir = wsPath
			try {
				fse.copySync(sourceDir, destDir, { overwrite: true, recursive: true })
				console.log('success!')
			} catch (err) {
				console.error(err)
			}
		}

		// Display a message box to the user
		vscode.window.showInformationMessage('Copied Framing!');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
