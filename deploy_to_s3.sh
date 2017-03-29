#!/bin/bash

mkdocs build --clean
mkdocs build --clean -d ../generated_documentation/
aws s3 cp --recursive documentation_site s3://docs.umbreo.com/
