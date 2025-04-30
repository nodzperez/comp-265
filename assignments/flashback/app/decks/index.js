import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useRouter } from "expo-router";

const decks = [
  { id: "math", title: "Math Basics" },
  { id: "history", title: "World History" },
  { id: "science", title: "General Science" },
];

export default function DeckListScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Select a Deck</Text>
      {decks.map((deck) => (
        <Pressable
          key={deck.id}
          style={styles.deck}
          onPress={() => router.push(`/decks/${deck.id}`)}
        >
          <Text style={styles.deckTitle}>{deck.title}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  deck: {
    padding: 20,
    backgroundColor: "#d1e7dd",
    borderRadius: 10,
    marginBottom: 10,
  },
  deckTitle: { fontSize: 18 },
});
