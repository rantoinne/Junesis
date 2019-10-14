import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, 
        Image, ScrollView, Dimensions, TextInput, Modal } from "react-native";
// import { goToScreen } from "../../utility/goToScreen";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;


const btn_menu_white = require("../../../assets/images/btn_menu_white.png")
const btn_grey_back_arrow = require("../../../assets/images/btn_grey_back_arrow.png")
const ico_invite_sent = require("../../../assets/images/ico_invite_sent.png")


class PropertyScheduled extends Component{
    constructor(props){
        super(props)
        this.state = {
            isModalVisible: false  
        }
      }
    
    onBackPress = () => {
        this.props.navigation.navigate('PropertyDetailView');
    }  

      toggleModal = () => {
          if(this.state.isModalVisible === true){
              this.setState({
                  isModalVisible: false
              })
          }else{
            this.setState({
                isModalVisible: true
            })
          }
      }


render() {
   
  return (
    <SafeAreaView style={{flex: 1}}> 
        <View style={{height: 50, backgroundColor: "#2A2A2A", 
                flexDirection: "row", paddingRight: 29, paddingLeft: 29}}>
            <View style={{justifyContent: "center", flex: 1}}>
                <TouchableOpacity onPress={() => {this.onBackPress()}}>
                    <Image source={btn_grey_back_arrow} style={{height: 13, width: 7}} />
                </TouchableOpacity>             
            </View>
            <View style={{justifyContent: "center", flex: 3}}>
                <Text style={{color: "#FFFFFF", fontSize: 15}}>PROPERTY</Text>
            </View>
            <View style={{justifyContent: "center", flex: 2, alignItems: "flex-end"}}>
                <Image source={btn_menu_white} style={{height: 10, width: 20}} />
            </View>
        </View>
        
        <ScrollView >
            <View style={{paddingBottom: 20}}>
                <View style={{height: 147, width: WIDTH, paddingLeft: 29, paddingRight: 29, paddingTop: 29}}>
                    <Text style={{color: "#535353", fontSize: 15}}>White-mills Estate</Text>
                    <Text style={{color: "#A3A3A3", fontSize: 13, marginTop: 10}}>Kalyani Nagar, Pune</Text>
                    <Text style={{color: "#535353", fontSize: 15, marginTop: 5}}>₹45,000</Text>
                    <Text style={{color: "#8B8B8B", fontSize: 15, marginTop: 10}}>Meet at Property</Text>
                </View>
            <View style={{height: 640, width: WIDTH, backgroundColor: "#F1F2F5"}}>
            <View style={{paddingTop: 20, height: 360, width: WIDTH}}>
                <CalendarList
                    markingType={'custom'}
                    // Enable horizontal scrolling, default = false
                    horizontal={true}
                    // Enable paging on horizontal, default = false
                    pagingEnabled={true}
                    // Set custom calendarWidth.
                    calendarWidth={WIDTH}
                    hideExtraDays={false}
                    
                />
            </View>
            

                <View style={{paddingLeft: 29, paddingRight: 29}}>
                    <Text style={{color: "#535353", fontSize: 14}}>Time</Text>
                        <View style={{height: 47, borderRadius: 3, marginTop: 10}}>
                            <TextInput
                                style={{backgroundColor: "#FFFFFF", height: 40, paddingHorizontal: 10}} />
                        </View>
                </View>

                <View style={{paddingTop: 20, paddingLeft: 29, paddingRight: 29}}>
                    <Text style={{color: "#535353", fontSize: 14}}>Message</Text>
                    <View style={{height: 131, borderRadius: 3, marginTop: 10}}>
                        <TextInput
                            style={{backgroundColor: "#FFFFFF", height: 131, paddingHorizontal: 10}}  
                            multiline={true}
                        />
                    </View>
                </View>

            </View>

            <View style={{height: 110, width: WIDTH, paddingTop: 31, paddingLeft: 29, paddingRight: 29}}>
               
                    <TouchableOpacity onPress={() => this.toggleModal()}
                        style={{borderColor: "#535353", backgroundColor: "#535353",borderWidth: 1, justifyContent: "center", alignItems: "center", height: 40, width: 140}}>
                            <Text style={{color: "#FFFFFF", fontSize: 15}}>SCHEDULE</Text>
                    </TouchableOpacity>
            </View>
                
                

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.isModalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{flex: 1, backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
                        <View style={{marginTop: HEIGHT/4, width: WIDTH, height: 300, padding: 30}}>
                            <View style={{flex: 1, backgroundColor: "#FFFFFF", borderRadius: 5, alignItems: "center", paddingTop: 30}}>
                                <Image source={ico_invite_sent} style={{height: 33, width: 33}} />
                                <Text style={{color: "#2A2A2A", fontSize: 14, fontWeight: "bold", marginTop: 19, marginBottom: 10}}>Meeting Request</Text>
                                <Text style={{textAlign: "center", fontSize: 14, color: "#2A2A2A"}}>Request has been sent to the buyer. You will be notified when the buyer responds to the request.</Text>

                                <TouchableOpacity onPress={() => this.toggleModal()}
                                    style={{borderColor: "#535353", backgroundColor: "#535353",borderWidth: 1, justifyContent: "center", alignItems: "center", 
                                    height: 40, width: 80, marginTop: 20}}>
                                        <Text style={{color: "#FFFFFF", fontSize: 15}}>OK</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>    
                </Modal>
        
            </View> 
        </ScrollView>
    </SafeAreaView>
  );
}
}

export default PropertyScheduled;


