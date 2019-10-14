import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar,
        Image, ScrollView, Dimensions, StyleSheet, Animated, Modal, Platform } from "react-native";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
// import { Navigation } from "react-native-navigation";

// import { goToScreen } from "../../utility/goToScreen"; 

  
const { width, height } = Dimensions.get("window");
  
const CARD_HEIGHT = height / 2;
const CARD_WIDTH = width - 20;

const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
};

const btn_menu = require("../../../assets/images/btn_menu.png");
const btn_menu_white = require("../../../assets/images/btn_menu_white.png");
const btn_grey_back_arrow = require("../../../assets/images/btn_grey_back_arrow.png");

const ico_accepted_meeting = require("../../../assets/images/ico_accepted_meeting.png");
const ico_rejected_meeting = require("../../../assets/images/ico_rejected_meeting.png");
const ico_pending_meeting = require("../../../assets/images/ico_pending_meeting.png");


class Notifications extends Component{
constructor(props){
  super(props)
  this.state = {
      modalY: new Animated.Value(height),
           
  }
}

componentWillMount() {
  
}

componentDidMount() {
    
}

onBackPress = () => {
    this.props.navigation.navigate('MainPage');
}

openModal() {
    Animated.timing(this.state.modalY, {
        duration: 300,
        toValue: 0
     }).start();
  }

closeModal() {
    Animated.timing(this.state.modalY, {
        duration: 300,
        toValue: height
     }).start();
}

goFromDrawer = (screenName) => {
    this.closeModal()

    if(screenName === "listing"){
        console.warn("Property Listing")

    }else if(screenName === "home"){
        console.warn("Home")

    }else if(screenName === "profile"){
        console.warn("Profile")

    }else if(screenName === "dashboard"){
        console.warn("Dashboard")

    }else if(screenName === "clients"){
        console.warn("Clients")

    }else if(screenName === "meetings"){
        console.warn("Meetings")

    }else if(screenName === "listing"){
        console.warn("Property Listing")

    }else if(screenName === "bidding"){
        console.warn("Bidding")

    }else if(screenName === "logout"){
        console.warn("LOGOUT")

    }
}

onSwipe(gestureName, gestureState) {
    const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_LEFT:
        this.openModal()
        break;
      case SWIPE_RIGHT:
        this.closeModal()
        break;
    }
}

goWithStatus = (status) =>{
    this.props.navigation.navigate('Bidding', { notificationRespondStatus: status });
}

