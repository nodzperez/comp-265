import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useRouter } from "expo-router";

const decks = [
  { id: "Math", title: "Math Basics" },
  { id: "History", title: "World History" },
  { id: "Science", title: "General Science" },
];

export default function DeckListScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Available Decks</Text>

      {decks.map((deck) => (
        <Pressable
          key={deck.id}
          style={({ pressed }) => [
            styles.deckCard,
            pressed && styles.deckCardPressed,
          ]}
          onPress={() => router.push(`/decks/${deck.id}`)}
        >
          <Text style={styles.deckTitle}>{deck.title}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: "#f5f5f5",
  },
  heading: {
    fontSize: 26,
    fontWeight: "600",
    marginBottom: 24,
    color: "#0072bc",
  },
  deckCard: {
    backgroundColor: "#ffffff",
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 12,
    elevation: 2,
    marginBottom: 16,
  },
  deckCardPressed: {
    opacity: 0.8,
  },
  deckTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#222",
  },
});
