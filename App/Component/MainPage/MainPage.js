import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar,
        Image, ScrollView, Dimensions, StyleSheet, Animated, Modal, Platform } from "react-native";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import MapComponent from './MapComponent';
// import { goToScreen } from "../../utility/goToScreen"; 

const Images = [
    { uri: "https://livinator.com/wp-content/uploads/2016/03/Horizontal-Lines-aceinteriordesign.jpg" },
    { uri: "https://livinator.com/wp-content/uploads/2016/03/Horizontal-Lines-aceinteriordesign.jpg" },
    { uri: "https://livinator.com/wp-content/uploads/2016/03/Horizontal-Lines-aceinteriordesign.jpg" },
    { uri: "https://livinator.com/wp-content/uploads/2016/03/Horizontal-Lines-aceinteriordesign.jpg" }
]

const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
};
  
const { width, height } = Dimensions.get("window");
  
const CARD_HEIGHT = height / 2;
const CARD_WIDTH = width - 20;

const btn_menu = require("../../../assets/images/btn_menu.png");
const btn_grey_heart = require("../../../assets/images/btn_grey_heart.png");
const btn_grey_share = require("../../../assets/images/btn_grey_share.png");
const btn_green_star = require("../../../assets/images/btn_green_star.png");
const btn_grey_search = require("../../../assets/images/btn_grey_search.png");

const dummyImageUrl = "https://livinator.com/wp-content/uploads/2016/03/Horizontal-Lines-aceinteriordesign.jpg";


class MainPage extends Component{
constructor(props){
  super(props)
  this.state = {
      modalY: new Animated.Value(height),
      isModalVisible: false,
      isListViewActive: true,
      isMapViewActive: false,
      isGalleryViewActive: false,
  }
}

componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
}

componentDidMount() {
  }

toggleView = (view) =>{

    if(view === "listView"){
        this.setState({
            isListViewActive: true,
            isMapViewActive: false,
            isGalleryViewActive: false
        })
    }else if(view === "mapView"){
        this.setState({
            isListViewActive: false,
            isMapViewActive: true,
            isGalleryViewActive: false
        })
    }else if(view === "galleryView"){
        this.setState({
            isListViewActive: false,
            isMapViewActive: false,
            isGalleryViewActive: true
        })
    }else{
        alert("Something Went Wrong, View Not Found !")
    }  
}

propertyDetailView = () => {
    this.props.navigation.navigate('PropertyDetailView')
}


openModal() {
    this.props.navigation.openDrawer();
  }

