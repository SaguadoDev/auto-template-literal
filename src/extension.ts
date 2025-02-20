import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "auto-template-literal" is now active!');

  const disposable = vscode.commands.registerCommand(
    'auto-template-literal.helloWorld',
    () => {
      vscode.window.showInformationMessage('Hello World from auto-template-literal!');
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
