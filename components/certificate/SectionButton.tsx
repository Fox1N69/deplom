import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SectionButton = ({ title, active, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        active ? styles.activeButton : null,
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',  // цвет фона по умолчанию
  },
  activeButton: {
    backgroundColor: '#f0f',  // цвет фона для активной кнопки
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default SectionButton;
