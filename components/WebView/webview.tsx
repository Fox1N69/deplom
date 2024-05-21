import React from "react";
import { WebView as RNWebView, WebViewProps } from "react-native-webview";

const WebView: React.FC<WebViewProps> = (props) => {
  return <RNWebView {...props} />;
};

export default WebView;
