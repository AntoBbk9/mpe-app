import { View, Text, TouchableOpacity, Image, Modal, Animated, Easing } from 'react-native';
import CountrySelector from 'components/modal/CountrySelectorModal';
import countries from 'world-countries';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';

export const Header = () => {
  const navigation = useNavigation();
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.cca2 === 'FR'));
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const slideAnim = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isMenuVisible ? 0 : 300,
      duration: 300,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start();
  }, [isMenuVisible]);

  return (
    <View className="px-5 mt-4 justify-start bg-white">
      {/* Sélecteur de pays */}
      <View className="border border-gray-400 rounded p-1 self-end mt-8">
        <TouchableOpacity onPress={() => setIsPickerVisible(prev => !prev)} className="px-6">
          <Text>{selectedCountry?.flag} {selectedCountry?.name.common}</Text>
        </TouchableOpacity>
        <CountrySelector
           visible={isPickerVisible}
           onSelect={(country) => {
             setSelectedCountry(country);
             setIsPickerVisible(false);
           }}
           onClose={() => setIsPickerVisible(false)}
         />
      </View>

      {errors.country && (
        <Text className="text-red-500 mt-2">{errors.country}</Text>
      )}

      {/* Logo + Boutons */}
      <View className="flex-row justify-between items-center">
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('assets/logo.jpeg')}
            className="w-32 h-32"
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View className="flex-row space-x-2">
          <TouchableOpacity
            className="bg-green-500 py-2 px-3 rounded-xl"
            onPress={() => navigation.navigate('Login')}
          >
            <Text className="text-white font-bold">Se connecter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-2 px-3 rounded"
            onPress={() => setIsMenuVisible(true)}
          >
            <Text className="text-black font-bold">☰</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Menu latéral */}
      <Modal transparent visible={isMenuVisible} animationType="none">
        <TouchableOpacity
          className="flex-1 bg-black/30"
          onPress={() => setIsMenuVisible(false)}
          activeOpacity={1}
        >
          <Animated.View
            className="bg-white h-full w-64 p-5 absolute right-0"
            style={{ transform: [{ translateX: slideAnim }] }}
          >
            <Text className="text-lg font-bold mb-4">Menu</Text>
            {[
              { name: 'Accueil', route: 'Home' },
              { name: 'A propos', route: 'About' },
              { name: 'Services', route: 'Services' },
              { name: 'Boutique', route: 'Shop' },
              { name: 'Nos réalisations', route: 'Projects' },
              { name: 'Contact', route: 'Contact' },
              { name: 'FAQ', route: 'FAQ' }
            ].map(item => (
              <TouchableOpacity
                key={item.route}
                onPress={() => {
                  navigation.navigate(item.route as never);
                  setIsMenuVisible(false);
                }}
              >
                <Text className="mb-3">{item.name}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={() => setIsMenuVisible(false)}>
              <Text className="text-red-500">Fermer</Text>
            </TouchableOpacity>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
