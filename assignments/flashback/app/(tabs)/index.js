import { View, Text, Image, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome to Flashback</Text>
      <Text style={styles.subtitle}>
        Use Flashback to create and review flashcards from different subjects.
        Tap to reveal answers and track your progress.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    paddingHorizontal: 24,
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: 100,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#0072bc",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
});
