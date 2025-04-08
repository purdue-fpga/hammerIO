# Define variables
MKDOCS=mkdocs
GHP_IMPORT=ghp-import
BUILD_DIR=site

# Default target: build, deploy, and clean the site
.PHONY: all build deploy clean

# Default action: build, deploy, and clean
all: build deploy clean

# Build the MkDocs site
build:
	$(MKDOCS) build

# Deploy the site to GitHub Pages
deploy: build
	$(GHP_IMPORT) -n -p -f $(BUILD_DIR)/

# Clean up build artifacts (e.g., site directory)
clean:
	rm -rf $(BUILD_DIR)
