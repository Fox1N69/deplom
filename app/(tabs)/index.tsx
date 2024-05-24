import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ToggleTheme } from '@components/ToggleTheme';

const Stack = createStackNavigator();

// Создаем навигационный стек
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >Колледж цифровых и педагогических технологий</Text>
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


const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight:'bold', 
  }
})