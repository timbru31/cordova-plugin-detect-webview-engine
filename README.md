# cordova-plugin-detect-webview-engine
[![Build Status](https://travis-ci.org/timbru31/cordova-plugin-detect-webview-engine.svg?branch=master)](https://travis-ci.org/timbru31/cordova-plugin-detect-webview-engine)

[![Dependency Status](https://david-dm.org/timbru31/cordova-plugin-detect-webview-engine.svg)](https://david-dm.org/timbru31/cordova-plugin-detect-webview-engine)
[![devDependency Status](https://david-dm.org/timbru31/cordova-plugin-detect-webview-engine/dev-status.svg)](https://david-dm.org/timbru31/cordova-plugin-detect-webview-engine#info=devDependencies)
[![Known Vulnerabilities](https://snyk.io/test/github/timbru31/cordova-plugin-detect-webview-engine/badge.svg)](https://snyk.io/test/github/timbru31/cordova-plugin-detect-webview-engine)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=timbru31/cordova-plugin-detect-webview-engine)](https://dependabot.com)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![npm](https://img.shields.io/npm/v/cordova-plugin-detect-webview-engine.svg)](https://www.npmjs.com/package/cordova-plugin-detect-webview-engine)

#### Cordova plugin to determine whether the application is using UIWebView or WKWebView engine

### Supported platforms

* **iOS**

### Installation

#### from npm (recommended)
`$ cordova plugin add cordova-plugin-detect-webview-engine`

#### from git (unstable)
`$ cordova plugin add https://github.com/timbru31/cordova-plugin-detect-webview-engine.git`

### Usage

#### Check for UIWebView

```js
cordova.plugins.webviewEngine.isUIWebView().then(isUIWebView => {
    // returns true or false
});
```

#### Check for WKWebView

```js
cordova.plugins.webviewEngine.isWKWebView().then(isWKWebView => {
    // returns true or false
});
```
---
Built by (c) Tim Brust and contributors. Released under the MIT license.
