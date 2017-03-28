#!/bin/bash

mkdocs build --clean
mkdocs build --clean -d ../generated_documentation/
mkdocs serve
