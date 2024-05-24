import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from "@react-navigation/native";
import {
  Link,
  SplashScreen,
  Stack,
  useGlobalSearchParams,
  useNavigationContainerRef,
  usePathname,
} from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import { TamaguiProvider, Text } from "tamagui";

import "../tamagui-web.css";

import { config } from "../tamagui.config";
import { useFonts } from "expo-font";
import { useContext, useEffect, useRef, useState } from "react";
import WelcomScreen from "@components/Welcom/WelcomAnimation";
import { ActiveRouteContext } from "./(tabs)/_layout";
import { ToggleTheme } from "@components/ToggleTheme";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
  const [interLoaded, interError] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (interLoaded || interError) {
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
    <NavigationContainer>
      <TamaguiProvider config={config} defaultTheme={colorScheme as any} >
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack>
            <Stack.Screen
              name="(tabs)"
              options={{ headerShown: false}}
            />
            <Stack.Screen name="modal" options={{ presentation: "modal" }} />
            <Stack.Screen
              name="news/[id]"
              options={{
                title: "Подробнее",
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
    </NavigationContainer>
  );
}
