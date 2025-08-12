import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { Header } from 'components/layout/header';

type Message = {
  id: string;
  text: string;
  fromUser: boolean;
};

const ContactScreen = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = () => {
    if (!input.trim()) return;

    // Ajouter message utilisateur
    const newMessage: Message = { id: Date.now().toString(), text: input.trim(), fromUser: true };
    setMessages(prev => [...prev, newMessage]);

    // Réponse automatique pour exemple (à remplacer par backend)
    setTimeout(() => {
      const reply: Message = { id: (Date.now() + 1).toString(), text: "Merci pour votre message, nous reviendrons vers vous bientôt.", fromUser: false };
      setMessages(prev => [...prev, reply]);
    }, 1500);

    setInput('');
  };

  return (
    <>
      <Header />
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={{ flex: 1, padding: 16, backgroundColor: 'white' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Contact</Text>

        <FlatList
          data={messages}
          keyExtractor={item => item.id}
          style={{ flex: 1, marginBottom: 16 }}
          renderItem={({ item }) => (
            <View style={{
              alignSelf: item.fromUser ? 'flex-end' : 'flex-start',
              backgroundColor: item.fromUser ? '#DCF8C6' : '#ECECEC',
              padding: 10,
              borderRadius: 8,
              marginVertical: 4,
              maxWidth: '80%',
            }}>
              <Text>{item.text}</Text>
            </View>
          )}
        />

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Écrire un message..."
            style={{
              flex: 1,
              borderColor: '#CCC',
              borderWidth: 1,
              borderRadius: 20,
              paddingHorizontal: 12,
              paddingVertical: 8,
              marginRight: 8,
            }}
          />
          <TouchableOpacity onPress={sendMessage} style={{
            backgroundColor: '#007AFF',
            paddingHorizontal: 16,
            paddingVertical: 10,
            borderRadius: 20,
          }}>
            <Text style={{ color: 'white' }}>Envoyer</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default ContactScreen;
