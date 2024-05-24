import React, { useState, useEffect } from "react";
import { Image, Pressable, ScrollView, StyleSheet } from "react-native";
import { Text, YStack, XStack, View } from "tamagui";
import { Link, router } from "expo-router";
import { createStackNavigator } from "@react-navigation/stack";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  link: string;
}

interface NewsApiResponseItem {
  id: number;
  title: string;
  content: string;
  link: string;
}


const Stack = createStackNavigator();

export default function NewsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="news" component={NewsScreen} options={{
        headerTitle: 'Новости' 
      }} />
    </Stack.Navigator>
  );
}

function NewsScreen() {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/news");
        const data = (await response.json()) as NewsApiResponseItem[];
        const mappedData = data.map((item: NewsApiResponseItem) => ({
          id: item.id,
          title: item.title,
          description: item.content,
          link: item.link,
        }));
        setNewsData(mappedData || []);
      } catch (error) {
        console.error("Failed to fetch news:", error);
        setNewsData([]);
      }
    };

    fetchNews();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <YStack space="$4" alignItems="center">
        {newsData.map((news, index) => (
          <Pressable
            onPress={() =>
              router.push({
                pathname: "/news/[id]",
                params: { id: news.id },
              })
            }
          >
            <XStack
              borderWidth={1}
              borderRadius={10}
              width={300}
              flexDirection="row"
              padding={10}
              alignItems="flex-start"
            >
              <Image
                source={{ uri: 'https://picsum.photos/200/300' }}
                style={{ width: 25, height: 25, }}
              />
              <YStack flex={1}>
                <XStack flexDirection="row" alignItems="center">
                  <Text style={styles.title}>{news.title}</Text>
                </XStack>
                <Text>{news.description}</Text>
              </YStack>
            </XStack>
          </Pressable>
        ))}
      </YStack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    flexShrink: 1,
  },
});
