import { exec } from 'cordova';

class DetectWebViewEngine {
    static isUIWebView(successCallback: any, errorCallback: any) {
        exec(successCallback, errorCallback, 'DetectWebViewEngine', 'isUIWebView', []);
    }

    static isWKWebView(successCallback: any, errorCallback: any) {
        exec(successCallback, errorCallback, 'DetectWebViewEngine', 'isWKWebView', []);
    }
}

export = DetectWebViewEngine;
