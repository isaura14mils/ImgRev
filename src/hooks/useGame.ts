import { useState, useEffect } from 'react';
import { socket } from '../services/socket';

export const useGame = () => {
    interface Player {
      id: string;
      name: string;
      score: number;
    }
  
    const [gameState, setGameState] = useState<{
      phase: number;
      timeLeft: number;
      image: string;
      players: Player[];
    }>({
      phase: 1,
      timeLeft: 10,
      image: '',
      players: [],
    });
  
    // ... rest of the code

  const submitGuess = (guess: string) => {
    // Emit guess to server via socket
  };

  const nextPhase = () => {
    // Emit next phase event to server via socket
  };

  useEffect(() => {
    // Set up socket listeners for game updates
    socket.on('gameUpdate', (newState: typeof gameState) => setGameState(newState));
  
    return () => {
      // Clean up socket listeners
      socket.off('gameUpdate');
    };
  }, []);

  return { gameState, submitGuess, nextPhase };
};