import { ThemedInput } from "@/components/themed-input";
import { ThemedView } from "@/components/themed-view";
import { Keyboard, Pressable, StyleSheet } from "react-native";

export default function Index() {
  return (
    <ThemedView style={styles.container}>
      <Pressable style={styles.dismissArea} onPress={Keyboard.dismiss}>
        <ThemedInput placeholder="IP" />
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dismissArea: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
