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

interface NewsCardProps extends CardProps {
  image_url: string;
  title: string;
  paragraph: string;
  footerContent?: React.ReactNode;
  backgroundContent?: React.ReactNode;
}

export function NewsCard({
  image_url,
  title,
  paragraph,
  footerContent,
  backgroundContent,
  ...cardProps
}: NewsCardProps) {
  return (
      <Card elevate size="$4" bordered {...cardProps}>
        <Card.Header padded>
          <Image
            source={{ uri: image_url }}
            style={{
              width: "100%",
              height: undefined,
              aspectRatio: 1.5,
              borderRadius: 10,
            }}
            resizeMode="stretch"
          />
          <H3 style={{ marginTop: 20 }}>{title}</H3>
          <Paragraph theme="alt2">{paragraph}</Paragraph>
        </Card.Header>
        <Card.Footer padded>{footerContent}</Card.Footer>
        <Card.Background>{backgroundContent}</Card.Background>
      </Card>
  );
}
