import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
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
  {
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
  },
  {
    question: "Who painted the Mona Lisa?",
    answer: "Leonardo da Vinci",
  },
  {
    question: "What is the chemical symbol for gold?",
    answer: "Au",
  },
  {
    question: "What year did the Titanic sink?",
    answer: "1912",
  },
  {
    question: "What is the fastest land animal?",
    answer: "Cheetah",
  },
  {
    question: "How many continents are there?",
    answer: "7",
  },
  {
    question: "What language is primarily spoken in Brazil?",
    answer: "Portuguese",
  },
  {
    question: "What is the square root of 64?",
    answer: "8",
  },
  {
    question: "Who is the author of 'Harry Potter'?",
    answer: "J.K. Rowling",
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    answer: "Carbon Dioxide",
  },
  {
    question: "Which ocean is the largest?",
    answer: "Pacific Ocean",
  },
  {
    question: "What is the boiling point of water in Celsius?",
    answer: "100",
  },
];

export default function App() {
  //declare state variables
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [inputAnswer, setInputAnswer] = useState("");

  const progress = ((index + 1) / flashCards.length) * 100;

  const nextCard = () => {
    setIndex((index + 1) % flashCards.length);
    setShowAnswer(false);
  };

  const handleAnswerSubmit = () => {
    if (inputAnswer.toLowerCase() === flashCards[index].answer.toLowerCase()) {
      alert("You're Correct!!! You're so smart!");
      setInputAnswer("");
    } else {
      alert("Try Again Loser!!!");
    }
  };

  //flashcard proper
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Flash Back</Text>
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
      <ScrollView
        contentContainerStyle={{
          flexGrow: 0.5,
          justifyContent: "center",
        }}
      >
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
        <Text style={styles.tapToSee}>Tap to flip card and see Answer</Text>

        {/* TextInput for user's Answers */}
        <TextInput
          style={styles.input}
          placeholder="Your Answer"
          value={inputAnswer}
          onChangeText={setInputAnswer}
        />
        <Button title="Submit" onPress={handleAnswerSubmit} />

        {/* Action Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.dislikeButton} onPress={nextCard}>
            <AntDesign name="dislike1" size={32} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.likeButton} onPress={nextCard}>
            <AntDesign name="like1" size={32} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    backgroundColor: "#0077B6",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 16,
    marginTop: 40,
  },
  headerText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  progressText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    color: "#555",
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
    backgroundColor: "#0077B6",
  },
  card: {
    backgroundColor: "#ffffff",
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
    marginBottom: 8,
    height: 200,
  },
  cardText: {
    fontSize: 32,
    textAlign: "center",
    color: "#333",
  },
  tapToSee: {
    textAlign: "center",
    color: "#666",
    fontSize: 14,
    marginBottom: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 12,
  },
  likeButton: {
    backgroundColor: "#4CAF50",
    padding: 16,
    borderRadius: 12,
  },
  dislikeButton: {
    backgroundColor: "#F44336",
    padding: 16,
    borderRadius: 12,
  },
});
