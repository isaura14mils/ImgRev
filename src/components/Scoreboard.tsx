import React from 'react';
import { View, Text } from 'react-native';
import { useGame } from '../hooks/useGame';

const Scoreboard: React.FC = () => {
  const { gameState } = useGame();

  return (
    <View>
      <Text>Scoreboard</Text>
      {gameState.players.map(player => (
        <Text key={player.id}>{player.name}: {player.score}</Text>
      ))}
    </View>
  );
};

export default Scoreboard;