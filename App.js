import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Calculadora</Text>
        <View style={styles.display}>
          <Text style={styles.input}>{input}</Text>
          <Text style={styles.result}>{result}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          {[
            "7", "8", "9", "/",
            "4", "5", "6", "*",
            "1", "2", "3", "-",
            "C", "0", "=", "+"
          ].map((button) => (
            <TouchableOpacity key={button} style={styles.button} onPress={() => handlePress(button)}>
              <Text style={styles.buttonText}>{button}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.functionContainer}>
          {[
            "sin", "cos", "tan", "sqrt",
            "ln", "log", "exp", "pi"
          ].map((func) => (
            <TouchableOpacity key={func} style={styles.funcButton} onPress={() => handlePress(func)}>
              <Text style={styles.funcButtonText}>{func}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#333',
  },
  display: {
    width: '90%',
    backgroundColor: '#d3d3d3',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'flex-end',
  },
  input: {
    fontSize: 32,
    textAlign: 'right',
    color: '#000',
  },
  result: {
    fontSize: 24,
    textAlign: 'right',
    color: '#555',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    justifyContent: 'center',
  },
  button: {
    width: '22%',
    margin: '1%',
    backgroundColor: '#2196f3',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
  functionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    justifyContent: 'center',
    marginTop: 10,
  },
  funcButton: {
    width: '22%',
    margin: '1%',
    backgroundColor: '#ff5722',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  funcButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});
