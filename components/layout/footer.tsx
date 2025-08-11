import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenContent } from 'components/ScreenContent';
import AboutScreen from 'components/Screens/AboutScreen';
import ServicesScreen from 'components/Screens/ServiceScreen';
import ProjectsScreen from 'components/Screens/ProjectScreen';
import ContactScreen from 'components/Screens/ContactScreen';
import ShopScreen from 'components/Screens/ShopScreen';
import FAQScreen from 'components/Screens/FAQScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = '';
          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'About') iconName = 'information-circle-outline';
          else if (route.name === 'Services') iconName = 'construct-outline';
          else if (route.name === 'Projects') iconName = 'images-outline';
          else if (route.name === 'Contact') iconName = 'call-outline';
          else if (route.name === 'FAQ') iconName = 'help-circle-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1B253D',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={ScreenContent} />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Services" component={ServicesScreen} />
      <Tab.Screen name="Projects" component={ProjectsScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="FAQ" component={FAQScreen} />
    </Tab.Navigator>
  );
}
