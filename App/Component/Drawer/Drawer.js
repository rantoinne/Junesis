import { View, Text, SafeAreaView,  Modal } from "react-native";


export default Drawer = (booleanValue) => {
    return (
        <SafeAreaView style={{flex:1}}> 
         <Modal
              visible={booleanValue}   
              transparent={true}>
              <View style={{backgroundColor: "#FFFFFF", paddingLeft: 100}}>
                  <Text>Drawer</Text>
              </View>
  
         </Modal>         
        </SafeAreaView>
    );
  }
