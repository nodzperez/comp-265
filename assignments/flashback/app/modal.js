import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function ModalScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Flashback</Text>
      <Text style={styles.body}>
        Flashback helps you study with flashcards. Tap cards to flip, add your
        own, and test yourself!
      </Text>
      <Button title="Close" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  body: { fontSize: 16, textAlign: "center", marginBottom: 20 },
});
