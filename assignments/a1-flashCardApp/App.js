import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

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

  const progress = ((index + 1) / flashCards.length) * 100;

  const nextCard = () => {
    setIndex((index + 1) % flashCards.length);
    setShowAnswer(false);
  };

  //flashcard proper
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Flashcards App</Text>
      </View>

      {/* Progress Text */}
      <Text style={styles.progressText}>
        Question {index + 1} of {flashCards.length} Completed
      </Text>

      {/* Progress Bar */}
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>

      {/* Flashcard */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => setShowAnswer(!showAnswer)}
      >
        <Text style={styles.cardText}>
          {showAnswer
            ? flashCards[index].answer
            : `Q. ${flashCards[index].question}`}
        </Text>
      </TouchableOpacity>

      {/* Tap to See Answer Text */}
      <Text style={styles.tapToSee}>Tap to see Answer</Text>

      {/* Action Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.iconButton} onPress={nextCard}>
          <AntDesign name="dislike1" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={nextCard}>
          <AntDesign name="like1" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    backgroundColor: "#f7347a",
    padding: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  progressText: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 8,
  },
  progressBarContainer: {
    height: 6,
    backgroundColor: "#ddd",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 24,
  },
  progressBar: {
    height: 6,
    backgroundColor: "#f7347a",
  },
  card: {
    backgroundColor: "white",
    padding: 24,
    borderRadius: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 12,
    height: 180,
  },
  cardText: {
    fontSize: 18,
    textAlign: "center",
    color: "#333",
  },
  tapToSee: {
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 12,
  },
  iconButton: {
    backgroundColor: "#f7347a",
    padding: 16,
    borderRadius: 12,
  },
});
