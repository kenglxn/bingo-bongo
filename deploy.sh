#!/bin/bash 

# inspired by https://gist.github.com/nobuoka/d0f088df57d50e4cda1a

npm run build
git add -f ./build
treeObjId=$(git write-tree --prefix=build)
git reset -- ./build
commitId=$(git commit-tree -p gh-pages -m "new deploy" $treeObjId)
git update-ref refs/heads/gh-pages $commitId
git push origin gh-pages