render() {
    var mods = <Animated.View style={{ transform: [{translateX: this.state.modalY}],
                                        height: Platform.OS === "ios" ? height : height+25,
                                        width: width,
                                        position: 'absolute',
                                        top:0,
                                        left:0,
                                        backgroundColor: 'rgba(52, 52, 52, 0.8)',
                                        justifyContent: 'center', alignItems: "flex-end" }}>
                                                          
                    <View style={{flex: 1, backgroundColor: "#FFFFFF", width:Platform.OS === "ios" ? width-135 : width-115  }}>
                        
                            <View style={{alignItems: "flex-end", paddingTop: Platform.OS === "ios" ? 35 : 20, marginLeft: 29, marginRight: 29}}>
                                <TouchableOpacity onPress={() => this.closeModal()}>
                                    <Image source={btn_menu} style={{height: 15, width: 20}} />
                                </TouchableOpacity>
                            </View>
                            <View style={{justifyContent: "center", alignItems: "center",}}>
                                <TouchableOpacity onPress={() => this.goFromDrawer("listing")}
                                        style={{borderColor: "#535353", backgroundColor: "#535353", borderRadius: 5, 
                                        justifyContent: "center", alignItems: "center", height: 40, width: width/1.925, marginTop: 20}}>
                                            <Text style={{color: "#FFFFFF", fontSize: 15}}>LIST A PROPERTY</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{justifyContent: "center", backgroundColor: "#F6F6F6", marginTop: 31,  paddingHorizontal: 29, paddingVertical: 20}}>
                                <Text style={{color: "#2A2A2A", fontSize: 17}}>MENU</Text>
                            </View>

                        <ScrollView>
                            <View style={{justifyContent: "center", paddingHorizontal: 29, paddingVertical: 20}}>
                                <TouchableOpacity onPress={() => this.goFromDrawer("home")}>
                                    <Text style={{color: "#535353", fontSize: 17}}>Home</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{justifyContent: "center", paddingHorizontal: 29, paddingVertical: 20}}>
                                <TouchableOpacity onPress={() => this.goFromDrawer("profile")}>
                                    <Text style={{color: "#535353", fontSize: 17}}>Profile</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{justifyContent: "center", paddingHorizontal: 29, paddingVertical: 20}}>
                                <TouchableOpacity onPress={() => this.goFromDrawer("dashboard")}>
                                    <Text style={{color: "#535353", fontSize: 17}}>Dashboard</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{justifyContent: "center", paddingHorizontal: 29, paddingVertical: 20}}>
                                <TouchableOpacity onPress={() => this.goFromDrawer("clients")}>
                                    <Text style={{color: "#535353", fontSize: 17}}>Clients</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{justifyContent: "center", paddingHorizontal: 29, paddingVertical: 20}}>
                                <TouchableOpacity onPress={() => this.goFromDrawer("meetings")}>
                                    <Text style={{color: "#535353", fontSize: 17}}>Meetings</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{justifyContent: "center", paddingHorizontal: 29, paddingVertical: 20}}>
                                <TouchableOpacity onPress={() => this.goFromDrawer("listing")}>
                                    <Text style={{color: "#535353", fontSize: 17}}>Property Listing</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{justifyContent: "center", paddingHorizontal: 29, paddingVertical: 20}}>
                                <TouchableOpacity onPress={() => this.goFromDrawer("bidding")}>
                                    <Text style={{color: "#535353", fontSize: 17}}>Bidding</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{justifyContent: "center", paddingHorizontal: 29, paddingVertical: 20}}>
                                <TouchableOpacity onPress={() => this.goFromDrawer("logout")}>
                                    <Text style={{color: "#535353", fontSize: 17}}>LOGOUT</Text>
                                </TouchableOpacity>
                            </View>       
                        </ScrollView> 
                    </View>                           
                </Animated.View>

                
  return (
    <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        config={config}
        style={{
        flex: 1,
        backgroundColor: this.state.backgroundColor
        }}
        >
        <SafeAreaView style={{flex: 1}}> 
            <View style={{height: 50, backgroundColor: "#2A2A2A", 
                    flexDirection: "row", paddingRight: 29, paddingLeft: 29}}>
                <View style={{justifyContent: "center", flex: 1}}>
                    <TouchableOpacity onPress={() => {this.onBackPress()}}>
                        <Image source={btn_grey_back_arrow} style={{height: 13, width: 7}} />
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent: "center", flex: 3}}>
                    <Text style={{color: "#FFFFFF", fontSize: 15}}>NOTIFICATIONS</Text>
                </View>
                <View style={{justifyContent: "center", flex: 2, alignItems: "flex-end"}}>
                    <TouchableOpacity onPress={() => this.openModal()}>
                        <Image source={btn_menu_white} style={{height: 15, width: 20}} />
                    </TouchableOpacity>
                </View>
            </View>
            
            <ScrollView style={{flex: 1}}>
                <View style={{flex: 1, }}>
                    <TouchableOpacity onPress={() => this.goWithStatus("Pending")}>
                        <View style={{height: 100, flexDirection: "row", paddingHorizontal: 20, paddingVertical: 10, backgroundColor: "#F6F6F6"}}>
                            <View style={{flex: 1, alignItems: "center"}}>
                                <Image source={ico_pending_meeting} style={{height: 24, width: 24}} resizeMode= "stretch" />
                            </View>
                            <View style={{flex: 4}}>
                                <Text style={{color: "#535353", fontSize: 16}}>Meeting Scheduling</Text>
                                <Text style={{color: "#6B6B6B", fontSize: 14, marginTop: 10}}>Mark Evans wants to schedule a meet for the Green property.</Text>
                            </View>
                        </View>
                    </TouchableOpacity>    
                    <View style={{borderBottomWidth: 2, borderBottomColor: "#EFEFEF", marginBottom: 10}}></View>

                    <TouchableOpacity onPress={() => this.goWithStatus("Approved")}>
                        <View style={{height: 100, flexDirection: "row", paddingHorizontal: 20, paddingVertical: 10}}>
                            <View style={{flex: 1, alignItems: "center"}}>
                                <Image source={ico_accepted_meeting} style={{height: 23, width: 19}} resizeMode= "stretch" />
                            </View>
                            <View style={{flex: 4}}>
                                <Text style={{color: "#535353", fontSize: 16}}>Meeting Accepted</Text>
                                <Text style={{color: "#6B6B6B", fontSize: 14, marginTop: 20}}>Eva Grant has accepted the meeting at Green property.</Text>
                            </View>
                        </View>
                    </TouchableOpacity>    
                    <View style={{borderBottomWidth: 2, borderBottomColor: "#EFEFEF", marginBottom: 10}}></View>

                    <TouchableOpacity onPress={() => this.goWithStatus("Declined")}>
                        <View style={{height: 100, flexDirection: "row", paddingHorizontal: 20, paddingVertical: 10}}>
                            <View style={{flex: 1, alignItems: "center"}}>
                                <Image source={ico_rejected_meeting} style={{height: 31, width: 4}} resizeMode= "stretch" />
                            </View>
                            <View style={{flex: 4}}>
                                <Text style={{color: "#535353", fontSize: 16}}>Meet Rejected</Text>
                                <Text style={{color: "#6B6B6B", fontSize: 14, marginTop: 10}}>Eva Grant rejected the meeting at Green property.</Text>
                            </View>
                        </View>
                    </TouchableOpacity>    
                    <View style={{borderBottomWidth: 2, borderBottomColor: "#EFEFEF", marginBottom: 10}}></View>
                </View>
            </ScrollView>

       
        { mods } 
        </SafeAreaView>
    </GestureRecognizer>
  );
}
}

export default Notifications;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      position: "absolute",
      bottom: 10,
      left: 0,
      right: 0,
      paddingVertical: 10,
    },
    endPadding: {
      paddingRight: width - CARD_WIDTH,
    },
    card: {
      padding: 10,
      elevation: 2,
      backgroundColor: "#FFFFFF",
      shadowColor: "#000",
      shadowRadius: 5,
      shadowOpacity: 0.3,
      shadowOffset: { x: 2, y: -2 },
      height: 300,
      width: width,
      overflow: "hidden",
      elevation: 1
    },
    cardImage: {
      flex: 1,
      width: "100%",
      height: 135,
      alignSelf: "center",
    },
    textContent: {
      flex: 1,
    },
    cardtitle: {
      fontSize: 12,
      marginTop: 5,
      fontWeight: "bold",
    },
    cardDescription: {
      fontSize: 12,
      color: "#444",
    },
    markerWrap: {
      alignItems: "center",
      justifyContent: "center",
    },
    marker: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgba(130,4,150, 0.9)",
    },
    ring: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: "rgba(130,4,150, 0.3)",
      position: "absolute",
      borderWidth: 1,
      borderColor: "rgba(130,4,150, 0.5)",
    },
  });