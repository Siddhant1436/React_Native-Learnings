import { View, Image, Text, ImageBackground, ScrollView } from "react-native";
const img = require("./assets/adaptive-icon.png");
export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'grey', padding: 50}}>
    <ScrollView>
    <Image source={img} style={{ height: 500, width: 300}}/> 
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nullam consectetur magna ac leo varius vestibulum. 
      Quisque convallis libero eget augue pharetra gravida.
      Aliquam vel eros sodales, mattis mauris eu, condimentum nunc.
      Quisque sed sapien malesuada, placerat elit vel, aliquet erat.
      Nullam et semper diam. Ut mollis facilisis elit nec pretium.
      Proin sapien mi, vestibulum cursus velit ut, imperdiet fringilla felis. 
      Proin ut diam tincidunt, sollicitudin arcu sit amet, scelerisque nulla.
      Curabitur tortor justo, finibus at sem ut, pulvinar pellentesque dui.
      Fusce posuere arcu elit, a egestas justo molestie efficitur.
      Pellentesque nunc nulla, facilisis a cursus eu, iaculis sed turpis.
      Aenean porttitor finibus orci, aliquet auctor enim commodo vel.
      Ut pulvinar odio purus, ac dapibus odio vehicula ut. Vestibulum scelerisque vulputate sem,
      lacinia varius augue sagittis consectetur. Donec et est eget nulla varius viverra. 
      Morbi vel cursus lectus, ac vehicula velit.
      </Text> 
      <Image source={img} style={{ height: 500, width: 300}}/> 
      </ScrollView>
    </View>
  );
}
