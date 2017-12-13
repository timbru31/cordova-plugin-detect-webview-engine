"use strict";
var cordova_1 = require("cordova");
var DetectWebViewEngine = (function () {
    function DetectWebViewEngine() {
    }
    DetectWebViewEngine.isUIWebView = function () {
        return new Promise(function (resolve, reject) {
            cordova_1.exec(resolve, reject, 'DetectWebViewEngine', 'isUIWebView', []);
        });
    };
    DetectWebViewEngine.isWKWebView = function () {
        return new Promise(function (resolve, reject) {
            cordova_1.exec(resolve, reject, 'DetectWebViewEngine', 'isWKWebView', []);
        });
    };
    return DetectWebViewEngine;
}());
module.exports = DetectWebViewEngine;
