import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

export default function AddCardScreen() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSave = () => {
    if (!question.trim() || !answer.trim()) {
      Alert.alert("Both fields are required.");
      return;
    }

    console.log("Flashcard saved:", { question, answer });
    Alert.alert("Saved!", "Your flashcard was saved in my heart lol!");
    setQuestion("");
    setAnswer("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a Flashcard</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter question"
        value={question}
        onChangeText={setQuestion}
        placeholderTextColor="#888"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter answer"
        value={answer}
        onChangeText={setAnswer}
        placeholderTextColor="#888"
      />

      <View style={styles.button}>
        <Button title="Save Flashcard" onPress={handleSave} color="#0072bc" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    color: "#0072bc",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 10,
  },
});
