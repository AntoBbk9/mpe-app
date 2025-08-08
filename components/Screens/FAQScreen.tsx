import React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'components/layout/header';

const FAQScreen = () => {
  return (
      <>
        <Header />
        <View className="justify-center bg-white">
          <Text className="text-2xl font-bold text-black">FAQ</Text>
        </View>
    </>
  );
};

export default FAQScreen;