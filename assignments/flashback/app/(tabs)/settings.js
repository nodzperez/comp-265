import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <Button title="About Flashback" onPress={() => router.push("/modal")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});
