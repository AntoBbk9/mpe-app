import React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'components/layout/header';

const RegisterScreen = () => {
  return (
      <>
      <Header />
        <View className="px-6 bg-white">
          <Text className="text-2xl font-bold text-black">S'inscrire</Text>
        </View>
       </>
  );
};

export default RegisterScreen;
