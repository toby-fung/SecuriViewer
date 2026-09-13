import { ThemeColor } from "@/constants/theme";
import { PropsWithChildren } from "react";
import { Pressable, StyleSheet } from "react-native";

// TODO add type/themecolour stuff

type ButtonProps = PropsWithChildren & {
  onPress?: () => void;
  type?: "primary" | "secondary" | "tertiary" | "danger";
  themeColor?: ThemeColor;
  disabled?: boolean;
};

export function Button({
  children,
  onPress,
  themeColor,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, disabled && styles.disabled]}
      {...rest}
    >
      {children}
    </Pressable>
  );
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

// className={cn(
//   "flex-row items-center justify-center rounded-md px-5 py-3 mb-4 border",
//   theme === "primary" && "bg-[#007AFF] border-[#007AFF]",
//   theme === "secondary" && "bg-white border-gray-300",
//   theme === "tertiary" && "bg-transparent border-transparent",
//   disabled && "opacity-50",
// )}

// className={cn(
//           "font-semibold text-lg tracking-wider",
//           theme === "secondary" && "text-black",
//           theme === "primary" && "text-white",
//           theme === "tertiary" && "text-gray-800",
//         )}
