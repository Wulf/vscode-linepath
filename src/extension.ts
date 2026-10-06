import * as vscode from 'vscode';

type PathFormat = 'relative' | 'absolute';

function lineSuffix(editor: vscode.TextEditor): string {
  return editor.selections
    .map((selection) => {
      const firstLine = selection.start.line + 1;
      const lastLine = selection.isEmpty ? firstLine : selection.end.line + 1;

      return firstLine === lastLine
        ? `:${firstLine}`
        : `:${firstLine}-${lastLine}`;
    })
    .join(',');
}

function filePath(editor: vscode.TextEditor, format: PathFormat): string {
  const path = format === 'relative'
    ? vscode.workspace.asRelativePath(editor.document.uri, false)
    : editor.document.uri.fsPath;

  return `${path}${lineSuffix(editor)}`;
}

async function copyFilePath(format: PathFormat): Promise<void> {
  const editor = vscode.window.activeTextEditor;

  if (!editor) {
    void vscode.window.showWarningMessage('LinePath: No active editor.');
    return;
  }

  await vscode.env.clipboard.writeText(filePath(editor, format));
}

export function activate(context: vscode.ExtensionContext): void {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      'linepath.copyRelativeFilepath',
      () => copyFilePath('relative'),
    ),
    vscode.commands.registerCommand(
      'linepath.copyAbsoluteFilepath',
      () => copyFilePath('absolute'),
    ),
  );
}

export function deactivate(): void {}

