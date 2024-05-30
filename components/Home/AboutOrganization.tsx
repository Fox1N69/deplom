import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { ScrollView, Text, View } from "tamagui";
import axios from "axios";

interface AboutDataItem {
  ID: number;
  title: string;
  content: string;
}

export default function AboutOrganization() {
  const [aboutData, setAboutData] = useState<AboutDataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://mobile-rest.onrender.com/api/about"
        );
        setAboutData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {aboutData.map((item) => (
        <View key={item.ID} style={styles.itemContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.content}>{item.content}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

// Copyright (c) [2024] [Максимович Паве Вячеславович]
// Все права защищены. Использование, копирование и модификация этого кода
// без явного письменного согласия автора запрещены.

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  itemContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
  },
});
