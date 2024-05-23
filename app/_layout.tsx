import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Link, SplashScreen, Stack } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import { Button, TamaguiProvider, Text, useCurrentColor } from "tamagui";

import "../tamagui-web.css";

import { config } from "../tamagui.config";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import NotFoundScreen from "./+not-found";
import NewsScreen from "./(tabs)/news";
import HomeScreen from "./(tabs)";
import WelcomScreen from "@components/Welcom/WelcomAnimation";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [interLoaded, interError] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (interLoaded || interError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync();
    }
  }, [interLoaded, interError]);

  if (!interLoaded && !interError) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const [appReady, setAppReady] = useState(false);
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);

  const colorScheme = useColorScheme();
  const [fontsLoaded, fontsError] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontsError) {
      setAppReady(true);
    }
  }, [fontsLoaded || fontsError]);

  const showAnimatedSplash = !appReady || !splashAnimationFinished;
  if (showAnimatedSplash) {
    return (
      <WelcomScreen
        onAnimationFinish={(isCancelled) => {
          if (!isCancelled) {
            setSplashAnimationFinished(true);
          }
        }}
      />
    );
  } 

  return (
    <TamaguiProvider config={config} defaultTheme={colorScheme as any}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
          <Stack.Screen
            name="news/[id]"
            options={{
              title: 'Подробнее',
              headerLeft: () => (
                <Link href="/news" asChild>
                  <Pressable>
                    <Text>Назад</Text>
                  </Pressable>
                </Link>
              ),
            }}
          />
        </Stack>
      </ThemeProvider>
    </TamaguiProvider>
  );
}
