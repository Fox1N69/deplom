import { Button, useThemeName, Theme } from "tamagui";
import { useState } from "react";

export function ToggleTheme() {
  const themeName = useThemeName();
  const [currentTheme, setCurrentTheme] = useState(themeName);

  const toggleTheme = () => {
    const newTheme = currentTheme.includes("dark") ? "light" : "dark";
    setCurrentTheme(newTheme);
  };

  return (
    <Theme name={currentTheme}>
      <Button onPress={toggleTheme}>
      </Button>
    </Theme>
  );
};