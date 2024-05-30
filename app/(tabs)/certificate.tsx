"use client";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Button as TamaguiButton, Text, View } from "tamagui";
import {
  ArmyForm,
  FormAboutTraning,
  FormAboutPayments,
} from "@components/certificate/forms";
import SectionButton from "@components/certificate/SectionButton";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

type CertificateStackParamList = {
  certificate: undefined;
  FormAboutTraning: undefined;
  ArmyForm: undefined;
  FormAboutPayments: undefined;
};

const Stack = createStackNavigator<CertificateStackParamList>();

export default function CertificateStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="certificate"
        component={CertificateScreen}
        options={{
          headerTitle: "Заказать справку",
        }}
      />
      <Stack.Screen
        name="FormAboutTraning"
        component={FormAboutTraning}
        options={{
          headerTitle: "Справка об обучении",
        }}
      />
      <Stack.Screen
        name="ArmyForm"
        component={ArmyForm}
        options={{ headerTitle: "Справка для военкомата" }}
        // Copyright (c) [2024] [Максимович Паве Вячеславович]
        // Все права защищены. Использование, копирование и модификация этого кода
        // без явного письменного согласия автора запрещены.
      />
      <Stack.Screen
        name="FormAboutPayments"
        component={FormAboutPayments}
        options={{
          headerTitle: "Справка о выплатах",
        }}
      />
    </Stack.Navigator>
  );
}

function CertificateScreen() {
  const [selectedSection, setSelectedSection] = useState<number | null>(null);
  const navigation =
    useNavigation<StackNavigationProp<CertificateStackParamList>>();

  const handleSection = (section: number) => {
    setSelectedSection(section);

    switch (section) {
      case 1:
        navigation.navigate("FormAboutTraning");
        break;
      case 2:
        navigation.navigate("ArmyForm");
        break;
      case 3:
        navigation.navigate("FormAboutPayments");
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.informView}>
          <Text fontSize={20} fontWeight={"bold"}>
            Увaжаемые студенты
          </Text>
          <Text fontSize={16}>
            1. Если Вам необходима справка о том, что Вы обучаетесь в Колледже
            цифровых и педагогических технологий — выберите раздел «Справка об
            обучении»;
          </Text>
          <Text fontSize={16}>
            2. Если Вам необходима справка о выплатах — выберите раздел «Справка
            о стипендии и соц.выплатах»;
          </Text>
          <Text fontSize={16}>
            3. Если Вам необходима справка для предоставления в военкомат —
            выберите раздел «Справка в военкомат»;
          </Text>
        </View>
      </View>

      <View style={styles.menu}>
        <SectionButton
          title="Справка об обучении"
          active={selectedSection === 1}
          onPress={() => handleSection(1)}
        />
        <SectionButton
          title="Справка о выплатах"
          active={selectedSection === 3}
          onPress={() => handleSection(3)}
        />
        <SectionButton
          title="Справка для военкомата"
          active={selectedSection === 2}
          onPress={() => handleSection(2)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  menu: {
    paddingHorizontal: 10,
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    width: "100%",
  },
  dynamicButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  informView: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    padding: 15,
  },
});