closeModal() {
    Animated.timing(this.state.modalY, {
        duration: 300,
        toValue: height
     }).start();
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

render() {

    var mods = <View>
                    <Text>Modal View</Text>
                </View>


    let btnList = null;
    let btnMap = null;
    let btnGallery = null;

    let loadView = null;

    if(this.state.isListViewActive === true){
        btnList = <View style={{flex: 1, backgroundColor: "#F6F6F6", height: 40}}>
                    <TouchableOpacity style={{backgroundColor: "#6B6B6B", borderRadius: 3, 
                        height: 40, alignContent: "center", justifyContent: "center"}}
                        onPress={() => this.toggleView("listView")}>
                        <Text style={{color: "#FFFFFF", alignSelf: "center"}}>LIST</Text>
                    </TouchableOpacity>
                </View>

        loadView = <ScrollView>
                    <View style={{paddingBottom: 190}}>
                    <TouchableOpacity onPress={() => this.propertyDetailView()}>
                    <View>
                            <View style={{height: 161, alignItems: "center", justifyContent: "center"}}>
                                <Image source={{uri: dummyImageUrl}} style={{height: 161, width: "100%"}} />
                            </View>

                            <View style={{paddingLeft: 29, paddingRight: 29}}>
                                <View style={{marginTop: 14, flexDirection: "row"}}>
                                    <View style={{width: "70%"}}>
                                        <View style={{flexDirection: "row"}}>
                                            <Text style={{color: "#535353", fontSize: 15}}>White-mills Estate</Text>
                                            <Text style={{color: "#535353", fontSize: 12, marginTop: 4}}>   Rent</Text>
                                        </View>
                                    </View>
                                    <View style={{width: "30%", flexDirection: "row"}}>
                                        <View style={{flex: 1, alignItems: "flex-end"}}>
                                            <Image source={btn_grey_heart} style={{height: 18, width: 19}} />
                                        </View>
                                        <View style={{flex: 1, alignItems: "flex-end"}}>
                                            <Image source={btn_grey_share} style={{height: 19, width: 15}} />
                                        </View>
                                    </View>
                                </View>
                                <View style={{marginTop: 12, flexDirection: "row"}}>
                                    <View style={{justifyContent: "center"}}>
                                        <Image source={btn_green_star} style={{height: 15, width: 15}} />
                                    </View>
                                    <View style={{paddingLeft: 6, justifyContent: "center"}}>
                                        <Text style={{color: "#2ECC71", fontSize: 13}}>4.2</Text>
                                    </View>
                                </View>
                                <View style={{justifyContent: "center", paddingTop: 20, paddingBottom: 20}}>
                                    <Text style={{color: "#A3A3A3", fontSize: 13}}>1200 Sq.m | 21st Floor, Kalyani Nagar, Pune</Text>
                                </View>
                            </View>

                            <View style={{height: 46, flexDirection: "row", backgroundColor: "#F6F6F6", paddingLeft: 29, paddingRight: 29}}>
                                <View style={{width: "50%", justifyContent: "center"}}>
                                    <Text style={{color: "#535353", fontSize: 15}}>₹45,000</Text>
                                </View>
                                <View style={{flexDirection: "row", width: "50%"}}>
                                    <View style={{flex: 1, alignItems: "flex-end", justifyContent: "center"}}> 
                                        <Text style={{color: "#A3A3A3", fontSize: 12}}>READ MORE</Text>
                                    </View>
                                    <View style={{flex: 1, alignItems: "flex-end", justifyContent: "center"}}>
                                        <Text style={{color: "#535353", fontSize: 12}}>RENT</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>             

                        <View>
                            <View style={{height: 161, alignItems: "center", justifyContent: "center"}}>
                                <Image source={{uri: dummyImageUrl}} style={{height: 161, width: "100%"}} />
                            </View>

                            <View style={{paddingLeft: 29, paddingRight: 29}}>
                                <View style={{marginTop: 14, flexDirection: "row"}}>
                                    <View style={{width: "70%"}}>
                                        <View style={{flexDirection: "row"}}>
                                            <Text style={{color: "#535353", fontSize: 15}}>White-mills Estate</Text>
                                            <Text style={{color: "#535353", fontSize: 12, marginTop: 4}}>   Rent</Text>
                                        </View>
                                    </View>
                                    <View style={{width: "30%", flexDirection: "row"}}>
                                        <View style={{flex: 1, alignItems: "flex-end"}}>
                                            <Image source={btn_grey_heart} style={{height: 18, width: 19}} />
                                        </View>
                                        <View style={{flex: 1, alignItems: "flex-end"}}>
                                            <Image source={btn_grey_share} style={{height: 19, width: 15}} />
                                        </View>
                                    </View>
                                </View>
                                <View style={{marginTop: 12, flexDirection: "row"}}>
                                    <View style={{justifyContent: "center"}}>
                                        <Image source={btn_green_star} style={{height: 15, width: 15}} />
                                    </View>
                                    <View style={{paddingLeft: 6, justifyContent: "center"}}>
                                        <Text style={{color: "#2ECC71", fontSize: 13}}>4.2</Text>
                                    </View>
                                </View>
                                <View style={{justifyContent: "center", paddingTop: 20, paddingBottom: 20}}>
                                    <Text style={{color: "#A3A3A3", fontSize: 13}}>1200 Sq.m | 21st Floor, Kalyani Nagar, Pune</Text>
                                </View>
                            </View>

                            <View style={{height: 46, flexDirection: "row", backgroundColor: "#F6F6F6", paddingLeft: 29, paddingRight: 29}}>
                                <View style={{width: "50%", justifyContent: "center"}}>
                                    <Text style={{color: "#535353", fontSize: 15}}>₹45,000</Text>
                                </View>
                                <View style={{flexDirection: "row", width: "50%"}}>
                                    <View style={{flex: 1, alignItems: "flex-end", justifyContent: "center"}}> 
                                        <Text style={{color: "#A3A3A3", fontSize: 12}}>READ MORE</Text>
                                    </View>
                                    <View style={{flex: 1, alignItems: "flex-end", justifyContent: "center"}}>
                                        <Text style={{color: "#535353", fontSize: 12}}>RENT</Text>
                                    </View>
                                </View>
                            </View>
                        </View> 

                        <View>
                            <View style={{height: 161, alignItems: "center", justifyContent: "center"}}>
                                <Image source={{uri: dummyImageUrl}} style={{height: 161, width: "100%"}} />
                            </View>

                            <View style={{paddingLeft: 29, paddingRight: 29}}>
                                <View style={{marginTop: 14, flexDirection: "row"}}>
                                    <View style={{width: "70%"}}>
                                        <View style={{flexDirection: "row"}}>
                                            <Text style={{color: "#535353", fontSize: 15}}>White-mills Estate</Text>
                                            <Text style={{color: "#535353", fontSize: 12, marginTop: 4}}>   Rent</Text>
                                        </View>
                                    </View>
                                    <View style={{width: "30%", flexDirection: "row"}}>
                                        <View style={{flex: 1, alignItems: "flex-end"}}>
                                            <Image source={btn_grey_heart} style={{height: 18, width: 19}} />
                                        </View>
                                        <View style={{flex: 1, alignItems: "flex-end"}}>
                                            <Image source={btn_grey_share} style={{height: 19, width: 15}} />
                                        </View>
                                    </View>
                                </View>
                                <View style={{marginTop: 12, flexDirection: "row"}}>
                                    <View style={{justifyContent: "center"}}>
                                        <Image source={btn_green_star} style={{height: 15, width: 15}} />
                                    </View>
                                    <View style={{paddingLeft: 6, justifyContent: "center"}}>
                                        <Text style={{color: "#2ECC71", fontSize: 13}}>4.2</Text>
                                    </View>
                                </View>
                                <View style={{justifyContent: "center", paddingTop: 20, paddingBottom: 20}}>
                                    <Text style={{color: "#A3A3A3", fontSize: 13}}>1200 Sq.m | 21st Floor, Kalyani Nagar, Pune</Text>
                                </View>
                            </View>

                            <View style={{height: 46, flexDirection: "row", backgroundColor: "#F6F6F6", paddingLeft: 29, paddingRight: 29}}>
                                <View style={{width: "50%", justifyContent: "center"}}>
                                    <Text style={{color: "#535353", fontSize: 15}}>₹45,000</Text>
                                </View>
                                <View style={{flexDirection: "row", width: "50%"}}>
                                    <View style={{flex: 1, alignItems: "flex-end", justifyContent: "center"}}> 
                                        <Text style={{color: "#A3A3A3", fontSize: 12}}>READ MORE</Text>
                                    </View>
                                    <View style={{flex: 1, alignItems: "flex-end", justifyContent: "center"}}>
                                        <Text style={{color: "#535353", fontSize: 12}}>RENT</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={{height: 161, alignItems: "center", justifyContent: "center"}}>
                                <Image source={{uri: dummyImageUrl}} style={{height: 161, width: "100%"}} />
                            </View>

                            <View style={{paddingLeft: 29, paddingRight: 29}}>
                                <View style={{marginTop: 14, flexDirection: "row"}}>
                                    <View style={{width: "70%"}}>
                                        <View style={{flexDirection: "row"}}>
                                            <Text style={{color: "#535353", fontSize: 15}}>White-mills Estate</Text>
                                            <Text style={{color: "#535353", fontSize: 12, marginTop: 4}}>   Rent</Text>
                                        </View>
                                    </View>
                                    <View style={{width: "30%", flexDirection: "row"}}>
                                        <View style={{flex: 1, alignItems: "flex-end"}}>
                                            <Image source={btn_grey_heart} style={{height: 18, width: 19}} />
                                        </View>
                                        <View style={{flex: 1, alignItems: "flex-end"}}>
                                            <Image source={btn_grey_share} style={{height: 19, width: 15}} />
                                        </View>
                                    </View>
                                </View>
                                <View style={{marginTop: 12, flexDirection: "row"}}>
                                    <View style={{justifyContent: "center"}}>
                                        <Image source={btn_green_star} style={{height: 15, width: 15}} />
                                    </View>
                                    <View style={{paddingLeft: 6, justifyContent: "center"}}>
                                        <Text style={{color: "#2ECC71", fontSize: 13}}>4.2</Text>
                                    </View>
                                </View>
                                <View style={{justifyContent: "center", paddingTop: 20, paddingBottom: 20}}>
                                    <Text style={{color: "#A3A3A3", fontSize: 13}}>1200 Sq.m | 21st Floor, Kalyani Nagar, Pune</Text>
                                </View>
                            </View>

                            <View style={{height: 46, flexDirection: "row", backgroundColor: "#F6F6F6", paddingLeft: 29, paddingRight: 29}}>
                                <View style={{width: "50%", justifyContent: "center"}}>
                                    <Text style={{color: "#535353", fontSize: 15}}>₹45,000</Text>
                                </View>
                                <View style={{flexDirection: "row", width: "50%"}}>
                                    <View style={{flex: 1, alignItems: "flex-end", justifyContent: "center"}}> 
                                        <Text style={{color: "#A3A3A3", fontSize: 12}}>READ MORE</Text>
                                    </View>
                                    <View style={{flex: 1, alignItems: "flex-end", justifyContent: "center"}}>
                                        <Text style={{color: "#535353", fontSize: 12}}>RENT</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        </View>
                    </ScrollView>         


    }else{
        btnList = <View style={{flex: 1, backgroundColor: "#F6F6F6", height: 40}}>
                    <TouchableOpacity style={{backgroundColor: "#F6F6F6", borderRadius: 3, 
                        height: 40, alignContent: "center", justifyContent: "center"}}
                        onPress={() => this.toggleView("listView")}>
                        <Text style={{color: "#6B6B6B", alignSelf: "center"}}>LIST</Text>
                    </TouchableOpacity>
                </View>
    }

    if(this.state.isMapViewActive){
        btnMap = <View style={{flex: 1, backgroundColor: "#F6F6F6", height: 40}}>
                    <TouchableOpacity style={{backgroundColor: "#6B6B6B", borderRadius: 3, 
                        height: 40, alignContent: "center", justifyContent: "center"}}
                        onPress={() => this.toggleView("mapView")}>
                        <Text style={{color: "#FFFFFF", alignSelf: "center"}}>MAP</Text>
                    </TouchableOpacity>
                </View>

        
        loadView = <ScrollView contentContainerStyle= {{width, justifyContent: 'flex-start'}}>
                <MapComponent />
                <MapComponent />
                <MapComponent />
                <MapComponent />
        </ScrollView>

    }else{
        btnMap = <View style={{flex: 1, backgroundColor: "#F6F6F6", height: 40}}>
                    <TouchableOpacity style={{backgroundColor: "#F6F6F6", borderRadius: 3, 
                        height: 40, alignContent: "center", justifyContent: "center"}}
                        onPress={() => this.toggleView("mapView")}>
                        <Text style={{color: "#6B6B6B", alignSelf: "center"}}>MAP</Text>
                    </TouchableOpacity>
                </View>
    }

    if(this.state.isGalleryViewActive){
        btnGallery = <View style={{flex: 1, backgroundColor: "#F6F6F6", height: 40}}>
                        <TouchableOpacity style={{backgroundColor: "#6B6B6B", borderRadius: 3, 
                            height: 40, alignContent: "center", justifyContent: "center"}}
                            onPress={() => this.toggleView("galleryView")}>
                            <Text style={{color: "#FFFFFF", alignSelf: "center"}}>GALLERY</Text>
                        </TouchableOpacity>
                    </View>

        loadView = <ScrollView 
                        snapToInterval={600} >
                        <View style={{paddingBottom: 120}}>
                            <View style={{height: 600}}>
                                <View style={{height: 400, width: width, alignItems: "center", justifyContent: "center"}}>
                                    <Image source={{uri: dummyImageUrl}} style={{height: 400, width: "100%", resizeMode: "stretch"}} />
                                </View>
                                <View style={{height: 200, width: width}}>
                                    <ScrollView 
                                            horizontal={true}
                                            nestedScrollEnabled={true}>
                                        <View style={{flexDirection: "row"}}>
                                            <Image source={{uri: dummyImageUrl}} style={{height: 200, width: 142, resizeMode: "stretch"}} />
                                            <Image source={{uri: dummyImageUrl}} style={{height: 200, width: 142, resizeMode: "stretch"}} />
                                            <Image source={{uri: dummyImageUrl}} style={{height: 200, width: 142, resizeMode: "stretch"}} />
                                            <Image source={{uri: dummyImageUrl}} style={{height: 200, width: 142, resizeMode: "stretch"}} />
                                        </View>
                                    </ScrollView>
                                </View>
                            </View>

                            <View style={{height: 600}}>
                                <View style={{height: 400, width: width, alignItems: "center", justifyContent: "center"}}>
                                    <Image source={{uri: dummyImageUrl}} style={{height: 400, width: "100%", resizeMode: "stretch"}} />
                                </View>
                                <View style={{height: 200, width: width}}>
                                    <ScrollView 
                                            horizontal={true}
                                            nestedScrollEnabled={true}>
                                        <View style={{flexDirection: "row"}}>
                                            <Image source={{uri: dummyImageUrl}} style={{height: 200, width: 142, resizeMode: "stretch"}} />
                                            <Image source={{uri: dummyImageUrl}} style={{height: 200, width: 142, resizeMode: "stretch"}} />
                                            <Image source={{uri: dummyImageUrl}} style={{height: 200, width: 142, resizeMode: "stretch"}} />
                                            <Image source={{uri: dummyImageUrl}} style={{height: 200, width: 142, resizeMode: "stretch"}} />
                                        </View>
                                    </ScrollView>
                                </View>
                            </View>
                        </View>  
                    </ScrollView>     
    }else{
        btnGallery = <View style={{flex: 1, backgroundColor: "#F6F6F6", height: 40}}>
                        <TouchableOpacity style={{backgroundColor: "#F6F6F6", borderRadius: 3, 
                        height: 40, alignContent: "center", justifyContent: "center"}}
                        onPress={() => this.toggleView("galleryView")}>
                        <Text style={{color: "#6B6B6B", alignSelf: "center"}}>GALLERY</Text>
                    </TouchableOpacity>
                    </View>
    }

    let search = null
    if(this.state.isListViewActive === true){
        search = <View style={{flexDirection: "row", marginTop: 15, marginBottom: 20, paddingLeft: 29, paddingRight: 29, alignItems: "center"}}>
                    <Text style={{fontSize: 16, color: "#6B6B6B"}}>SEARCH</Text>
                    <Image source={btn_grey_search} style={{height: 14, width: 14, marginLeft: 10}} />
                </View>
    }

  return (
    
    <SafeAreaView style={{flex: 1}}> 
    <View>
        <View style={{height: 125, borderBottomWidth: 3, borderBottomColor: "#F6F6F6"}}>

            <View style={{flexDirection: "row", justifyContent: "space-between", marginLeft: 29, marginRight: 29, marginTop: 18}}>
                <View>
                    <Text style={{fontSize: 15}}>H O M E</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => this.openModal()}>
                        <Image source={btn_menu} style={{height: 15, width: 20}} />
                    </TouchableOpacity>
                </View>  
            </View>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 29, marginRight: 29, marginTop: 25}}>
            {btnList}
            {btnMap}
            {btnGallery}
            </View>
        </View>

        {search}

        {loadView}
       
    </View>
    { mods } 
    </SafeAreaView>
  );
}
}

export default MainPage;

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
