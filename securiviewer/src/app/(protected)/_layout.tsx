import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function ProtectedLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
const styles = StyleSheet.create({});
