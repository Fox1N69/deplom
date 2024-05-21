"use client";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, TouchableOpacity, Button } from "react-native";
import {
  Button as TamaguiButton,
  Form,
  H4,
  Text,
  View,
  Spinner,
  stylePropsAll,
  XStack,
  XGroup,
  Select,
  DialogTitle,
} from "tamagui";
import {
  ArmyForm,
  FormAboutTraning,
  FormAboutPayments,
} from "@components/certificate/forms";
import SectionButton from "@components/certificate/SectionButton";
import { CertificateMenu } from "@components/certificate/dropDownMenu";

export default function CertificateScreen() {
  const [selectedSection, setSelectedSection] = useState<number | null>(null);

  const renderSelectedForm = () => {
    switch (selectedSection) {
      case 1:
        return <FormAboutTraning />;
      case 2:
        return <ArmyForm />;
      case 3:
        return <FormAboutPayments />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <CertificateMenu onSelect={setSelectedSection} />
      </View>

      <View>
        {selectedSection === null && (
          <View style={styles.informView}>
            <Text fontSize={20} fontWeight={"bold"}>
              Увожаемые студенты
            </Text>
            <Text fontSize={16}>
              1. Если Вам необходима справка о том, что Вы обучаетесь в Колледже
              цифровых и педагогических технологий — выберите раздел «Справка об
              обучении»;
            </Text>
            <Text fontSize={16}>
              2. Если Вам необходима справка о выплатах — выберите раздел
              «Справка о стипендии и соц.выплатах»;
            </Text>
            <Text fontSize={16}>
              3. Если Вам необходима справка для предоставления в военкомат —
              выберите раздел «Справка в военкомат»;
            </Text>
          </View>
        )}
        {selectedSection !== null && renderSelectedForm()}
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
    paddingBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
