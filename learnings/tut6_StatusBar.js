import { useState } from "react";
import { View, Image, Text, ImageBackground, ScrollView , Button, Pressable,Alert, StyleSheet, Modal, StatusBar} from "react-native";
const img = require("./assets/adaptive-icon.png");
export default function App() {

    const [isModelVisible, setIsModalVisible] = useState(false);
    const [isStatusBarHidden, setIsStatusBarHidden] = useState(false);
  
    const openModal = () => {
      setIsModalVisible(true);  // Show the modal
      setIsStatusBarHidden(true);  // Hide the StatusBar
    };
  
    const closeModal = () => {
      setIsModalVisible(false);  // Hide the modal
      setIsStatusBarHidden(false);  // Show the StatusBar
    };
   
  return (
    <View style={{flex: 1, backgroundColor: 'black', padding: 50}}>
    <StatusBar backgroundColor="blue" barStyle="light-content" hidden={isStatusBarHidden}/>
    <Pressable onPress ={openModal}>  
    <Image source={{ uri: "https://imgcdn.stablediffusionweb.com/2024/5/17/2804c547-ba13-4b7b-8b28-9de30309d944.jpg"}} style={{ height: 660, width:"100%" }}/>
    </Pressable> 
    
    <Modal 
      visible={isModelVisible}
      onRequestClose={closeModal}
      animationType="fade"
      //animationType="slide"
      //presentationStyle="formSheet" only for ios
    >
      <View style={{flex: 1, backgroundColor: 'plum', padding: 50}}>
        <Button 
        title="Drake is touching me 🤭🥰"
        onPress={closeModal}
        color="orange"
        />
    
      </View>

    </Modal>
    </View>

  
    
  );
}
