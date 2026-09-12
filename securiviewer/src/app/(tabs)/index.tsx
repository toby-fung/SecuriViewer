import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { ThemedText } from "../../../example/src/components/themed-text";
import { ThemedView } from "../../../example/src/components/themed-view";

export default function Index() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>sup broskis</ThemedText>
      <Link href="/about" style={styles.linkPrimary}>
        Go to about
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  linkPrimary: {
    lineHeight: 30,
    fontSize: 14,
    color: "#3c87f7",
  },
});
