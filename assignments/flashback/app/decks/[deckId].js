import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, Button, StyleSheet } from "react-native";

export default function DeckDetailScreen() {
  const { deckId } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deck: {deckId}</Text>
      <Text style={styles.description}>
        This is the detail screen for the "{deckId}" deck.
      </Text>

      <Button
        title="View Flashcard 1"
        onPress={() => router.push("/cards/1")}
      />
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
  description: { fontSize: 16, marginBottom: 20, textAlign: "center" },
});
