import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { AuthContext } from "@/utils/authContext";
import { useContext } from "react";
import { Pressable, StyleSheet } from "react-native";

export default function Login() {
  const { isLoggedIn, logIn } = useContext(AuthContext);

  console.log(isLoggedIn);

  return (
    <ThemedView style={styles.container}>
      <Pressable onPress={logIn}>
        <ThemedText>Login</ThemedText>
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
