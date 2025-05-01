import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Button,
} from "react-native";
import { useRouter } from "expo-router";

const decks = [
  { id: "math", title: "Math Basics", count: 3 },
  { id: "history", title: "World History", count: 3 },
  { id: "science", title: "General Science", count: 3 },
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
          <Text style={styles.deckSub}>{deck.count} flashcards</Text>
        </Pressable>
      ))}

      <Button
        title="Add a Flashcard"
        onPress={() => router.push("/cards/add")}
        color="#ffd600"
      />
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
  deckSub: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
});
