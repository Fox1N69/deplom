import { Text, View } from 'tamagui'

export default function NewsScreen() {
  return (
    <View flex={1} alignItems="center">
      <Text fontSize={20}>Новости</Text>

      <View>
       <WebView source={{ uri: 'https://www.google.com' }} />
      </View>
    </View>
  )
}
