import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Header } from 'components/layout/header';

const AboutScreen = () => {
  return (
    <>
      <Header />
      <ScrollView className="bg-white">
        <Image
          source={require('assets/work1.jpg')}
          className="w-full h-72"
          resizeMode="cover"
        />

        <Text className="text-2xl font-bold text-black px-3 mt-4">
          Notre Engagement
        </Text>

        <Text className="font-semibold text-black mt-3 px-3">
          MPE DIGITAL SOLUTIONS, nous croyons en un avenir numérique accessible à tous.
          Votre succès est notre priorité absolue.
        </Text>

        <Text className="mt-8 text-[0.8rem] px-3">
          Nous nous engageons à vous fournir des solutions informatiques innovantes et adaptées à vos besoins spécifiques.
          Que vous soyez un particulier, une PME ou une grande entreprise, notre équipe d'experts est prête à vous accompagner à chaque étape de votre transformation digitale.
          Grâce à notre gamme complète de services, allant du développement de sites web à la cybersécurité, nous nous assurons que votre expérience soit fluide et sans stress.
          Ensemble, construisons un avenir numérique solide qui propulsera votre entreprise vers de nouveaux sommets.
          Votre succès, c'est notre fierté!
        </Text>
      </ScrollView>
    </>
  );
};

export default AboutScreen;
