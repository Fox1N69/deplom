import WebView from "react-native-webview";

export default function AbitureScreen() {
  const abitureHtml = require("web/abiture.html");
  return <WebView source={abitureHtml} />;
}
