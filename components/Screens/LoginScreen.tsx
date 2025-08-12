import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }

    // Ici tu appelleras ton API d'authentification
    Alert.alert('Succès', `Connecté avec ${email}`);
    // navigation.replace('Main'); // Par exemple, une fois connecté
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      className="flex-1 justify-center px-6 bg-white"
    >
      <Text className="text-3xl font-bold mb-6 text-center">Se connecter</Text>

      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        className="border border-gray-300 rounded p-3 mb-4"
      />

      <TextInput
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        className="border border-gray-300 rounded p-3 mb-6"
      />

      <TouchableOpacity
        onPress={handleLogin}
        className="bg-blue-600 rounded py-3 mb-4"
      >
        <Text className="text-white text-center font-semibold text-lg">Connexion</Text>
      </TouchableOpacity>

      <Text className="text-center">
        Vous n'avez pas de compte ?{' '}
        <Text
          className="text-blue-600 font-semibold"
          onPress={() => navigation.navigate('Register')}
        >
          Inscrivez-vous
        </Text>
      </Text>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
