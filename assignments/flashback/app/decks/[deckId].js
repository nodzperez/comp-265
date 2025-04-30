import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";

export default function DeckDetailScreen() {
  const { deckId } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deck: {deckId}</Text>
      <Text style={styles.subtitle}>Here's where you'd show flashcards.</Text>

      <Button
        title="Go to Flashcard 1"
        onPress={() => router.push(`/cards/1`)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 18, marginBottom: 20 },
});
