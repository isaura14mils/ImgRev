import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

const HostOptions: React.FC = () => {
  const [customTopic, setCustomTopic] = useState('');
  const [phaseDuration, setPhaseDuration] = useState(15);
  const [guessesPerPhase, setGuessesPerPhase] = useState(2);

  const createGame = () => {
    // Logic to create a new game with the specified options
  };

  return (
    <View>
      <Text>Host a Game</Text>
      <TextInput
        value={customTopic}
        onChangeText={setCustomTopic}
        placeholder="Custom Topic"
      />
      <TextInput
        value={phaseDuration.toString()}
        onChangeText={(text) => setPhaseDuration(parseInt(text))}
        placeholder="Phase Duration (seconds)"
        keyboardType="numeric"
      />
      <TextInput
        value={guessesPerPhase.toString()}
        onChangeText={(text) => setGuessesPerPhase(parseInt(text))}
        placeholder="Guesses Per Phase"
        keyboardType="numeric"
      />
      <TouchableOpacity onPress={createGame}>
        <Text>Create Game</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HostOptions;