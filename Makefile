workspaceFolder :=

# https://gist.github.com/sighingnow/deee806603ec9274fd47
ifneq ($(OS),Windows_NT)
	workspaceFolder = ./
endif

#*****************
# Code tasks
#*****************

install-vsce:
	npm install -g vsce

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

code: install-vsce create-package

all: git code
