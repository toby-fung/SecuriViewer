import { ThemeColor } from "@/constants/theme";
import { Pressable, PressableProps, StyleSheet } from "react-native";

// TODO add type/themecolour stuff

type ButtonProps = PressableProps & {
  type?: "primary" | "secondary" | "tertiary" | "danger";
  themeColor?: ThemeColor;
};

export function Button({
  children,
  type = "primary",
  disabled,
  style,
  ...rest
}: ButtonProps) {
  return (
    <Pressable
      {...rest}
      disabled={disabled}
      style={(state) => [
        styles.container,
        styles[type],
        typeof style === "function" ? style(state) : style,
        disabled && styles.disabled,
      ]}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 12,
    minWidth: 100,
  },
  primary: {
    backgroundColor: "#007AFF",
  },
  secondary: {
    backgroundColor: "#FFFFFF",
  },
  tertiary: {
    backgroundColor: "transparent",
  },
  danger: {
    backgroundColor: "#D32F2F",
  },
  disabled: {
    opacity: 0.5,
  },
});
