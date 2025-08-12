import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Header } from 'components/layout/header';

const faqData = [
  {
    question: "Quels types de logiciels développez-vous ?",
    answer: "Nous créons des logiciels sur mesure adaptés aux besoins spécifiques de nos clients, incluant des applications mobiles, web et des solutions métiers."
  },
  {
    question: "Comment se passe la collaboration avec votre équipe ?",
    answer: "Nous travaillons en étroite collaboration avec nos clients à chaque étape du projet, depuis la conception jusqu'à la livraison et le support."
  },
  {
    question: "Quels sont vos délais moyens de réalisation ?",
    answer: "Les délais varient selon la complexité, mais nous nous engageons à respecter les échéances convenues avec transparence."
  },
  {
    question: "Proposez-vous un support après livraison ?",
    answer: "Oui, nous offrons un support technique et des mises à jour pour assurer la pérennité de vos logiciels."
  }
];

const FAQScreen = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <>
      <Header />
      <ScrollView style={{ padding: 16, backgroundColor: 'white' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>FAQ</Text>
        {faqData.map((item, index) => (
          <View key={index} style={{ marginBottom: 12 }}>
            <TouchableOpacity onPress={() => toggleAnswer(index)} style={{ paddingVertical: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: '600', color: '#007AFF' }}>
                {item.question}
              </Text>
            </TouchableOpacity>
            {activeIndex === index && (
              <Text style={{ marginTop: 4, fontSize: 14, color: '#444' }}>
                {item.answer}
              </Text>
            )}
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default FAQScreen;
