import { useState } from "react";
import { View, Image, Text, ImageBackground, ScrollView , Button, Pressable,Alert, StyleSheet, Modal} from "react-native";
const img = require("./assets/adaptive-icon.png");
export default function App() {

    const [isModelVisible, setIsModalVisible] = useState(false);

   
  return (
    <View style={{flex: 1, backgroundColor: 'grey', padding: 50}}>
    <Pressable onPress ={()=> setIsModalVisible(true)}>  
    <Image source={{ uri: "https://imgcdn.stablediffusionweb.com/2024/5/17/2804c547-ba13-4b7b-8b28-9de30309d944.jpg"}} style={{ height:500, width:300 }}/>
    </Pressable> 
    
    <Modal 
      visible={isModelVisible}
      onRequestClose={() => setIsModalVisible(false)}
      animationType="fade"
      //animationType="slide"
      //presentationStyle="formSheet" only for ios
    >
      <View style={{flex: 1, backgroundColor: 'plum', padding: 50}}>
        <Button 
        title="Drake is touching me 🤭🥰"
        onPress={() => setIsModalVisible(false)}
        color="orange"
        />
    
      </View>

    </Modal>
    </View>

  
    
  );
}
