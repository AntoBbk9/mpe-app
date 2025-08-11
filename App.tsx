// import { ScreenContent } from 'components/ScreenContent';
// import AboutScreen from 'components/Screens/AboutScreen';
// import ServiceScreen from 'components/Screens/ServiceScreen';
// import ShopScreen from 'components/Screens/ShopScreen';
// import ProjectScreen from 'components/Screens/ProjectScreen';
// import ContactScreen from 'components/Screens/ContactScreen';
// import FAQScreen from 'components/Screens/FAQScreen';
// import LoginScreen from 'components/Screens/LoginScreen';
// import RegisterScreen from 'components/Screens/RegisterScreen';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import './global.css';
//
// const Stack = createNativeStackNavigator();
//
//
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={ScreenContent} options={{ headerShown: false }} />
//         <Stack.Screen name="About" component={AboutScreen}  options={{ headerShown: false }} />
//         <Stack.Screen name="Services" component={ServiceScreen}  options={{ headerShown: false }} />
//         <Stack.Screen name="Shop" component={ShopScreen}  options={{ headerShown: false }} />
//         <Stack.Screen name="Projects" component={ProjectScreen}  options={{ headerShown: false }} />
//         <Stack.Screen name="Contact" component={ContactScreen}  options={{ headerShown: false }} />
//         <Stack.Screen name="FAQ" component={FAQScreen}  options={{ headerShown: false }} />
//         <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
//         <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }



import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabs from 'components/layout/footer';
import LoginScreen from 'components/Screens/LoginScreen';
import RegisterScreen from 'components/Screens/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={BottomTabs} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





