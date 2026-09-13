import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { AuthContext } from "@/utils/authContext";
import { useContext } from "react";
import { Pressable, StyleSheet } from "react-native";

export default function About() {
  const { logOut } = useContext(AuthContext);

  return (
    <ThemedView style={styles.container}>
      <ThemedText>about</ThemedText>
      <Pressable onPress={logOut}>
        <ThemedText>Log Out</ThemedText>
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
});
