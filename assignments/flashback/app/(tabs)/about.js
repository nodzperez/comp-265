import { useState } from "react";
import { View, Text, Button, StyleSheet, Switch } from "react-native";
import { useRouter } from "expo-router";

export default function AboutScreen() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const isDark = darkMode;

  const containerStyle = [
    styles.container,
    isDark && { backgroundColor: "#121212" },
  ];
  const cardStyle = [
    styles.card,
    isDark && { backgroundColor: "#1e1e1e", borderColor: "#333" },
  ];
  const titleStyle = [styles.title, isDark && { color: "#fff" }];
  const labelStyle = [styles.label, isDark && { color: "#ccc" }];

  return (
    <View style={containerStyle}>
      <View style={cardStyle}>
        <Text style={titleStyle}>About Flashback</Text>

        <View style={styles.section}>
          <Button
            title="App Info (Modal)"
            onPress={() => router.push("/modal")}
            color={isDark ? "#888" : "#0072bc"}
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={labelStyle}>Dark Mode</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: "#ccc", true: "#ffd600" }}
            thumbColor={darkMode ? "#ffd600" : "#f4f3f4"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 24,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#eee",
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 24,
  },
  section: {
    marginBottom: 32,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ccc",
    paddingTop: 16,
  },
  label: {
    fontSize: 18,
  },
});
