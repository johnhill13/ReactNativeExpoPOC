import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function CategoriesScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* If you can't find.... this is where my text goes  */}

    </ScrollView>
  );
}

CategoriesScreen.navigationOptions = {
  title: 'Categories',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
