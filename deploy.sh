#!/bin/bash 

# inspired by https://gist.github.com/nobuoka/d0f088df57d50e4cda1a
# TODO: replace with GH Actions:
#   https://cmichel.medium.com/how-to-deploy-a-create-react-app-with-github-actions-5e01f7a7b6b

npm run build
git add -f ./build
treeObjId=$(git write-tree --prefix=build)
git reset -- ./build
commitId=$(git commit-tree -p gh-pages -m "new deploy" $treeObjId)
git update-ref refs/heads/gh-pages $commitId
git push origin gh-pages