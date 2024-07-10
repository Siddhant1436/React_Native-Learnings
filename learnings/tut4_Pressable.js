import { View, Image, Text, ImageBackground, ScrollView , Button, Pressable} from "react-native";
const img = require("./assets/adaptive-icon.png");
export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'grey', padding: 50}}>
    <Pressable
    onPress ={() => console.log('Help!!! Drake is touching me 🥺😖')}>
    <Image source={{ uri: "https://imgcdn.stablediffusionweb.com/2024/5/17/2804c547-ba13-4b7b-8b28-9de30309d944.jpg"}} style={{ height:500, width:300 }}/>
    </Pressable> 
  </View>
  );
}
import { View, Image, Text, ImageBackground, ScrollView , Button, Pressable,Alert, StyleSheet} from "react-native";
const img = require("./assets/adaptive-icon.png");
export default function App() {

   // Function to handle a regular press event
   const handlePress = () => {
    Alert.alert('Help!!! Drake is touching me 🥺😖');
  };

  // Function to handle a long press event
  const handleLongPress = () => {
    Alert.alert('Help!!! Drake is been touching me for a while now 🥰🤭🤤');
  };

  // Function to handle the press out event (when the press is released)
  const handlePressOut = () => {
    Alert.alert("He's done now 🥰🤭");
  };

  return (
    <View style={{flex: 1, backgroundColor: 'grey', padding: 50}}>
    <Pressable
    onPress ={handlePress}
    onLongPress={handleLongPress} 
    //onPressOut={handlePressOut}  
    >  
     
    <Image source={{ uri: "https://imgcdn.stablediffusionweb.com/2024/5/17/2804c547-ba13-4b7b-8b28-9de30309d944.jpg"}} style={{ height:500, width:300 }}/>
    </Pressable> 
  </View>
  );
}
