import { Ionicons } from "@expo/vector-icons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import { Pressable, StyleSheet } from "react-native";
import { GlobalStyles } from "../../../Constants/Style/GlobalStyles";

type IoniconsGlyphNames = keyof typeof Ionicons.glyphMap;

type IconButtonProps = {
  onPress: () => void;
  icon: IoniconsGlyphNames;
  size: number;
  color: string;
};

export default function IconButton({
  onPress,
  icon,
  size,
  color,
}: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => (pressed ? GlobalStyles.buttonPressed : null)}
    >
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({});
