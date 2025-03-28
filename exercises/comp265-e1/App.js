import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

function WeatherApp() {
  const [unit, setUnit] = useState("C"); // 'C' for Celsius, 'F' for Fahrenheit
  const [selectedCity, setSelectedCity] = useState("Saskatoon"); // Default city

  // Static weather data
  const weatherData = [
    { city: "Saskatoon", temperatureC: 22, condition: "Sunny" },
    { city: "Regina", temperatureC: 19, condition: "Cloudy" },
    { city: "Prince Albert", temperatureC: 16, condition: "Rainy" },
  ];

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "C" ? "F" : "C"));
  };

  const convertTemperature = (tempC) => {
    return unit === "C" ? tempC : (tempC * 9) / 5 + 32;
  };

  const selectedWeather = weatherData.find(
    (data) => data.city === selectedCity
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Weather App</Text>

      <Pressable onPress={toggleUnit} style={styles.toggleButton}>
        <Text style={styles.buttonText}>
          Toggle to {unit === "C" ? "Fahrenheit" : "Celsius"}
        </Text>
      </Pressable>

      <View style={styles.selectorContainer}>
        <Text style={styles.label}>Select a city:</Text>
        <Picker
          selectedValue={selectedCity}
          onValueChange={(itemValue) => setSelectedCity(itemValue)}
          style={styles.picker}
        >
          {weatherData.map((data, index) => (
            <Picker.Item key={index} label={data.city} value={data.city} />
          ))}
        </Picker>
      </View>

      {selectedWeather ? (
        <View style={styles.weatherCard}>
          <Text style={styles.city}>{selectedWeather.city}</Text>
          <Text style={styles.condition}>{selectedWeather.condition}</Text>
          <Text style={styles.temperature}>
            {convertTemperature(selectedWeather.temperatureC)}°{unit}
          </Text>
        </View>
      ) : (
        <Text style={styles.loading}>No weather data available</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  toggleButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  selectorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
  picker: {
    width: 200,
    height: 50,
    backgroundColor: "#fff",
  },
  weatherCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
  },
  city: {
    fontSize: 20,
    fontWeight: "bold",
  },
  condition: {
    fontSize: 16,
    color: "#555",
  },
  temperature: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  loading: {
    fontSize: 16,
    color: "#999",
  },
});

export default WeatherApp;
