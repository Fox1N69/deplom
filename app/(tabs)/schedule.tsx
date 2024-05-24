import { Text, View } from "tamagui";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()

export default function ScheduleStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="schedule" component={ScheduleScreen} options={{
        headerTitle: 'Заказать справку' 
      }} />
    </Stack.Navigator>
  );
}

function ScheduleScreen() {
  return (
    <View>
      <Text>ScheduleScreen</Text>
    </View>
  )
}