import WebView from "react-native-webview";
import { Text, View } from "tamagui";

export default function NewsScreen() {
  return (
    <WebView
      source={{
        uri: "https://kcpt72.ru/category/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C/",
      }}
    />
  );
}
