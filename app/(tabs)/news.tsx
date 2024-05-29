import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import {  YStack, } from "tamagui";
import {  router } from "expo-router";
import { createStackNavigator } from "@react-navigation/stack";
import { NewsCard } from "@components/News/NewsCard";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image_url: string;
  link: string;
}

interface NewsApiResponseItem {
  id: number;
  title: string;
  content: string;
  image_url: string;
  link: string;
}

const Stack = createStackNavigator();

export default function NewsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="news"
        component={NewsScreen}
        options={{
          headerTitle: "Новости",
        }}
      />
    </Stack.Navigator>
  );
}

function NewsScreen() {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://mobile-rest.onrender.com/api/news");
        const data = (await response.json()) as NewsApiResponseItem[];
        const mappedData = data.map((item: NewsApiResponseItem) => ({
          id: item.id,
          title: item.title,
          description: item.content.split("\n\n")[1],
          image_url: item.image_url,
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
          <NewsCard
            key={news.id}
            onPress={() =>
              router.push({
                pathname: "/news/[id]",
                params: { id: news.id },
              })
            }
            image_url={news.image_url}
            title={news.title}
            paragraph={news.description}
            animation="bouncy"
            scale={0.9}
            pressStyle={{ scale: 0.975 }}
          />
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
});
