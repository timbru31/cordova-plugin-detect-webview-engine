import WebKit

@objc(DetectWebViewEngine) class DetectWebViewEngine: CDVPlugin {

    @objc(isUIWebView:)
    func isUIWebView(command: CDVInvokedUrlCommand) {
        self.commandDelegate.send(CDVPluginResult(status: CDVCommandStatus_OK, messageAs: self.webView is UIWebView), callbackId: command.callbackId)
    }

    @objc(isWKWebView:)
    func isWKWebView(command: CDVInvokedUrlCommand) {
        self.commandDelegate.send(CDVPluginResult(status: CDVCommandStatus_OK, messageAs: self.webView is WKWebView), callbackId: command.callbackId)
    }
}
