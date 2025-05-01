import { useState } from "react";
import { View, Text, Button, StyleSheet, Switch } from "react-native";
import { useRouter } from "expo-router";

export default function AboutScreen() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);

  const containerStyle = [
    styles.container,
    darkMode && { backgroundColor: "#121212" },
  ];

  const textStyle = [styles.title, darkMode && { color: "#fff" }];

  const labelStyle = [styles.label, darkMode && { color: "#ccc" }];

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>About Flashback</Text>

      <Button
        title="App Info (Modal)"
        onPress={() => router.push("/modal")}
        color={darkMode ? "#888" : undefined}
      />

      <View style={styles.settingItem}>
        <Text style={labelStyle}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  settingItem: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  label: {
    fontSize: 18,
  },
});
