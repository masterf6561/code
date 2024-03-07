# Makefile

# Compiler
TSC = tsc

# Source and output files
SOURCE_FILE = main.ts
OUTPUT_FILE = main.js

# Build target
build:
	$(TSC) $(SOURCE_FILE)

# Run target
run: build
	node $(OUTPUT_FILE)

# Clean target
clean:
	rm -f $(OUTPUT_FILE)

# Default target
.DEFAULT_GOAL := run

