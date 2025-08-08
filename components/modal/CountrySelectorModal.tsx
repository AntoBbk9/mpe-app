import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';
import countries from 'world-countries';

const { width } = Dimensions.get('window');

export default function CountrySelector({ visible, onSelect, onClose }) {
  if (!visible) return null; // Ne rien afficher si pas visible

  return (
    <View style={styles.dropdownContainer}>
      <FlatList
        data={countries}
        keyExtractor={(item) => item.cca2}
        style={styles.list}
        nestedScrollEnabled={true} // Permet de scroller si imbriqué
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              onSelect(item);
              onClose();
            }}
          >
            <Text>{item.flag} {item.name.common} (+{item.idd.root}{item.idd.suffixes?.[0]})</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dropdownContainer: {
    position: 'absolute',
    top: 45, // ajuste selon la taille du bouton déclencheur
    right: 0,
    width: width * 0.4, // 40% de la largeur de l'écran
    maxHeight: 250, // hauteur max avant scroll
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    zIndex: 1000, // au dessus des autres vues
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  list: {
    flexGrow: 0,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
});
