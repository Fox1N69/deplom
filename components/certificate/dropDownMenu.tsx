import { Check, ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import { useMemo, useState } from "react";
import { StyleSheet } from "react-native";
import type { FontSizeTokens, SelectProps } from "tamagui";
import {
  Adapt,
  Button,
  Label,
  Select,
  Sheet,
  XStack,
  YStack,
  getFontSize,
} from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

interface CertificateMenuProps {
  onSelect: (sectionId: number) => void;
}

export const CertificateMenu = ({ onSelect }: CertificateMenuProps) => {
  return <CertificateSelect onSelect={onSelect} />;
};

export function CertificateSelect({
  onSelect,
  ...props
}: SelectProps & { onSelect: (sectionId: number) => void }) {
  const [val, setVal] = useState("Выберите тип справки");
  // Copyright (c) [2024] [Максимович Паве Вячеславович]
  // Все права защищены. Использование, копирование и модификация этого кода
  // без явного письменного согласия автора запрещены.

  return (
    <Select
      value={val}
      onValueChange={(newValue) => {
        const selectedItem = items.find(
          (item) => item.name.toLowerCase() === newValue
        );
        if (selectedItem) {
          onSelect(selectedItem.value);
          setVal(selectedItem.name);
        }
      }}
      disablePreventBodyScroll
      {...props}
    >
      <Select.Trigger width={"100%"} iconAfter={ChevronDown}>
        <Select.Value placeholder="Выберите тип справки" />
      </Select.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet
          native={!!props.native}
          modal
          dismissOnSnapToBottom
          animationConfig={{
            type: "spring",
            damping: 18,
            mass: 0.5,
            stiffness: 250,
          }}
        >
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay
            animation="slow"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Sheet>
      </Adapt>

      <Select.Content zIndex={200000}>
        <Select.ScrollUpButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronUp size={20} />
          </YStack>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={["$background", "transparent"]}
            borderRadius="$4"
          />
        </Select.ScrollUpButton>

        <Select.Viewport
          // to do animations:
          // animation="quick"
          // animateOnly={['transform', 'opacity']}
          // enterStyle={{ o: 0, y: -10 }}
          // exitStyle={{ o: 0, y: 10 }}
          minWidth={200}
        >
          <Select.Group>
            <Select.Label>Выберите тип справки</Select.Label>
            {/* for longer lists memoizing these is useful */}
            {useMemo(
              () =>
                items.map((item, i) => {
                  return (
                    <Select.Item
                      index={i}
                      key={item.name}
                      value={item.name.toLowerCase()}
                    >
                      <Select.ItemText>{item.name}</Select.ItemText>
                      <Select.ItemIndicator marginLeft="auto">
                        <Check size={16} />
                      </Select.ItemIndicator>
                    </Select.Item>
                  );
                }),
              [items]
            )}
          </Select.Group>
          {/* Native gets an extra icon */}
          {props.native && (
            <YStack
              position="absolute"
              right={0}
              top={0}
              bottom={0}
              alignItems="center"
              justifyContent="center"
              width={"$4"}
              pointerEvents="none"
            >
              <ChevronDown
                size={getFontSize((props.size as FontSizeTokens) ?? "$true")}
              />
            </YStack>
          )}
        </Select.Viewport>

        <Select.ScrollDownButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronDown size={20} />
          </YStack>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={["transparent", "$background"]}
            borderRadius="$4"
          />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select>
  );
}

const styles = StyleSheet.create({
  selectItem: {
    borderColor: "black",
  },
});

const items = [
  { name: "Справка об обучении", value: 1 },
  { name: "Справка для военкомата", value: 2 },
  { name: "Справка о степендии", value: 3 },
];
