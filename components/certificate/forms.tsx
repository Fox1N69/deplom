import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  Button,
  Checkbox,
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
import { AlertTriangle, Check } from "@tamagui/lucide-icons";

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
      await axios.post(
        "https://mobile-rest.onrender.com/api/emailTraning",
        formData
      );
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
      <ScrollView>
        <View style={{ paddingBottom: 130 }}>
          <Form
            onSubmit={() => handleSubmit}
            minWidth={400}
            gap="$2.5"
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
            <Text style={{ fontSize: 12 }}>
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
  const [formData, setFormData] = useState({
    fio: "",
    specialty: "",
    group: "",
    payment_period: "",
    quantity: "1",
    sendByEmail: false,
    pickupInOffice: false,
    email: "",
    phone_number: "",
    message: "",
  });

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });

    setFormData({ ...formData, [name]: value });
  };

  const handleSendByEmailChange = (value: boolean) => {
    setFormData({ ...formData, sendByEmail: value });
  };

  const handlePickupInOfficeChange = (value: boolean) => {
    setFormData({ ...formData, pickupInOffice: value });
  };

  const handleSubmit = async (e: GestureResponderEvent) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://mobile-rest.onrender.com/api/emailPayment",
        formData
      );
      Alert.alert("Заявка отправлена", "Ожидайте получения");
    } catch (error) {
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
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ marginBottom: 100 }}
      >
        <View>
          <Form
            onSubmit={() => console.log("he")}
            minWidth={400}
            gap="$2.5"
            borderColor="$borderColor"
            paddingHorizontal="$4"
          >
            <Label>ФИО Студента*</Label>
            <Input
              value={formData.fio}
              onChangeText={(value) => handleChange("fio", value)}
            />

            <Label>Выбирите специальность*</Label>
            <Input
              value={formData.specialty}
              onChangeText={(value) => handleChange("specialty", value)}
            />
            <Label>Выберите группу*</Label>
            <Input
              value={formData.group}
              onChangeText={(value) => handleChange("group", value)}
            />
            <Label>Укажите период выплат*</Label>
            <Input
              placeholder="01.01.2022 - 01.01.2023"
              value={formData.payment_period}
              onChangeText={(value) => handleChange("payment_period", value)}
            />
            <Label>Отправка* </Label>
            <XStack gap={5} alignItems="center">
              <Checkbox
                checked={formData.sendByEmail}
                onCheckedChange={handleSendByEmailChange}
              />
              <Text fontSize={"$3"}>
                Отправить справку на почтку (указать e-mail ниже)
              </Text>
            </XStack>
            <XStack gap={5} alignItems="center">
              <Checkbox
                checked={formData.pickupInOffice}
                onCheckedChange={handlePickupInOfficeChange}
              />
              <Text fontSize={"$3"}>
                Заберу оригинал в бухгалтерии колледжа
              </Text>
            </XStack>

            <YGroup gap={10}>
              <Label>Количество</Label>
              <Input
                size={"$2"}
                width={90}
                value={formData.quantity}
                onChangeText={(value) => handleChange("quantity", value)}
              />
              {formData.sendByEmail && (
                <Input
                  placeholder="example@mail.com"
                  value={formData.email}
                  onChangeText={(value) => handleChange("email", value)}
                />
              )}

              <Label>Введите номер телефона</Label>
              <Input
                placeholder="8900000000"
                value={formData.phone_number}
                onChangeText={(value) => handleChange("phone_number", value)}
              />
              <Label>Примичание</Label>
              <TextArea
                value={formData.message}
                onChangeText={(value) => handleChange("message", value)}
              />
            </YGroup>

            <Text style={{ fontSize: 12 }}>
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

export const ArmyForm = () => {
  const [formData, setFormData] = useState({
    fio: "",
    specialty: "",
    group: "",
    army_name: "",
    message: "",
  });

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: GestureResponderEvent) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://mobile-rest.onrender.com/api/emailArmy",
        formData
      );
      Alert.alert(
        "Заявка отправлена",
        "Ваша информация была успешно отправлена и будет обработана в ближайшее время."
      );
    } catch (error) {
      console.error("Error sending data", error);
      Alert.alert(
        "Ошибка",
        "Произошла ошибка при отправке данных. Пожалуйста, попробуйте еще раз."
      );
    }
  };

  return (
    <View>
      <Form
        onSubmit={() => handleSubmit}
        minWidth={400}
        gap="$2.5"
        borderRadius="$4"
        borderColor="$borderColor"
        paddingHorizontal="$6"
      >
        <Label>ФИО Студента*</Label>
        <Input
          placeholder="ФИО"
          value={formData.fio}
          onChangeText={(value) => handleChange("fio", value)}
        />

        <Label>Выберите специальность*</Label>
        <Input
          value={formData.specialty}
          onChangeText={(value) => handleChange("specialty", value)}
        />
        <Label>Выберите группу*</Label>
        <Input
          value={formData.group}
          onChangeText={(value) => handleChange("group", value)}
        />

        <YGroup>
          <Label>Наименование военкомата</Label>
          <Input
            placeholder="ФКУ Отдел военного комисариата"
            value={formData.army_name}
            onChangeText={(value) => handleChange("army_name", value)}
          />
          <Label>Ваше сообщение</Label>
          <TextArea
            value={formData.message}
            onChangeText={(value) => handleChange("message", value)}
          />
        </YGroup>
        <Text style={{ fontSize: 12 }}>
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
  );
};
