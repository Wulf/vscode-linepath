# LinePath

Copy the current file path with line numbers from VS Code.

Commands:

- `LinePath: Copy Relative Filepath`
- `LinePath: Copy Absolute Filepath`

Line numbers use `:5`, `:5-10`, or `:5-10,15-20,25`. With no selection, or a single-line selection, the cursor line is used. Multiple selections are separated by commas.

## Building and using

```sh
npm install
npm run compile
```

Open this folder in VS Code, press `F5`, and use the commands from the Command Palette in the Extension Development Host. You can also bind either command to a key in Keyboard Shortcuts.

## Publishing

1. Create a publisher and personal access token on the Visual Studio Marketplace, then install `vsce`: `npm install --global @vscode/vsce`.
2. Log in and package the extension:

   ```sh
   vsce login <publisher>
   npm run package
   ```

3. Publish it:

   ```sh
   vsce publish
   ```

See the VS Code publishing documentation for marketplace requirements and token setup.

