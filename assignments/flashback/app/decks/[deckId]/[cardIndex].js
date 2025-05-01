import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, Pressable, StyleSheet, Button } from "react-native";
import { useState } from "react";

const flashcardData = {
  math: [
    { question: "What is 2 + 2?", answer: "4" },
    { question: "Square root of 81?", answer: "9" },
    { question: "What is 3 x 5?", answer: "15" },
  ],
  history: [
    { question: "Capital of France?", answer: "Paris" },
    { question: "WWII ended in?", answer: "1945" },
    { question: "Who was Cleopatra?", answer: "Queen of Egypt" },
  ],
  science: [
    { question: "Water formula?", answer: "H₂O" },
    { question: "Red planet?", answer: "Mars" },
    { question: "Human DNA shape?", answer: "Double Helix" },
  ],
};

export default function FlashcardByDeck() {
  const { deckId, cardIndex } = useLocalSearchParams();
  const router = useRouter();
  const index = parseInt(cardIndex || "0");

  const cards = flashcardData[deckId] || [];
  const [showAnswer, setShowAnswer] = useState(false);
  const card = cards[index];

  if (!card) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No more flashcards.</Text>
        <Button
          title="Back to Deck"
          onPress={() => router.back()}
          color="#0072bc"
        />
      </View>
    );
  }

  const handleNext = () => {
    const next = index + 1;
    if (next < cards.length) {
      router.replace(`/decks/${deckId}/${next}`);
    } else {
      router.back();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {deckId.charAt(0).toUpperCase() + deckId.slice(1)} Flashcard {index + 1}{" "}
        of {cards.length}
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
          title={index < cards.length - 1 ? "Next Flashcard" : "Finish"}
          onPress={handleNext}
          color="#0072bc"
        />
      </View>
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
    textAlign: "center",
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
    width: "90%",
  },
});
