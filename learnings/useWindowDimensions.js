import React from 'react';
import { StyleSheet, View, useWindowDimensions, Text } from "react-native";

export default function App() {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: windowWidth > 500 ? '70%' : '90%',
            height: windowHeight > 600 ? '60%' : '90%',
          },
        ]}
      >
        <Text>Welcome</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'plum',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
});
