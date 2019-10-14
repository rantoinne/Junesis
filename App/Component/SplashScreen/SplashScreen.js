import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar } from "react-native";
// import { goToScreen } from "../../utility/goToScreen";



class SplashScreen extends Component{

componentDidMount = () => {
    
    setTimeout(() => {
        this.props.navigation.navigate('Login');
    }, 2000);
      
}

render() {
  return (
      
        <View style={{ flex: 1, backgroundColor:"#FF9F43", justifyContent: "center", alignItems: "center" }}>            
            <Text style={{fontFamily: "Cinzel-Regular", fontSize: 40, color: "#FFFFFF"}}>JUNESIS</Text>
        </View>
      
  );
}
}

export default SplashScreen;