import { exec } from 'cordova';

class DetectWebViewEngine {
    static isUIWebView() {
        return new Promise<boolean>((resolve, reject) => {
            exec(resolve, reject, 'DetectWebViewEngine', 'isUIWebView', []);
        });
    }

    static isWKWebView() {
        return new Promise<boolean>((resolve, reject) => {
            exec(resolve, reject, 'DetectWebViewEngine', 'isWKWebView', []);
        });
    }
}

export = DetectWebViewEngine;
