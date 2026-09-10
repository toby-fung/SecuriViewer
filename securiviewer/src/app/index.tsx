import { Text, StyleSheet } from "react-native";
import { ThemedView } from "../../example/src/components/themed-view";
import { ThemedText } from "../../example/src/components/themed-text";

export default function Index() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>sup broskis</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
