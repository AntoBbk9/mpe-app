import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Header } from 'components/layout/header';

const AboutScreen = () => {
  return (
    <>
      <Header />
      <ScrollView className="bg-white" contentContainerStyle={{ paddingBottom: 40 }}>
        <Image
          source={require('assets/work1.jpg')}
          className="w-full h-72"
          resizeMode="cover"
        />

        <View className="px-4 mt-4">
          <Text className="text-3xl font-bold text-black mb-3">Notre Engagement</Text>
          <Text className="font-semibold text-black mb-6">
            MPE DIGITAL SOLUTIONS, nous croyons en un avenir numérique accessible à tous. Votre succès est notre priorité absolue.
          </Text>

          <Text className="text-base mb-6">
            Nous nous engageons à fournir des solutions informatiques innovantes et parfaitement adaptées à vos besoins. Que vous soyez un particulier, une PME ou une grande entreprise, notre équipe d'experts vous accompagne à chaque étape de votre transformation digitale.
          </Text>

          <Text className="text-base mb-6">
            Nos services couvrent un large éventail de domaines : développement web et mobile, cybersécurité, cloud computing, maintenance applicative, et plus encore. Chaque projet est traité avec rigueur et passion pour garantir votre réussite.
          </Text>

          <Text className="text-base mb-6">
            Notre objectif est de bâtir des partenariats durables basés sur la confiance, la transparence et la qualité. Votre satisfaction est le moteur qui nous pousse à toujours donner le meilleur de nous-mêmes.
          </Text>

          <Text className="text-2xl font-bold text-black mb-3">Notre Vision</Text>
          <Text className="text-base mb-6">
            Être un acteur majeur de la transformation digitale en Afrique et à l’international, en proposant des solutions accessibles, performantes et durables.
          </Text>

          <Text className="text-2xl font-bold text-black mb-3">Nos Valeurs</Text>
          <View className="mb-6">
            <Text className="text-base">• Innovation constante</Text>
            <Text className="text-base">• Proximité client</Text>
            <Text className="text-base">• Excellence technique</Text>
            <Text className="text-base">• Éthique et transparence</Text>
            <Text className="text-base">• Esprit d’équipe</Text>
          </View>

          <Text className="text-2xl font-bold text-black mb-3">Notre Équipe</Text>
          <Text className="text-base mb-6">
            Composée de développeurs, designers, consultants et experts techniques passionnés, notre équipe est à l’écoute de vos besoins pour créer des solutions sur-mesure.
          </Text>

          <Text className="text-base mb-6 italic">
            « Ensemble, nous construisons l’avenir numérique de votre entreprise. »
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default AboutScreen;
