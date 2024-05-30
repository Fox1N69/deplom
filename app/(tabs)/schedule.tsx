import GroupSelect from "@components/Schedule/GroupSelect";
import { createStackNavigator } from "@react-navigation/stack";
import { H1, H3, Text, View } from "tamagui";
import axios from "axios";
import { useState, useEffect } from "react";

function ScheduleScreen() {
  return (
    <View>
      <H3 textAlign="center">
        Тут должно было быть расписание, но так как нет времяни, ресурсов и
        нормального api, я его не добавил, в дальнейшем это возможно, но не
        сейчас
      </H3>
    </View>
  );
}

// Copyright (c) [2024] [Максимович Паве Вячеславович]
// Все права защищены. Использование, копирование и модификация этого кода
// без явного письменного согласия автора запрещены.

const Stack = createStackNavigator();

export default function StackSchadule() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ScheduleScreen"
        component={ScheduleScreen}
        options={{ title: "Расписание" }}
      />
    </Stack.Navigator>
  );
}
