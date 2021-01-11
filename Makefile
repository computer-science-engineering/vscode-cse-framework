workspaceFolder :=

# https://gist.github.com/sighingnow/deee806603ec9274fd47
ifneq ($(OS),Windows_NT)
	workspaceFolder = ./
endif

#*****************
# Code tasks
#*****************

install-rimraf:
	npm install -g rimraf

install-vsce:
	npm install -g vsce

install-npm-packages:
	npm install

create-package:
	npm run vsce-package

#*****************
# Git tasks
#*****************

git-version:
	git --version

#*****************
# All tasks
#*****************

git: git-version

code: install-rimraf install-vsce install-npm-packages create-package

all: git code
