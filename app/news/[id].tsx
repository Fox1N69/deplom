import { useEffect, useState } from 'react';
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "tamagui";

interface News {
  title: string;
  content: string;
}

export default function NewsDetail() {
  const { id } = useLocalSearchParams();
  const [news, setNews] = useState<News | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/news/${id}/full`)
      .then(response => response.json())
      .then(data => setNews(data))
      .catch(error => console.error('Ошибка при загрузке новости:', error));
  }, [id]);

  return (
    <View>
      {news ? (
        <View>
          <Text>{news.title}</Text>
          <Text>{news.content}</Text>
        </View>
      ) : (
        <Text>Загрузка новости...</Text>
      )}
    </View>
  );
}