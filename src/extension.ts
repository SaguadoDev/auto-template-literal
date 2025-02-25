import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const convertStringsToTemplateLiterals = (editor: vscode.TextEditor) => {
    const document = editor.document;
    const fullText = document.getText();

    const updatedText = fullText.replace(
      /(['"])([^'"\n]*?\$\{[^'"\n]*?[^'"\n]*?)\1/g,
      '`$2`'
    );

    if (updatedText !== fullText) {
      const fullRange = new vscode.Range(
        document.positionAt(0),
        document.positionAt(fullText.length)
      );

      editor
        .edit((editBuilder) => {
          editBuilder.replace(fullRange, updatedText);
        })
        .then(() => {
          vscode.window.showInformationMessage('Strings converted to template literals!');
        });
    }
  };

  const disposable = vscode.workspace.onDidSaveTextDocument((document) => {
    const config = vscode.workspace.getConfiguration('autoTemplateLiteral');
    const isEnabled = config.get<boolean>('enable', true);

    if (!isEnabled) {
      console.log('Conversión desactivada por configuración.');
      return;
    }

    const editor = vscode.window.activeTextEditor;
    if (!editor || editor.document !== document) {
      return;
    }
    convertStringsToTemplateLiterals(editor);
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
