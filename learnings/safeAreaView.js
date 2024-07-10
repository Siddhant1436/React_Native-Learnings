import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from "react-native";

//safeAreaView provides the area to work upon which is not covered bt any notches and also gives appropriate 
//padding to work smothely with round corners.
//in ios it is actully important
//keep the bacjground color same as the main View component

export default function App() {
  
  return (
    <SafeAreaView style={{ flex:1 , backgroundColor: 'plum'}}>
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome</Text>
      </View>
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
  },
  box: {
    padding:20,
    alignItems: 'center'

  },

  text: {
    marginTop: 30,
    fontWeight:'bold',
    fontSize: 24
  }
});
