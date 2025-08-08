import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Header } from 'components/layout/header';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <View className="px-6 bg-white">
        <Text className="text-2xl font-bold text-black">Se connecter</Text>
        <Text className="text-black mt-4">
          Vous n'avez pas de compte ?{' '}
          <Text
            className="text-blue-500"
            onPress={() => navigation.navigate('Register')}
          >
            Inscrivez-vous
          </Text>
        </Text>
      </View>
    </>
  );
};

export default LoginScreen;
