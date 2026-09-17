import { ThemeColor } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

// TODO add type/themecolour stuff

export type InputProps = TextInputProps & {
  themeColor?: ThemeColor;
  disabled?: boolean;
};

export function ThemedInput({
  themeColor,
  disabled,
  style,
  ...rest
}: InputProps) {
  const theme = useTheme();

  return (
    <TextInput
      style={[styles.container, style, disabled && styles.disabled]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#007AFF",
    borderRadius: 6,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  disabled: {
    opacity: 50,
  },
});
