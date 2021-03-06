import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { hidden } from 'ansi-colors';

const DATA= [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '09823hlsa-3asf-471f-b9fd9-1672837e33f475',
    title: 'Another Item',
  },
];

function Item({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>{title}</Text>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = {
  title: 'Home',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        backgroundColor: 'red',

      },
      android: {
        paddingTop: 0,
        backgroundColor: 'blue',
      },
    }),
  },
  item: {
    // borderColor: 'black',
    // borderWidth: 5,
    overflow: 'hidden',
    borderRadius: 5,
    // Set border width.
    borderWidth: 2,
    // Set border Hex Color Code Here.
    borderColor: '#FF5722',
    // Setting up Text Font Color.
    color: '#fff',
    // Setting Up Background Color of Text component.
    backgroundColor : '#CDDC39',
    // Adding padding on Text component.
    padding : 2,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,

    ...Platform.select({
      ios: {
        borderColor: 'blue',
      },
      android: {      

      }
    })
  },
});
