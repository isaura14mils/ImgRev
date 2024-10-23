import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const GameModes: React.FC = () => {
  const topics = [
    { id: 1, name: 'Nature', image: 'nature.jpg' },
    { id: 2, name: 'Technology', image: 'tech.jpg' },
    // ... more topics
  ];

  return (
    <View>
      <Text>Choose a Game Mode</Text>
      {topics.map(topic => (
        <TouchableOpacity key={topic.id} onPress={() => {/* Join game with this topic */}}>
          <Image source={{ uri: topic.image }} />
          <Text>{topic.name}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={() => {/* Join random game */}}>
        <Text>Join Random Game</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {/* Show dialog to enter private game code */}}>
        <Text>Join Private Game</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GameModes;