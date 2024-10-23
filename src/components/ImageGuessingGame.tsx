import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { useGame } from '../hooks/useGame';

const ImageGuessingGame: React.FC = () => {
  const { gameState, submitGuess, nextPhase } = useGame();
  const [guess, setGuess] = useState('');

  useEffect(() => {
    // Timer logic for phase duration
    const timer = setInterval(() => {
      if (gameState.timeLeft > 0) {
        // Decrease time left
      } else {
        nextPhase();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState.phase, gameState.timeLeft]);

  return (
    <View>
      <Text>Phase: {gameState.phase}/10</Text>
      <Text>Time Left: {gameState.timeLeft}s</Text>
      <Image
        source={{ uri: gameState.image }}
        style={{ opacity: gameState.phase * 0.1 }}
      />
      <TextInput
        value={guess}
        onChangeText={setGuess}
        placeholder="Enter your guess"
      />
      <TouchableOpacity onPress={() => submitGuess(guess)}>
        <Text>Submit Guess</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImageGuessingGame;