import React, { useState, useEffect } from "react";
import { View, Text, Button } from "tamagui";
import axios from "axios";

interface Group {
  id: string;
  name: string;
}

const GroupSelect = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("2024-05-26");
  const [schedule, setSchedule] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get<Group[]>("http://localhost:8000/api/groups")
      .then((response) => {
        console.log(response.data); // Добавьте эту строку для проверки данных
        setGroups(response.data);
      })
      .catch((error) => {
        console.error("Error fetching groups:", error);
      });
  }, []);

  const handleGroupChange = (groupId: string) => {
    setSelectedGroup(groupId);
  };

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  const fetchSchedule = () => {
    axios
      .get(
        `http://localhost:8000/api/class_week?date=${selectedDate}&group=${selectedGroup}`
      )
      .then((response) => {
        setSchedule(response.data);
      })
      .catch((error) => {
        console.error("Error fetching schedule:", error);
      });
  };

  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {groups.map((group) => (
          <Button key={group.id} onPress={() => handleGroupChange(group.id)} />
        ))}
      </View>
      {/* Добавьте остальной код для выбора даты и отображения расписания согласно вашим потребностям */}
      <Button onPress={fetchSchedule} />
      <View>
        {schedule.map((item, index) => (
          <Text key={index}>{item.subject}</Text>
        ))}
      </View>
    </View>
  );
};

export default GroupSelect;
