import { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, StyleSheet, Pressable, Button } from "react-native";

export default function FlashcardScreen() {
  const { cardId } = useLocalSearchParams();
  const router = useRouter();
  const [showAnswer, setShowAnswer] = useState(false);

  const flashcards = {
    1: { question: "What is 2 + 2?", answer: "4" },
    2: { question: "Capital of France?", answer: "Paris" },
    3: { question: "Water formula?", answer: "H₂O" },
  };

  const card = flashcards[cardId] || {
    question: "Card not found",
    answer: "",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flashcard #{cardId}</Text>

      <Pressable
        style={({ pressed }) => [styles.card, pressed && { opacity: 0.9 }]}
        onPress={() => setShowAnswer(!showAnswer)}
      >
        <Text style={styles.content}>
          {showAnswer ? card.answer : card.question}
        </Text>
        <Text style={styles.hint}>
          {showAnswer ? "Tap to hide answer" : "Tap to reveal answer"}
        </Text>
      </Pressable>

      <View style={styles.button}>
        <Button title="Go Back" onPress={() => router.back()} color="#0072bc" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    color: "#0072bc",
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 30,
    borderRadius: 12,
    alignItems: "center",
    width: "90%",
    elevation: 3,
  },
  content: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
  },
  hint: {
    fontSize: 14,
    color: "#888",
    marginTop: 10,
  },
  button: {
    marginTop: 24,
  },
});
