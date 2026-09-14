import { ThemeColor } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

// TODO add type/themecolour stuff

type InputProps = TextInputProps & {
  themeColor?: ThemeColor;
  disabled?: boolean;
};

export function ThemedInput({ themeColor, disabled, ...rest }: InputProps) {
  const theme = useTheme();

  return <TextInput style={styles.container} {...rest}></TextInput>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#007AFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 12,
    minWidth: 100,
    marginBottom: 10,
  },
  disabled: {
    opacity: 50,
  },
});
