import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
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
  XStack,
  YGroup,
  YStack,
} from "tamagui";
import axios from "axios";
import {
  Alert,
  GestureResponderEvent,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { AlertTriangle } from "@tamagui/lucide-icons";

export const FormAboutTraning = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    patronymic: "",
    direction: "",
    group: "",
    quantity: "1",
    message: "",
  });

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: GestureResponderEvent) => {
    e.preventDefault();
    console.log("Sending data:", formData); // Log the data being sent
    try {
      await axios.post("http://localhost:8000/api/emailTraning", formData);
      console.log("Data sent successfully");
      Alert.alert(
        "Заявка отправлена",
        "Справка будет готова в течение 3 рабочих дней"
      );
    } catch (error) {
      console.error("Error sending data", error);
      Alert.alert(
        "Ошибка",
        "Справка не было отправленна, так как произошел сбой на сервере \n попробуйте позже или отправти заявку через сайт: https://kcpt72.ru/"
      );
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: 100 }}>
        <View style={{paddingBottom: 40}}>
          <Form
            onSubmit={() => handleSubmit}
            minWidth={400}
            gap="$2"
            borderWidth={1}
            borderRadius="$4"
            borderColor="$borderColor"
            paddingHorizontal="$6"
          >
            <Label>ФИО Студента*</Label>
            <Input
              placeholder="Имя"
              value={formData.first_name}
              onChangeText={(value) => handleChange("first_name", value)}
            />
            <Input
              placeholder="Фамилия"
              value={formData.last_name}
              onChangeText={(value) => handleChange("last_name", value)}
            />
            <Input
              placeholder="Отчество"
              value={formData.patronymic}
              onChangeText={(value) => handleChange("patronymic", value)}
            />

            <Label>Специальность</Label>
            <Input
              placeholder="ИСИП"
              value={formData.direction}
              onChangeText={(value) => handleChange("direction", value)}
            />
            <Label>Группа</Label>
            <Input
              placeholder="21-11-1"
              value={formData.group}
              onChangeText={(value) => handleChange("group", value)}
            />

            <YGroup>
              <Label>Количество</Label>
              <Input
                size={"$2"}
                width={90}
                value={formData.quantity}
                onChangeText={(value) => handleChange("quantity", value)}
              />
              <Label>Примичание</Label>
              <TextArea
                value={formData.message}
                onChangeText={(value) => handleChange("message", value)}
              />
            </YGroup>
            <Text style={{fontSize: 12}}>
              Нажимая на кнопку ОТПРАВИТЬ, Вы соглашаетесь c Политикой
              конфиденциальности
            </Text>
            <Button
              variant="outlined"
              theme={"red_active"}
              onPress={(e) => handleSubmit(e)}
            >
              Отправить
            </Button>
          </Form>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export const FormAboutPayments = () => {
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
        <Button variant="outlined" theme={"red_active"}>
          Отправить
        </Button>
      </Form>
    </View>
  );
};

export const ArmyForm = () => {
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
        <Input height={35} placeholder="Имя" />
        <Input height={35} placeholder="Фамилия" />
        <Input height={35} placeholder="Отчество" />

        <Label>Выбирите специальность</Label>
        <Input />
        <Label>Выберите группу</Label>
        <Input />

        <YGroup>
          <Label>Наиминование военкомата</Label>
          <Input width={90} placeholder="ФКУ отдел военного комисариата" />
          <Label>Ваше сообщение</Label>
          <TextArea />
        </YGroup>
        <Button variant="outlined" theme={"red_active"}>
          Отправить
        </Button>
      </Form>
    </View>
  );
};
