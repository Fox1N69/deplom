import React from "react";
import {
  Button,
  Form,
  H4,
  Input,
  Label,
  ScrollView,
  Select,
  Spinner,
  Text,
  TextArea,
  View,
  XGroup,
  YGroup,
} from "tamagui";

export const FormAboutTraning = () => {
  return (
    <View>
      <Form
        onSubmit={() => console.log("he")}
        minWidth={400}
        gap="$2"
        borderWidth={1}
        borderRadius="$4"
        borderColor="$borderColor"
        paddingHorizontal="$6"
      >
        <Input placeholder="Имя" />
        <Input placeholder="Фамилия" />
        <Input placeholder="Отчество" />

        <Label>Выбирите специальность</Label>
        <Input />
        <Label>Выберите группу</Label>
        <Input />

        <YGroup>
          <Label>Количество</Label>
          <Input size={"$2"} width={90} />
          <Label>Примичание</Label>
          <TextArea />
        </YGroup>
        <Button variant="outlined" theme={"red_active"}>Отправить</Button>
      </Form>
    </View>
  );
};

export const ArmyForm = () => {
  return (
    <View>
      <Form onSubmit={() => console.log("he")}>
        <Label>ФИО</Label>
        <Input placeholder="Имя" />
        <Input placeholder="Фамилия" />
        <Input placeholder="Отчество" />
      </Form>
    </View>
  );
};
