//its not the best and prefered way to do so


import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, SafeAreaView,Platform} from 'react-native';
import PokemonList from './data.json';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style = {styles.scrollview}>
      {
        PokemonList.map((pokemon)=>{
          return (
            <View key={pokemon.id} style ={styles.card}>
              <Text>{pokemon.name}</Text>
              <Text>{pokemon.type}</Text>
            </View>
          );
        })
      }
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS==="android"? 40:0,

  },

  scrollview:{ 
    paddingHorizontal: 20,
  },

  card: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    marginBottom: 16,
    borderWidth: 1,
  }
});
