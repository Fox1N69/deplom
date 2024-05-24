import { Text } from "tamagui";
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
import { useNavigationState } from "@react-navigation/native";

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

  return (
    <ActiveRouteContext.Provider value={activeRouteName}>
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: "#1f599c",
          inactiveTintColor: "#222222",
        }}
        appearance={{
          floating: true,
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
                color={focused ? color : "#222222"}
                size={size ? size : 24}
              />
            ),
            headerLeft: () => {
              <Text>Hello</Text>;
            },
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
                color={focused ? color : "#222222"}
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
                color={focused ? color : "#222222"}
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
                color={focused ? color : "#222222"}
                size={size ? size : 24}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </ActiveRouteContext.Provider>
  );
}
