import { Button } from "@/components/button";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { AuthContext } from "@/utils/authContext";
import { useContext } from "react";
import { StyleSheet } from "react-native";

export default function Login() {
  const { isLoggedIn, logIn } = useContext(AuthContext);

  console.log(isLoggedIn);

  return (
    <ThemedView style={styles.container}>
      <Button onPress={logIn}>
        <ThemedText>Login</ThemedText>
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
