//here the second property must be named Data, if you recieve data in any other format you have to do the needful changing
//first property can be anything

import { ScrollView, StyleSheet, Text, View, SafeAreaView,Platform, FlatList, SectionList} from 'react-native';
import PokemonList from './data.json';
import groupedPokemonList from './groupedData.json';

export default function App() {

  const renderItem = ( ({item}) => {
    return (
    // this item represent each item in the data {} which is a mandatory prop
    <View style ={styles.card}>
      <Text>{item}</Text> 
    </View>
    )
    }
  )

  return (

    <SectionList 
      style={{paddingTop: Platform.OS==="android"? 40:0}}
      sections={groupedPokemonList}
      renderItem={renderItem}
      renderSectionHeader={ ({section}) => <Text style={{fontWeight:'bold', backgroundColor:'plum'}}>{section.type}</Text>} //it represents the first property type, on which the data was sectionised
      ItemSeparatorComponent={() => <View style={{height:7}}/>}
      SectionSeparatorComponent={ () => <View style={{height:7}}/>} //it's the type property objects or the sectionHeader
    />
  );
}

const styles = StyleSheet.create({
 
  card: {
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
  },
});
