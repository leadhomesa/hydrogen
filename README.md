# @leadhome/utilities

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Describe @leadhome/utilities here.

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

## Releasing

All merges into `master` create an automated semvar release. Check Buildkite for details on the build process.

## Contribution

Branch off `master` and PR back into `master. Note, for now as soon as you merge changes in it will fire off a release. This will change in the future. Suggestion: Use commitzen to do commits. It uses the correct syntax so NPM can do a proper semvar release:`npm run commit`
