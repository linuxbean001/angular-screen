#!/bin/bash

if [ "$1" == "--update" ]; then
    echo "Reverting package-lock.json"
    git checkout -- package-lock.json
    echo "Reverting packages.json"
    git checkout -- packages.json
    echo "Pulling newest commits"
    git pull
    if [ $? -ne 0 ]; then
        echo "Pull failed"
        exit 1
    fi
    cd src/app/app-common/api-client/
    echo "Pulling newest api"
    git pull origin master
    if [ $? -ne 0 ]; then
        echo "Pull failed"
        exit 1
    fi
    cd ../../../..
else
    echo "Using current commit. Use --update to pull latest."
fi

if [ -d "node_modules" ]; then
    echo "Removing current node_modules"
    rm -r node_modules
fi

echo "Installing node_modules"
npm install

echo "Angular build"
ng build
