import React from "react";
import { WebView as RNWebView, WebViewProps } from "react-native-webview";

const WebView: React.FC<WebViewProps> = (props) => {
  return <RNWebView {...props} />;
};

export default WebView;

// Copyright (c) [2024] [Максимович Паве Вячеславович]
// Все права защищены. Использование, копирование и модификация этого кода
// без явного письменного согласия автора запрещены.
