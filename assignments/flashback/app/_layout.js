import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      <Stack.Screen
        name="modal"
        options={{ presentation: "modal", title: "About Flashback" }}
      />

      <Stack.Screen
        name="decks/[deckId]"
        options={({ route }) => ({
          title: `${route.params.deckId
            .charAt(0)
            .toUpperCase()}${route.params.deckId.slice(1)} Deck`,
        })}
      />

      <Stack.Screen
        name="decks/[deckId]/[cardIndex]"
        options={({ route }) => ({
          title: `Flashcard ${parseInt(route.params.cardIndex) + 1}`,
        })}
      />
    </Stack>
  );
}
