import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import { Text } from "tamagui";
import {
  Plus,
  Home,
  Newspaper,
  ClipboardList,
  Clipboard,
} from "@tamagui/lucide-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#1f599c",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Главная",
          tabBarIcon: ({ color }) => <Home />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                <Text marginRight="$5">Поддержка</Text>
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: "Новости",
          tabBarIcon: ({ color }) => <Newspaper />,
        }}
      />
      <Tabs.Screen
        name="certificate"
        options={{
          title: "Справки",
          tabBarIcon: ({ color }) => <ClipboardList />,
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: "Расписание",
          tabBarIcon: ({ color }) => <Clipboard />,
        }}
      />
    </Tabs>
  );
}
