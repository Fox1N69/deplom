import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  useWindowDimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
  useNavigation,
} from "@react-navigation/native";
import HelpScreen from "app/home/HelpModal";
import { HomeCard } from "@components/Home/HomeCard";
import { H5, Image, ScrollView, XStack, YStack } from "tamagui";
import AboutOrganization from "@components/Home/AboutOrganization";
import AbitureScreen from "@components/Home/Abiture";
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { useEffect, useRef, useState } from "react";
import LottieView from "lottie-react-native";

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
            marginTop: 40,
          }}
        >
          Колледж цифровых и педагогических технологий
        </Text>
        <YStack marginTop="$8">
          <H5>Полезная информация:</H5>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            maxHeight={300}
            borderTopLeftRadius={10}
            borderBottomLeftRadius={10}
            scrollEventThrottle={16}
            bounces={true}
            contentContainerStyle={{justifyContent: 'center'}}
          >
            <XStack
              style={{
                alignItems: "center",
              }}
              gap="$5"
            >
              <HomeCard
                onPress={() => {
                  navigation.navigate("AboutOrganization");
                }}
                title="Сведения об образовательной организации"
                image_url="https://kcpt72.ru/wp-content/themes/basic/assets/img/Categories/kcpt.png"
                animation="bouncy"
                scale={0.9}
                pressStyle={{ scale: 0.975 }}
              />
              <HomeCard
                onPress={() => {
                  navigation.navigate("AbitureScreen");
                }}
                title="Абитуриенту поступить в колледж"
                image_url="https://kcpt72.ru/wp-content/themes/basic/assets/img/Categories/special.png"
                animation="bouncy"
                scale={0.9}
                pressStyle={{ scale: 0.975 }}
              />
              <HomeCard
                title="Профиссиональное воспитание"
                image_url="https://kcpt72.ru/wp-content/themes/basic/assets/img/Categories/volonter.png"
                animation="bouncy"
                scale={0.9}
                pressStyle={{ scale: 0.975 }}
              />
            </XStack>
          </ScrollView>
        </YStack>
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
