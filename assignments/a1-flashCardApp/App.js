import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

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
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextCard = () => {
    setIndex((index + 1) % flashcards.length);
    setShowAnswer(false);
  };
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
