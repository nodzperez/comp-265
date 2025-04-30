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
      <Text style={styles.heading}>Available Decks</Text>

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
  heading: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  deck: {
    backgroundColor: "#e0f7fa",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  deckTitle: { fontSize: 18 },
});
