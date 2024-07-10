import { View, Image, Text, ImageBackground, ScrollView , Button} from "react-native";
const img = require("./assets/adaptive-icon.png");
export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'grey', padding: 50}}>
    <Button 
      title = 'Dabao'
      onPress ={() => console.log('Mujhe dabaya gaya hai🥹')}
      color = 'lightpink'
      disabled  // to diable the button, nothing will happen on pressing it
    />
    </View>
  );
}
