import { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function FlashcardScreen() {
  const { cardId } = useLocalSearchParams();
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

      <Pressable style={styles.card} onPress={() => setShowAnswer(!showAnswer)}>
        <Text style={styles.content}>
          {showAnswer ? card.answer : card.question}
        </Text>
        <Text style={styles.hint}>
          {showAnswer ? "Tap to hide answer" : "Tap to reveal answer"}
        </Text>
      </Pressable>
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
  title: { fontSize: 22, marginBottom: 20 },
  card: {
    backgroundColor: "#e0f2f1",
    padding: 30,
    borderRadius: 12,
    alignItems: "center",
    width: "90%",
  },
  content: { fontSize: 20, fontWeight: "bold" },
  hint: { fontSize: 14, color: "#888", marginTop: 10 },
});
