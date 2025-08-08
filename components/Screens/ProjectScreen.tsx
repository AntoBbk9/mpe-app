import React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'components/layout/header';

const ProjectScreen = () => {
  return (
      <>
        <Header />
        <View className="justify-center bg-white">
          <Text className="text-2xl font-bold text-black">Project</Text>
        </View>
    </>
  );
};

export default ProjectScreen;
