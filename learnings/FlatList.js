//Flatlist renders only the items currently in the view
//FlatList uses virtualization to manage memory efficiently by keeping only a limited number of items in memory
//FlatList supports lazy loading of items, which means that additional items are loaded as the user scrolls down the list. 
//This prevents the app from freezing or crashing when dealing with large datasets.
//FlatList comes with many built-in features like pull-to-refresh, infinite scrolling, and support for different layouts (vertical, horizontal)


//Keyextrator padhna baki hai.


import { ScrollView, StyleSheet, Text, View, SafeAreaView,Platform, FlatList} from 'react-native';
import PokemonList from './data.json';

export default function App() {

  const renderItem = ( ({item}) => {
    return (
    <View key={item.id} style ={styles.card}>
      <Text>{item.name}</Text>
      <Text>{item.type}</Text>
    </View>
    )
    }
  )

  return (

    <FlatList style={{paddingTop:40, backgroundColor:'grey'}}
      data = {PokemonList} 
      renderItem={renderItem} 
    //horizontal it makes the scrolling horizontal
    ItemSeparatorComponent={() => <View style={{height:7}}/>} //it can have any react comp or a fun returning a react comp
    ListEmptyComponent={<Text>NO items found</Text>} // it return this text component if no items are present in the list.

    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    paddingTop: Platform.OS==="android"? 40:0,

  },

  scrollview:{ 
    paddingHorizontal: 20,
  },

  card: {
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
  },
});
