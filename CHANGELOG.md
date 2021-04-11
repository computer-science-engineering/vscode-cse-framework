# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog][Keep a Changelog], and this project adheres to [Semantic Versioning][Semantic Versioning].

## [Unreleased]

### Added

### Changed

### Deprecated

### Removed

### Fixed

### Security

## [0.0.12] - 2021-04-10

### Fixed

- Updated `build.gradle`. Fixed `coverallsJacoco`.

## [0.0.11] - 2021-04-10

### Changed

- Changelog template updated.
- Updated `build.gradle`.

## [0.0.10] - 2021-04-10

### Changed

- Updated `build.gradle`.

## [0.0.9] - 2021-04-10

### Changed

- Formatting updates.
- Updated to jdk6.
- `build.gradle` packages version updates.
- Gradle version update.
- Update to Github action setup java v2.

## [0.0.8] - 2021-03-07

### Changed

- Updated coverage to 5.6.

## [0.0.7] - 2021-02-07

### Changed

- Updated to new versions of third-party libraries for static files.
- Updated npm packages.

### Fixed

- Fixed CHANGELOG.md formatting.

## [0.0.6] - 2021-01-10

- Fixed CHANGELOG.md.

## [0.0.5] - 2021-01-10

### Changed

- Updated code-ql workflow.
- Updated workflow for gitmodules.
- Updated workflow for gitmodules for all jobs.
- Added `--remote` `--merge` to submodule update in workflow.
- Updated build scripts.
- Updated to new gradle packages and new gradle.
- Updated main workflow and makefile.

### Added

- Documentation, builds and other plumbing.
- Added install-vsce step for CI.
- Added install-rimraf step for CI.
- Added npm install step.
- Added development steps until CI automation is in place.

## [0.0.4] - 2021-01-05

### Changed

- Updated extension name.
- Updated Changelog.
- Updated `create_problems_list.py`.
- Updated `.gitignore`.
- Updated extension display name.

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
[Unreleased]: https://github.com/computer-science-engineering/vscode-cse-framework/compare/v0.0.11..HEAD
[0.0.9]: https://github.com/computer-science-engineering/vscode-cse-framework/compare/v0.0.10..v0.0.11
[0.0.9]: https://github.com/computer-science-engineering/vscode-cse-framework/compare/v0.0.9..v0.0.10
[0.0.9]: https://github.com/computer-science-engineering/vscode-cse-framework/compare/v0.0.8..v0.0.9
[0.0.8]: https://github.com/computer-science-engineering/vscode-cse-framework/compare/v0.0.7..v0.0.8
[0.0.7]: https://github.com/computer-science-engineering/vscode-cse-framework/compare/v0.0.6..v0.0.7
[0.0.6]: https://github.com/computer-science-engineering/vscode-cse-framework/compare/v0.0.5..v0.0.6
[0.0.5]: https://github.com/computer-science-engineering/vscode-cse-framework/compare/v0.0.4..v0.0.5
[0.0.4]: https://github.com/computer-science-engineering/vscode-cse-framework/compare/v0.0.3..v0.0.4
[0.0.3]: https://github.com/computer-science-engineering/vscode-cse-framework/compare/v0.0.1..v0.0.3
[0.0.2]: https://github.com/computer-science-engineering/vscode-cse-framework/compare/v0.0.1..v0.0.2
[0.0.1]: https://github.com/computer-science-engineering/vscode-cse-framework/releases/tag/v0.0.1
