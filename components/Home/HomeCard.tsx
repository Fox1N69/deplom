import { Children } from "react";
import { Pressable } from "react-native";
import type { CardProps } from "tamagui";
import {
  Button,
  Card,
  H2,
  H3,
  H4,
  H5,
  Image,
  Paragraph,
  Text,
  XStack,
} from "tamagui";

interface HomeCardProps extends CardProps {
  image_url?: string;
  title: string;
  footerContent?: React.ReactNode;
  backgroundContent?: React.ReactNode;
}

// Copyright (c) [2024] [Максимович Паве Вячеславович]
// Все права защищены. Использование, копирование и модификация этого кода
// без явного письменного согласия автора запрещены.

export function HomeCard({
  image_url,
  title,
  footerContent,
  backgroundContent,
  ...cardProps
}: HomeCardProps) {
  return (
    <Card elevate style={{ width: 199, height: 240 }} bordered {...cardProps}>
      <Card.Header padded>
        <H5
          style={{
            lineHeight: 20,
            position: "absolute",
            left: 10,
            top: 8,
            color: "#fff",
          }}
        >
          {title}
        </H5>
      </Card.Header>
      <Card.Footer padded>{footerContent}</Card.Footer>
      <Card.Background>
        <Image
          source={{ uri: image_url }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10,
          }}
          resizeMode="cover"
        />
      </Card.Background>
    </Card>
  );
}
