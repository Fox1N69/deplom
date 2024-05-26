import * as React from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";
import { ToggleTheme } from "@components/ToggleTheme";
import { Link } from "expo-router";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
  useNavigation,
} from "@react-navigation/native";
import HelpScreen from "app/home/HelpModal";
import { NewsCard } from "@components/News/NewsCard";
import { HomeCard } from "@components/Home/HomeCard";
import { Image, ScrollView, TamaguiProvider, XStack, YStack } from "tamagui";
import Colors from "constants/Colors";
import config from "tamagui.config";
import { FontDisplay } from "expo-font";
import AboutOrganization from "@components/Home/AboutOrganization";
import AbitureScreen from "@components/Home/Abiture";

const Stack = createStackNavigator();

function HomeScreen() {
  const theme = useColorScheme();
  const textColor = theme === "dark" ? "white" : "black";
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <ThemeProvider value={theme === "dark" ? DarkTheme : DefaultTheme}>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: textColor,
            textAlign: "center",
          }}
        >
          Колледж цифровых и педагогических технологий
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
        >
          <XStack
            style={{
              alignItems: "center",
            }}
            gap="$5"
            marginTop="$8"
          >
            <HomeCard
              onPress={() => {
                navigation.navigate("AboutOrganization");
              }}
              title="Сведения об образовательной организации"
              image_url="https://kcpt72.ru/wp-content/themes/basic/assets/img/Categories/kcpt.png"
            />

            <HomeCard
              onPress={() => {
                navigation.navigate("AbitureScreen");
              }}
              title="Абитуриенту поступить в колледж"
              image_url="https://kcpt72.ru/wp-content/themes/basic/assets/img/Categories/special.png"
            />
            <HomeCard
              title="Профиссиональное воспитание"
              image_url="https://kcpt72.ru/wp-content/themes/basic/assets/img/Categories/volonter.png"
            />
          </XStack>
        </ScrollView>
      </View>
    </ThemeProvider>
  );
}

type RootStackParamList = {
  Modal: undefined;
  AboutOrganization: undefined;
  AbitureScreen: undefined;
};

export default function HomeStack() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const theme = useColorScheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="index"
        component={HomeScreen}
        options={{
          headerTitle: "Главный экран",
          headerRight: () => (
            <Pressable
              style={{ width: "85%" }}
              onPress={() => navigation.navigate("Modal")}
            >
              <Text style={{ color: theme === "dark" ? "#fff" : "#000" }}>
                Поддержка
              </Text>
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="Modal"
        component={HelpScreen}
        options={{ presentation: "modal", title: "Поддержка" }}
      />
      <Stack.Screen
        name="AboutOrganization"
        component={AboutOrganization}
        options={{ title: "Об оргазницаии" }}
      />
      <Stack.Screen
        name="AbitureScreen"
        component={AbitureScreen}
        options={{ title: "Абитуриенту" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
});
