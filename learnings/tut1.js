import { View, Image, Text, ImageBackground } from "react-native";
const img = require("./assets/adaptive-icon.png");
export default function App() {
  return ( 
    <View style={{flex: 1, backgroundColor: 'grey', padding: 60}}>
      <Text>I am a <Text style={{color:'white'}}>gift</Text> to the humanity</Text> 
      {/* <Image source={img} style={{ height: 100, width: 100}}/> */}
      <Image source={{ uri: "https://picsum.photos/200"}} style={{ height:100, width:100 }}/>
      <ImageBackground source={img} style={{flex:1}}></ImageBackground>

    </View>
  );
}
