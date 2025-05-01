import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function DeckDetailScreen() {
  const { deckId } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{deckId} Deck</Text>
        <Text style={styles.description}>
          Ready to study the flashcards in the {deckId} deck?
        </Text>
      </View>

      <View style={styles.buttons}>
        <Pressable
          style={({ pressed }) => [
            styles.buttonPrimary,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => router.push(`/decks/${deckId}/0`)}
        >
          <Text style={styles.buttonText}>Start Flashcards</Text>
        </Pressable>

        <Pressable onPress={() => router.back()}>
          <Text style={styles.backText}>← Go Back</Text>
        </Pressable>
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
    backgroundColor: "#ffffff",
    padding: 24,
    borderRadius: 12,
    elevation: 3,
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    marginBottom: 8,
    color: "#0072bc",
    textTransform: "capitalize",
  },
  description: {
    fontSize: 16,
    color: "#666",
  },
  buttons: {
    gap: 16,
  },
  buttonPrimary: {
    backgroundColor: "#0072bc",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
  },
  backText: {
    marginTop: 16,
    fontSize: 14,
    color: "#0072bc",
    textAlign: "center",
  },
});

export const screenOptions = ({ params }) => ({
  title: `${params.deckId.charAt(0).toUpperCase()}${params.deckId.slice(
    1
  )} Deck`,
});
