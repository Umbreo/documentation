#!/bin/bash

mkdocs build --clean
mkdocs build --clean -d ../public/documentation/
mkdocs serve
