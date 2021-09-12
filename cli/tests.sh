#!/bin/bash

rm -rf example
git clone https://github.com/gohugoio/hugoBasicExample.git example

rm -rf example/themes
mkdir -p example/themes
ln -s ../.. example/themes/default

cd example && hugo -v -t default -b $DEPLOY_PRIME_URL

ls public
