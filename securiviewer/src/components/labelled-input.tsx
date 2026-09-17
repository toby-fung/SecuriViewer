import { StyleSheet } from "react-native";
import { InputProps, ThemedInput } from "./themed-input";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

type LabelledInputProps = InputProps & {
  label: string;
};

export function LabelledInput({ label, ...rest }: LabelledInputProps) {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="small" style={styles.text}>
        {label}
      </ThemedText>
      <ThemedInput {...rest} />
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "80%",
    paddingVertical: 2,
  },
  text: {
    paddingHorizontal: 5,
  },
});
