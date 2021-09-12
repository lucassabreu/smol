#!/bin/bash

rm -rf example
git clone https://github.com/gohugoio/hugoBasicExample.git example

rm -rf themes/default
mkdir example/themes -p
ln -s . example/themes/default

cd example && hugo -t default
