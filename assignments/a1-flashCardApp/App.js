import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

// declare an array of flashcards
const flashCards = [
  {
    question: "What is the capital of Canada?",
    answer: "Ottawa",
  },
  {
    question: "What is the capital of Saskatchewan?",
    answer: "Regina",
  },
  {
    question: "What is the capital of Alberta?",
    answer: "Edmonton",
  },
];

export default function App() {
  //declare state variables
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextCard = () => {
    setIndex((index + 1) % flashCards.length);
    setShowAnswer(false);
  };

  //flashcard proper
  return (
    <View style={styles.container}>
      <Text>Click the flash card to reveal the Answer</Text>
      {/* display question or answer based on the state of showAnswer */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => setShowAnswer(!showAnswer)}
      >
        <Text style={styles.cardText}>
          {showAnswer ? flashCards[index].answer : flashCards[index].question}
        </Text>
      </TouchableOpacity>

      {/* show answer button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowAnswer(!showAnswer)}
      >
        <Text style={styles.buttonText}>
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    padding: 20,
  },

  card: {
    width: "90%",
    height: 200,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 20,
    padding: 20,
  },

  cardText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  button: {
    backgroundColor: "#28A745",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
});
