import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Header } from 'components/layout/header';

const ServiceScreen = () => {
  return (
    <>
      <Header />
      <ScrollView style={{ padding: 16, backgroundColor: 'white' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
          Nos Services
        </Text>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 6 }}>
            Développement de logiciels sur mesure
          </Text>
          <Text style={{ fontSize: 14, color: '#444' }}>
            Nous concevons et développons des applications mobiles, web et desktop adaptées à vos besoins spécifiques pour optimiser vos processus métier.
          </Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 6 }}>
            Conseil et accompagnement technique
          </Text>
          <Text style={{ fontSize: 14, color: '#444' }}>
            Notre équipe vous accompagne dans la définition de votre projet digital, la sélection des technologies et la planification des phases de développement.
          </Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 6 }}>
            Intégration et déploiement
          </Text>
          <Text style={{ fontSize: 14, color: '#444' }}>
            Nous assurons l’intégration de vos logiciels dans vos infrastructures existantes ainsi que leur déploiement en environnement de production.
          </Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 6 }}>
            Support et maintenance
          </Text>
          <Text style={{ fontSize: 14, color: '#444' }}>
            Nous offrons un support continu, des mises à jour et des améliorations pour garantir la pérennité et la performance de vos solutions logicielles.
          </Text>
        </View>

      </ScrollView>
    </>
  );
};

export default ServiceScreen;
