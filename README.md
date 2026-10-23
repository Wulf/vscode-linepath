# LinePath

Copy the current file path with line numbers from VS Code.

For example:

- `src/extension.ts:3` (no selection or when an entire line selected)
- `src/extension.ts:5-19` (multiple lines selected)
- `src/extension.ts:5,20,28,39,52` (multiple cursors)

VSCode Commands:

- `LinePath: Copy Relative Filepath` (command ID: `linepath.copyRelativeFilepath`)
- `LinePath: Copy Absolute Filepath` (command ID: `linepath.copyAbsoluteFilepath`)

## Install (pre-built)

On macOS, Linux, Git Bash, or WSL:

```sh
curl -fsSL https://raw.githubusercontent.com/Wulf/vscode-linepath/main/scripts/install-vsix.sh | bash
```

## Install (from source)

```sh
npm install
npm run package

code --install-extensions dist/linepath-X.X.X.vsix
```

## Publishing

1. Bump version in `package.json`
2. Run `npm run package`
3. Push new `.vsix` to `main` -- it'll be in the `dist/` folder for everyone to download.
