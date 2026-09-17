import { Button } from "@/components/button";
import { LabelledInput } from "@/components/labelled-input";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useState } from "react";
import { Keyboard, Platform, Pressable, StyleSheet } from "react-native";

export default function Index() {
  const [ip, onChangeIp] = useState("");
  const [port, onChangePort] = useState("");
  const [username, onChangeUsername] = useState("");
  const [password, onChangePassword] = useState("");

  return (
    <ThemedView style={styles.container}>
      <Pressable
        style={styles.dismissArea}
        onPress={() => {
          Platform.OS !== "web" && Keyboard.dismiss();
        }}
      >
        <LabelledInput
          label="IP Address"
          placeholder="192.168.1.1"
          inputMode="decimal"
          value={ip}
          onChangeText={onChangeIp}
        ></LabelledInput>
        <LabelledInput
          label="Port"
          placeholder="544"
          inputMode="decimal"
          value={port}
          onChangeText={onChangePort}
        ></LabelledInput>
        <LabelledInput
          label="Username"
          placeholder="admin"
          value={username}
          onChangeText={onChangeUsername}
        ></LabelledInput>
        <LabelledInput
          label="Password"
          secureTextEntry
          placeholder="admin"
          value={password}
          onChangeText={onChangePassword}
        ></LabelledInput>
        <Button
          onPress={() => {
            alert(`IP Address: ${ip}
Port: ${port}
Username: ${username}
Password: ${password}`);
          }}
          style={styles.button}
        >
          <ThemedText>Connect</ThemedText>
        </Button>
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
  button: { marginTop: 8 },
});
