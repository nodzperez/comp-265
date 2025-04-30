import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

export default function AddCardScreen() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const router = useRouter();

  const handleSave = () => {
    if (!question.trim() || !answer.trim()) {
      Alert.alert("Both fields are required.");
      return;
    }

    console.log("Flashcard saved:", { question, answer });
    Alert.alert("Saved!", "Your flashcard was saved (in console).");

    // Clear input fields
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
      />

      <TextInput
        style={styles.input}
        placeholder="Enter answer"
        value={answer}
        onChangeText={setAnswer}
      />

      <Button title="Save Flashcard" onPress={handleSave} />

      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
});
