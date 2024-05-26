import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { Button } from "tamagui";

interface SectionButtonProps {
  title: string;
  active: boolean;
  onPress: () => void;
}

const SectionButton = ({ title, active, onPress }: SectionButtonProps) => {
  const theme = useColorScheme();

  const styles = StyleSheet.create({
    button: {
      padding: 10,
      borderRadius: 5,
    },

    buttonText: {
      textAlign: "center",
      color: theme === "dark" ? "#fff" : "#000",
    },
  });

  return (
    <Button
      variant={"outlined"}
      borderColor={theme === "dark" ? "#20599C" : "#0078bf"}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Button>
  );
};

export default SectionButton;
