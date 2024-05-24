import * as React from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ToggleTheme } from '@components/ToggleTheme';
import { Link } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import HelpScreen from 'app/home/HelpModal';

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >Колледж цифровых и педагогических технологий</Text>
    </View>
  );
}

export default function HomeStack() {
  const navigation = useNavigation();

  const openModal = () => {
    navigation.navigate('Modal')
  }


  return (
    <Stack.Navigator >
      <Stack.Screen name="index" component={HomeScreen} options={{
        headerTitle: 'Главный экран',
         headerRight: () => (
          <Pressable style={{width: '85%'}} onPress={() => navigation.navigate('Modal')}>
            <Text>Поддержка</Text>
          </Pressable>
        ),
      }} />
      <Stack.Screen  name='Modal' component={HelpScreen} options={{presentation: 'modal'}} />
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