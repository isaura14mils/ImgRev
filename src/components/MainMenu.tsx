import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../hooks/useAuth';

const MainMenu: React.FC = () => {
  const { user, login, signup, logout } = useAuth();

  return (
    <View>
      <Text>Welcome to Mystery One</Text>
      {user ? (
        // If user is logged in, show play and logout options
        <>
          <TouchableOpacity onPress={() => {/* Navigate to game modes */}}>
            <Text>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={logout}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </>
      ) : (
        // If user is not logged in, show login and signup options
        <>
          <TouchableOpacity onPress={() => login('username', 'password')}>
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => signup('username', 'password')}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {/* Navigate to game modes as guest */}}>
            <Text>Play as Guest</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default MainMenu;