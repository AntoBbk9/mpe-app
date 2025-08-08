import React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'components/layout/header';

const ContactScreen = () => {
  return (
      <>
        <Header />
        <View className="justify-center bg-white">
          <Text className="text-2xl font-bold text-black">Contact</Text>
        </View>
    </>
  );
};

export default ContactScreen;