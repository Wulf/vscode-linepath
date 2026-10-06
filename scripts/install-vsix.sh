#!/usr/bin/env bash

set -euo pipefail

if [[ $# -gt 0 ]]; then
  version="$1"
else
  version="$(
    curl --fail --location --silent --show-error \
      https://raw.githubusercontent.com/Wulf/vscode-linepath/main/package.json |
      sed -nE 's/^[[:space:]]*"version":[[:space:]]*"([^"]+)".*/\1/p'
  )"
fi

if [[ -z "$version" ]]; then
  echo "Could not determine the extension version." >&2
  exit 1
fi

download_url="https://raw.githubusercontent.com/Wulf/vscode-linepath/main/dist/linepath-${version}.vsix"
temp_vsix="$(mktemp "${TMPDIR:-/tmp}/linepath.XXXXXX.vsix")"

cleanup() {
  rm -f -- "$temp_vsix"
}

trap cleanup EXIT INT TERM

curl --fail --location --silent --show-error \
  --output "$temp_vsix" \
  "$download_url"

code --install-extension "$temp_vsix"

echo "Installed LinePath ${version}."
