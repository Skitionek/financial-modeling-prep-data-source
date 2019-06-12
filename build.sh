#!/usr/bin/env bash
#author     :Dominik Maszczyk
#date       :2019-06-12
#email      :Skitionek@gmail.com
#==============================================================================

babel-node generate/mockedResponses &&
cross-env BABEL_ENV=production babel src --out-dir ./ --source-maps --ignore "*.json" &&
rm -r mocks/functions &&
babel-node generate/buildMockedResponses &&
babel-node generate/ApiTree &&
(echo "Build successful")