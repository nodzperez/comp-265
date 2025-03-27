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
      {/* display question or answer based on the state of showAnswer */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => setShowAnswer(!showAnswer)}
      >
        <Text style={styles.text}>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
