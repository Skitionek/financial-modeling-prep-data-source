#!/usr/bin/env bash
#author     :Dominik Maszczyk
#date       :2019-06-12
#email      :Skitionek@gmail.com
#==============================================================================

cross-env BABEL_ENV=production babel src --out-dir ./ --source-maps --ignore "*.json" && (echo "Build successful")