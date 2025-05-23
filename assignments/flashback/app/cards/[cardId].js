import { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, StyleSheet, Pressable, Button } from "react-native";

export default function FlashcardScreen() {
  const { cardId } = useLocalSearchParams();
  const router = useRouter();

  const flashcards = [
    { question: "What is 2 + 2?", answer: "4" },
    { question: "Capital of France?", answer: "Paris" },
    { question: "Water formula?", answer: "H₂O" },
    { question: "Red planet?", answer: "Mars" },
    {
      question: 'Who wrote "Romeo and Juliet"?',
      answer: "William Shakespeare",
    },
    { question: "Square root of 81?", answer: "9" },
    { question: "Styling web pages?", answer: "CSS" },
    { question: "WWII ended in?", answer: "1945" },
    { question: "Continents?", answer: "7" },
    { question: "HTTP stands for?", answer: "HyperText Transfer Protocol" },
  ];

  const initialIndex = Math.max(0, parseInt(cardId) - 1);
  const [index, setIndex] = useState(initialIndex);
  const [showAnswer, setShowAnswer] = useState(false);

  const card = flashcards[index];

  const handleNext = () => {
    if (index < flashcards.length - 1) {
      setIndex(index + 1);
      setShowAnswer(false);
    } else {
      router.back();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Flashcard {index + 1} of {flashcards.length}
      </Text>

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
        <Button
          title={index < flashcards.length - 1 ? "Next Flashcard" : "Finish"}
          onPress={handleNext}
          color="#0072bc"
        />
      </View>

      <Pressable onPress={() => router.back()}>
        <Text style={styles.back}>← Go Back</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    color: "#0072bc",
    fontWeight: "600",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
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
    width: "90%",
  },
  back: {
    marginTop: 16,
    fontSize: 14,
    color: "#0072bc",
    textAlign: "center",
  },
});
