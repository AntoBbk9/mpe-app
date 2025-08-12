import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Animated, Easing } from 'react-native';
import CountrySelector from 'components/modal/CountrySelectorModal';
import countries, { Country } from 'world-countries';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Define navigation routes type
type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

export const Header: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(
    countries.find(c => c.cca2 === 'FR')
  );
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const slideAnim = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isMenuVisible ? 0 : 300,
      duration: 300,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start();
  }, [isMenuVisible, slideAnim]);

  return (
    <View className="px-2 bg-white">
      {/* Country Selector */}
      <View className="border border-gray-400 rounded self-end mt-8">
        <TouchableOpacity
          onPress={() => setIsPickerVisible(prev => !prev)}
          className="px-6"
        >
          <Text>
            {selectedCountry?.flag} {selectedCountry?.name.common}
          </Text>
        </TouchableOpacity>
        <CountrySelector
          visible={isPickerVisible}
          onSelect={(country: Country) => {
            setSelectedCountry(country);
            setIsPickerVisible(false);
          }}
          onClose={() => setIsPickerVisible(false)}
        />
      </View>

      {/* Header Logo & Actions */}
      <View className="flex-row justify-between items-center">
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('assets/logo.jpeg')}
            className="w-32 h-32"
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View className="flex-row">
          <TouchableOpacity
            className="bg-green-500 py-2 px-3 rounded-xl"
            onPress={() => navigation.navigate('Login')}
          >
            <Text className="text-white font-bold">Se connecter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
