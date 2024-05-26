import { TamaguiProvider, Text } from "tamagui";
import {
  Home,
  Newspaper,
  ClipboardList,
  Clipboard,
} from "@tamagui/lucide-icons";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import HomeScreen from ".";
import NewsScreen from "./news";
import CertificateScreen from "./certificate";
import ScheduleScreen from "./schedule";
import { createContext, useEffect, useState } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
  useNavigationState,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";
import config from "tamagui.config";

const Tabs = AnimatedTabBarNavigator();

export const ActiveRouteContext = createContext<string>("");

export default function TabLayout() {
  const state = useNavigationState((state) => state);
  const [activeRouteName, setActiveRouteName] = useState<string>("");

  useEffect(() => {
    if (state) {
      const routeName = state.routes[state.index]?.name || "";
      setActiveRouteName(routeName);
    }
  }, [state]);

  const theme = useColorScheme();
  const tabBarTheme = theme === "dark" ? "#333333" : "#ffffff";
  const iconTheme = theme === "dark" ? "#fff" : "#222222";
  const activeBackgroundTheme = theme == "dark" ? "#1f599c" : "#2B8EE4";
  const activeTintTheme = theme == "dark" ? "#000" : "#fff";

  return (
    <TamaguiProvider config={config} defaultTheme={theme as any}>
      <ThemeProvider value={theme === "dark" ? DarkTheme : DefaultTheme}>
        <ActiveRouteContext.Provider value={activeRouteName}>
          <Tabs.Navigator
            tabBarOptions={{
              activeTintColor: activeTintTheme,
              inactiveTintColor: "#222222",
              activeBackgroundColor: activeBackgroundTheme,
            }}
            appearance={{
              floating: true,
              shadow: true,
              tabBarBackground: tabBarTheme,
            }}
          >
            <Tabs.Screen
              name="Главная"
              component={HomeScreen}
              options={{
                tabBarIcon: ({
                  focused,
                  color,
                  size,
                }: {
                  focused: boolean;
                  color: string;
                  size: number;
                }) => (
                  <Home
                    color={focused ? color : iconTheme}
                    size={size ? size : 24}
                  />
                ),
              }}
            />
            <Tabs.Screen
              name="Новости"
              component={NewsScreen}
              options={{
                tabBarIcon: ({
                  focused,
                  color,
                  size,
                }: {
                  focused: boolean;
                  color: string;
                  size: number;
                }) => (
                  <Newspaper
                    color={focused ? color : iconTheme}
                    size={size ? size : 24}
                  />
                ),
              }}
            />
            <Tabs.Screen
              name="Справки"
              component={CertificateScreen}
              options={{
                tabBarIcon: ({
                  focused,
                  color,
                  size,
                }: {
                  focused: boolean;
                  color: string;
                  size: number;
                }) => (
                  <Clipboard
                    color={focused ? color : iconTheme}
                    size={size ? size : 24}
                  />
                ),
              }}
            />
            <Tabs.Screen
              name="Расписание"
              component={ScheduleScreen}
              options={{
                tabBarIcon: ({
                  focused,
                  color,
                  size,
                }: {
                  focused: boolean;
                  color: string;
                  size: number;
                }) => (
                  <ClipboardList
                    color={focused ? color : iconTheme}
                    size={size ? size : 24}
                  />
                ),
              }}
            />
          </Tabs.Navigator>
        </ActiveRouteContext.Provider>
      </ThemeProvider>
    </TamaguiProvider>
  );
}
