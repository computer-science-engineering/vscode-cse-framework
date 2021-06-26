# Development

Until the CI automation is in place following steps may be followed:

- Update code.
- Update CHANGELOG.md.
    - Add section as per version number.
    - Update versions section at the end.
- Update version number in package.json.
- Build: Run `make create-package`.
- Upload generated vsix file to [VSCode marketplace](https://marketplace.visualstudio.com/manage).
- Wait till uploaded version is live.
- Make commit and push to remote.
- In GitHub, create a new release and tag using `vx.x.x` label. This should match the version number in:
    - CHANGELOG.md.
    - package.json.
    - vsix file name.
- Upload vsix file to release.
