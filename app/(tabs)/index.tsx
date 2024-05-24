import * as React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Создаем навигационный стек
function HomeScreen() {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="index" component={HomeScreen} options={{
        headerTitle: 'Главный экран' 
      }} />
    </Stack.Navigator>
  );
}