import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

function App() {
  // State to store the current background color
  const [backgroundColor, setBackgroundColor] = useState('green');

  // Function to change the background color
  const changeColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Text style={styles.title}>CHỌN MÀU:</Text>

      <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]} onPress={() => changeColor('green')}>
        <Text style={styles.buttonText}>GREEN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: 'blue' }]} onPress={() => changeColor('blue')}>
        <Text style={styles.buttonText}>BLUE</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: 'brown' }]} onPress={() => changeColor('brown')}>
        <Text style={styles.buttonText}>BROWN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: 'yellow' }]} onPress={() => changeColor('yellow')}>
        <Text style={styles.buttonText}>YELLOW</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={() => changeColor('red')}>
        <Text style={styles.buttonText}>RED</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: 'black' }]} onPress={() => changeColor('black')}>
        <Text style={styles.buttonText}>BLACK</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    padding: 15,
    marginVertical: 10,
    width: '100%',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;
