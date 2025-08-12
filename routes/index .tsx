import React from 'react';
import { ScreenContent } from 'components/ScreenContent';
import AboutScreen from 'components/Screens/AboutScreen';
import ShopScreen from 'components/Screens/ShopScreen';
import ContactScreen from 'components/Screens/ContactScreen';
import FAQScreen from 'components/Screens/FAQScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ServicesScreen from 'components/Screens/ServiceScreen';
import ProjectsScreen from 'components/Screens/ProjectScreen';


type TabParamList = {
  Home: undefined;
  About: undefined;
  Services: undefined;
  Projects: undefined;
  Contact: undefined;
  FAQ: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function Routes(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }): BottomTabNavigationOptions => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = 'home-outline';

            switch (route.name) {
              case 'About':
                iconName = 'information-circle-outline';
                break;
              case 'Services':
                iconName = 'construct-outline';
                break;
              case 'Projects':
                iconName = 'images-outline';
                break;
              case 'Contact':
                iconName = 'call-outline';
                break;
              case 'FAQ':
                iconName = 'help-circle-outline';
                break;
              default:
                iconName = 'home-outline';
            }

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
    </NavigationContainer>
  );
}
