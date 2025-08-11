import React, { useRef, useState, useEffect } from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';

const { width } = Dimensions.get('window');

const images = [
   { id: '1', src: require('assets/carousel-1.jpg'), caption: "Bienvenue sur notre plateforme" },
    { id: '2', src: require('assets/carousel-2.jpg'), caption: "Apprenez avec les meilleurs" },
    { id: '3', src: require('assets/carousel-3.jpg'), caption: "Participez aux formations" },
    { id: '4', src: require('assets/carousel-4.jpg'), caption: "Rejoignez notre communauté" },
];

const Carousel = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
           <View>
              <Image source={item.src} style={styles.image} />
              <View className="absolute inset-0 flex justify-center items-start px-4 py-12">
                <View className="absolute inset-0 bg-black/50" />
                <Text className="text-white text-[3rem] font-semibold text-left">{item.caption}</Text>
              </View>
           </View>
        )}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        initialScrollIndex={0}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfigRef.current}
      />

      {/* Indicateurs */}
      <View style={styles.indicatorContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentIndex === index ? styles.activeIndicator : styles.inactiveIndicator,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: width,
    height: 250,
    resizeMode: 'cover',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  indicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 6,
  },
  activeIndicator: {
    backgroundColor: '#000',
  },
  inactiveIndicator: {
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: 'transparent',
  },
});

export default Carousel;
