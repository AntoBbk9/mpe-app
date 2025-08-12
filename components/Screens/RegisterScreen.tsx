import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [postname, setPostname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [sex, setSex] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (
      !name ||
      !postname ||
      !sex ||
      !birthday ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs obligatoires');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Erreur', 'Les mots de passe ne correspondent pas');
      return;
    }

    // Ici, tu peux envoyer les données au backend via une API

    Alert.alert('Succès', `Compte créé pour ${email}`);
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      className="flex-1 justify-center px-6 bg-white"
    >
      <Text className="text-3xl font-bold mb-6 text-center">S'inscrire</Text>

      <TextInput
        placeholder="Prénom (Name)"
        value={name}
        onChangeText={setName}
        className="border border-gray-300 rounded p-3 mb-4"
      />

      <TextInput
        placeholder="Deuxième prénom (Middlename)"
        value={middlename}
        onChangeText={setMiddlename}
        className="border border-gray-300 rounded p-3 mb-4"
      />

      <TextInput
        placeholder="Nom (Postname)"
        value={postname}
        onChangeText={setPostname}
        className="border border-gray-300 rounded p-3 mb-4"
      />

      <TextInput
        placeholder="Sexe (Homme/Femme)"
        value={sex}
        onChangeText={setSex}
        className="border border-gray-300 rounded p-3 mb-4"
      />

      <TextInput
        placeholder="Date de naissance (YYYY-MM-DD)"
        value={birthday}
        onChangeText={setBirthday}
        className="border border-gray-300 rounded p-3 mb-4"
      />

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
        className="border border-gray-300 rounded p-3 mb-4"
      />

      <TextInput
        placeholder="Confirmez le mot de passe"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        className="border border-gray-300 rounded p-3 mb-6"
      />

      <TouchableOpacity
        onPress={handleRegister}
        className="bg-green-600 rounded py-3 mb-4"
      >
        <Text className="text-white text-center font-semibold text-lg">S'inscrire</Text>
      </TouchableOpacity>

      <Text className="text-center">
        Vous avez déjà un compte ?{' '}
        <Text
          className="text-blue-600 font-semibold"
          onPress={() => navigation.navigate('Login')}
        >
          Connectez-vous
        </Text>
      </Text>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
