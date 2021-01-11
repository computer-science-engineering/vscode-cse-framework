workspaceFolder :=

# https://gist.github.com/sighingnow/deee806603ec9274fd47
ifneq ($(OS),Windows_NT)
	workspaceFolder = ./
endif

#*****************
# Code tasks
#*****************

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

code: create-package

all: git code
