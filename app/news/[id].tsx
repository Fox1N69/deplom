import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { Text, View, ScrollView, Image, Button } from "tamagui";
import { StyleSheet, useColorScheme } from "react-native";

interface News {
  title: string;
  content: string;
  newsimage_url: string;
}

export default function NewsDetail() {
  const { id } = useLocalSearchParams();
  const [news, setNews] = useState<News | null>(null);
  const theme = useColorScheme();
  const textColor = theme === "dark" ? "#fff" : "#000";

  // Copyright (c) [2024] [Максимович Паве Вячеславович]
  // Все права защищены. Использование, копирование и модификация этого кода
  // без явного письменного согласия автора запрещены.

  useEffect(() => {
    fetch(`https://mobile-rest.onrender.com/api/news/${id}/full`)
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error("Ошибка при загрузке новости:", error));
  }, [id]);

  const styles = StyleSheet.create({
    container: {
      paddingTop: 30,
      padding: 20,
      backgroundColor: theme === "dark" ? "#000" : "#fff",
    },
  });

  return (
    <ScrollView contentContainerStyle={{ flexGrow: news ? 1 : 0 }}>
      {news ? (
        <View style={styles.container}>
          <Image
            source={{ uri: news.newsimage_url }}
            style={{
              width: "100%",
              height: undefined,
              aspectRatio: 1.5,
              borderRadius: 5,
            }}
            resizeMethod="resize"
          />
          <Text
            fontSize={20}
            fontWeight={"bold"}
            textAlign="left"
            marginTop="$8"
            color={textColor}
          >
            {news.title}
          </Text>
          <Text fontSize={16}>{news.content}</Text>
        </View>
      ) : (
        <Text>Загрузка новости...</Text>
      )}
    </ScrollView>
  );
}
