# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog][Keep a Changelog], and this project adheres to [Semantic Versioning][Semantic Versioning].

## [Unreleased]

## Changed

- Updated code-ql workflow.

## [0.0.4] - 2021-01-05

### Added

- Documentation, builds and other plumbing.
- Added install-vsce step for CI.
- Added install-rimraf step for CI.
- Added npm install step.

### Changed

- Updated extension name.
- Updated Changelog.
- Updated `create_problems_list.py`.
- Updated `.gitignore`.
- Updated extension display name.
- Updated workflow for gitmodules.
- Updated workflow for gitmodules for all jobs.
- Added `--remote` `--merge` to submodule update in workflow.
- Updated build scripts.
- Updated to new gradle packages and new gradle.
- Updated main workflow and makefile.


## [0.0.3] - 2021-01-05

### Added

- Added linter GitHub workflow.
- `skip_for_problems_list` property to json snippet for metadata.

### Changed

- Updated `eslint.workingDirectories` in settings.
- VSCode launch.json `mainClass` for one configuration.
- Changed `get_problems_list` to `get_problems_count`.

### Removed

- Removed VSCode settings.json. This should come from the template-repo and subsequently at repo creation time.

## [0.0.2] - 2021-01-02

### Fixed

- Fixed missing snippets issue in extension package.

## [0.0.1] - 2021-01-02

### Added

- First version.

<!-- Links -->
[Keep a Changelog]: https://keepachangelog.com/
[Semantic Versioning]: https://semver.org/

<!-- Versions -->
[Unreleased]: https://github.com/computer-science-engineering/vscode-cse-framework/compare/v0.0.4..HEAD
[0.0.4]: https://github.com/computer-science-engineering/vscode-cse-framework/compare/v0.0.3..v0.0.4
[0.0.3]: https://github.com/computer-science-engineering/vscode-cse-framework/compare/v0.0.1..v0.0.3
[0.0.2]: https://github.com/computer-science-engineering/vscode-cse-framework/compare/v0.0.1..v0.0.2
[0.0.1]: https://github.com/computer-science-engineering/vscode-cse-framework/releases/tag/v0.0.1
