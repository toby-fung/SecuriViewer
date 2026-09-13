import { AuthContext, AuthProvider } from "@/utils/authContext";
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from "expo-router";
import { useContext } from "react";
import { useColorScheme } from "react-native";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}

function RootLayoutNav() {
  const { isLoggedIn } = useContext(AuthContext);
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Protected guard={isLoggedIn}>
          <Stack.Screen name="(protected)" options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Protected guard={!isLoggedIn}>
          <Stack.Screen name="login" options={{ headerTitle: "Login" }} />
        </Stack.Protected>
      </Stack>
    </ThemeProvider>
  );
}
