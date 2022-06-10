# NVM #

## Environment Variables ##

`nvm` exposes the following environment variables:

- `NVM_DIR` - installation directory.
- `NVM_BIN` - where `node`, `npm`, and global packages for the active version of `node` are installed.
- `NVM_INC` - `node`'s include file directory (useful for building C/C++ addons for `node`).
- `NVM_CD_FLAGS` - used to maintain compatibility with `zsh`.
- `NVM_RC_VERSION` - version from `.nvmrc` file if being used.

Additionally, nvm modifies `PATH`, and, if present, `MANPATH` and `NODE_PATH` when changing versions.