import { Button } from "@/components/button";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { AuthContext } from "@/utils/authContext";
import { useContext } from "react";
import { StyleSheet } from "react-native";

export default function About() {
  const { logOut } = useContext(AuthContext);

  return (
    <ThemedView style={styles.container}>
      <ThemedText>about</ThemedText>
      <Button onPress={logOut}>
        <ThemedText>Logout</ThemedText>
      </Button>
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
