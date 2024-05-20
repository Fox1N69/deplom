import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, TouchableOpacity } from "react-native";
import {
  Button,
  Form,
  H4,
  Text,
  View,
  Spinner,
  stylePropsAll,
  XStack,
  XGroup,
} from "tamagui";
import { ArmyForm, FormAboutTraning } from "@components/certificate/forms";
import SectionButton from "@components/certificate/SectionButton";

export default function CertificateScreen() {
  const [selectedSection, setSelectedSection] = useState<number | null>(null);

  const renderSelectedForm = () => {
    switch (selectedSection) {
      case 1:
        return <FormAboutTraning />;
      case 2:
        return <ArmyForm />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <XStack style={styles.menu}>
        <Button
          size={"$3"}
          onPress={() => setSelectedSection(1)}
          variant="outlined"
          theme={selectedSection === 1 ? "blue" : "active"}
        >
          Справка об обучение
        </Button>
        <Button
          size={"$3"}
          onPress={() => setSelectedSection(2)}
          variant="outlined"
          theme={selectedSection === 2 ? "blue" : "active"}
        >
          Справка для военкомата
        </Button>
      </XStack>
      {renderSelectedForm()}
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
    justifyContent: 'space-between',
    gap: 15,
  },
  dynamicButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
});
