import { useState } from "react";
import { View, Image, Text, ImageBackground, ScrollView , Button, Pressable,Alert, StyleSheet, Modal, StatusBar} from "react-native";
const img = require("./assets/adaptive-icon.png");
import Greet from "./componenets/greet";

export default function App() {
  //the last style in the array has the most precidence

  //like css RN does not inherite properties of styling from its parent tag.
   
  //But Styles can be inherited from parent <Text> components to child <Text> components . This works for <Text> only
  return (
    <View style={styles.contaier}>

      <View style={styles.darkmode}>
        <Text style={{color:'white'}}>This is <Text style={{fontWeight:'bold'}}>white text</Text> </Text>
      </View>

       <View style={[styles.box,styles.firstBox, styles.iosShadow, styles.androidShadow]}>  
        <Text>I am learning react Native </Text>
      </View>

      <View style={[styles.box, styles.secondBox,styles.iosShadow, styles.androidShadow]}>
        <Text>Instead of watching India vs South Afcrica</Text>
      </View>
    </View>
    
  );
}
  
const styles = StyleSheet.create({
  contaier: { flex:1, padding:60, backgroundColor:'silver'},
  
  darkmode: {
    backgroundColor: 'black',
    color: 'white',   //this will not be applied to text element in view tag
  },
  //here box is child of container
  //it will occupy 25% of height and 100% of width of its parent's total dimenstion
  box: {
    height:'25%', 
    width:'100%', 
    paddingHorizontal:50, 
    paddingVertical: 60,
    marginVertical: 25,
    backgroundColor:'green',
    borderWidth: 2, // Border width
    borderColor: 'black', // Border color
    borderRadius: 50, // Rounded corners
    borderStyle: 'solid', // Border style 
  }, 

  title: {color: 'orange'}, 

  firstBox: {backgroundColor:'yellow'},

  secondBox: {backgroundColor:'orange'},

  iosShadow: {
    shadowColor:'black', //only this works on both ios and android
    shadowOpacity: 0.5, //range: [0,1]
    shadowRadius: 4,
    shadowOffset:{ width:5, length:10}

  },
  androidShadow: { //for android you have to use this property
    elevation: 50,
  },



})
