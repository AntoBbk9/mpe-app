import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Header } from 'components/layout/header';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

// Simulation des données backend
const projectsData: Project[] = [
  {
    id: '1',
    title: 'Plateforme e-commerce personnalisée',
    description: 'Développement d’un site e-commerce performant avec paiement sécurisé.',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    title: 'Application mobile de gestion de tâches',
    description: 'App multiplateforme pour organiser vos projets facilement.',
    imageUrl: 'https://images.unsplash.com/photo-1508385082359-f26efb6ac83a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    title: 'Solution CRM sur-mesure',
    description: 'Gestion clients optimisée pour PME et grandes entreprises.',
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    title: 'Site web vitrine pour startup',
    description: 'Design moderne et responsive pour valoriser votre entreprise.',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '5',
    title: 'Plateforme d’apprentissage en ligne',
    description: 'Système complet pour la formation à distance avec suivi des apprenants.',
    imageUrl: 'https://images.unsplash.com/photo-1537432376769-00a8e45a2ec8?auto=format&fit=crop&w=800&q=80',
  },
  // Tu peux ajouter plus ici...
];

// Simule pagination backend (par ex. 2 items par page)
const PAGE_SIZE = 2;

const ProjectScreen = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    loadMoreProjects();
  }, []);

  const loadMoreProjects = () => {
    if (loading || allLoaded) return;
    setLoading(true);

    // Simuler un fetch API avec timeout
    setTimeout(() => {
      const start = (page - 1) * PAGE_SIZE;
      const end = start + PAGE_SIZE;
      const newItems = projectsData.slice(start, end);

      if (newItems.length === 0) {
        setAllLoaded(true);
      } else {
        setProjects(prev => [...prev, ...newItems]);
        setPage(prev => prev + 1);
      }
      setLoading(false);
    }, 1000);
  };

  const renderItem = ({ item }: { item: Project }) => (
    <View className="m-4 rounded-lg bg-white shadow p-4">
      <Image
        source={{ uri: item.imageUrl }}
        className="h-40 w-full rounded-md mb-3"
        resizeMode="cover"
      />
      <Text className="text-xl font-bold mb-1">{item.title}</Text>
      <Text className="text-gray-700">{item.description}</Text>
    </View>
  );

  return (
    <>
      <Header />
      <FlatList
        data={projects}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        onEndReached={loadMoreProjects}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
        contentContainerStyle={{ paddingBottom: 20 }}
        className="bg-white"
      />
    </>
  );
};

export default ProjectScreen;
