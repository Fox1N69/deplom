import { Github } from "@tamagui/lucide-icons";
import { H1, H3, H4, Paragraph, Text, View } from "tamagui";

// Copyright (c) [2024] [Максимович Паве Вячеславович]
// Все права защищены. Использование, копирование и модификация этого кода
// без явного письменного согласия автора запрещены.

export default function HelpScreen() {
  return (
    <View style={{ padding: 20, paddingTop: "50%", gap: 30 }}>
      <H4 style={{ textAlign: "center" }}>
        Если возникли какие-то проблемы с работой приложения или есть
        предложения по его улучшению, напишите в тг: <Text>@fox1n69 </Text>{" "}
      </H4>
      <Paragraph>
        Приложение созданно мной, при поддержки меня и моего времяни, всем
        желающим нанять меня на работу, вот мой <Github />: github.com/Fox1N69
      </Paragraph>
    </View>
  );
}
