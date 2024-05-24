import React, { useEffect, useState } from "react";
import { Text, View } from "tamagui";
import { ActivityIndicator } from "react-native";

const API_URL = "https://api.example.com";

interface RouteParams {
  group: string;
  date: string;
}

interface Route {
  params: RouteParams;
}

interface ErrorState {
  message: string;
}

interface LessonDetails {
  Number: number;
  Subject: string;
  Prepod: string;
  Classroom: string;
  IsChange: boolean;
  Comment?: string;
}

interface Schedule {
  [lessonId: string]: LessonDetails;
}

function ScheduleScreen({ route }: { route: Route }) {
  const [schedule, setSchedule] = useState<Schedule | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorState | null>(null);
  const group = route?.params?.group || "defaultGroup";
  const date = route?.params?.date || "defaultDate";

  useEffect(() => {
    console.log("Route:", route);
    console.log("Route Params:", route.params);
    const fetchSchedule = async () => {
      try {
        const response = await fetch(
          `${API_URL}/api/class_day?date=${date}&group=${group}`
        );
        const data = await response.json();
        setSchedule(data);
        setLoading(false);
      } catch (err: any) {
        setError({ message: err.message || "An unknown error occurred" });
        setLoading(false);
      }
    };

    fetchSchedule();
  }, [date, group]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={{ paddingTop: 100 }}>
      {schedule ? (
        Object.entries(schedule).map(([lessonId, details]) => (
          <View key={lessonId}>
            <Text>
              Урок {details.Number}: {details.Subject}
            </Text>
            <Text>Преподаватель: {details.Prepod}</Text>
            <Text>Кабинет: {details.Classroom}</Text>
            <Text>Изменения: {details.IsChange ? "Да" : "Нет"}</Text>
            {details.Comment && <Text>Комментарий: {details.Comment}</Text>}
          </View>
        ))
      ) : (
        <Text>Расписание недоступно</Text>
      )}
    </View>
  );
}

export default ScheduleScreen;
