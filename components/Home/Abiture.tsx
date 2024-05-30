import WebView from "react-native-webview";

export default function AbitureScreen() {
  const abitureHtml = require("web/abiture.html");
  return <WebView source={abitureHtml} />;
}

// Copyright (c) [2024] [Максимович Паве Вячеславович]
// Все права защищены. Использование, копирование и модификация этого кода
// без явного письменного согласия автора запрещены.
