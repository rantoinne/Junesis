import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar,
        Image, ScrollView, Dimensions, StyleSheet, Animated, Modal, Platform } from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel';


// import { goToScreen } from "../../utility/goToScreen"; 

const images = [
    {
        source: {
            uri: "https://livinator.com/wp-content/uploads/2016/03/Horizontal-Lines-aceinteriordesign.jpg"
        },
    },
  
    {
        source: {
            uri: "https://letstalkdirtsc.files.wordpress.com/2018/01/subdivision.jpg?w=720"
        },
    },
    {
        source: {
            uri: "https://www.designerfurniture.com/blog/wp-content/uploads/sites/35/2018/07/shutterstock_680998957.jpg"
        },
    }
]
  
const { width, height } = Dimensions.get("window");
  
const CARD_HEIGHT = height / 2;
const CARD_WIDTH = width - 20;



const btn_menu = require("../../../assets/images/btn_menu.png");
const btn_menu_white = require("../../../assets/images/btn_menu_white.png")
const btn_grey_back_arrow = require("../../../assets/images/btn_grey_back_arrow.png")


class BiddingAcceptDeclined extends Component{
constructor(props){
  super(props)
  this.state = {
    respondStatus: props.respondStatus 
  }
}

componentWillMount() {
  
}

componentDidMount() {
    
}

onBackPress = () => {
  this.props.navigation.navigate('Bidding');
} 

_renderItem ({item, index}) {
    return (
        <View style={{width: "100%", height: 298}}>
            <Image style={{height: 298, width: "100%"}} source={item.source} key={index} />
        </View>
    );
}

get pagination () {
    return (
        <Pagination
          containerStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)",
            paddingVertical: 5}}
          dotsLength={images.length}
          activeDotIndex={this.state.activeSlide}
          dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.92)'
          }}
          inactiveDotStyle={{
              //Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          carouselRef={this._slider1Ref}
          tappableDots={!!this._slider1Ref}
        />
    );
}  

onButtonAction = (resStatus) => {
    if(resStatus){
        alert("Accept here")
    }else{
        alert("Decline here")
    }
}


render() {
    let buttonView = null;
    let status = null

    if(this.state.respondStatus === "Approved" || this.state.respondStatus === "Declined"){
        buttonView = null;
        status = this.state.respondStatus
    }else{
        status = null
        buttonView = <View style={{flexDirection: "row", marginTop: 40, marginLeft: 29, marginRight: 29}}>
                        <TouchableOpacity style={{backgroundColor: "#535353", height: 50, 
                            width: "47%", alignItems: "center", justifyContent: "center"}}
                            onPress={() => this.onButtonAction(true)}>
                        <Text style={{color: "#FFFFFF", fontSize: 18}}>ACCEPT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{borderWidth: 1, borderColor: "#A3A3A3", height: 50,
                            width: "47%", alignItems: "center", justifyContent: "center", marginLeft: 20}}
                            onPress={() => this.onButtonAction(false)}>
                        <Text style={{color: "#A3A3A3", fontSize: 18}}>DECLINE</Text>
                        </TouchableOpacity>                                      
                    </View>
    }
                
  return (
        <SafeAreaView style={{flex: 1}}> 
            <View style={{height: 50, backgroundColor: "#2A2A2A", 
                    flexDirection: "row", paddingRight: 29, paddingLeft: 29}}>
                <View style={{justifyContent: "center", flex: 1}}>
                    <TouchableOpacity onPress={() => {this.onBackPress("Junesis.Bidding")}}>
                        <Image source={btn_grey_back_arrow} style={{height: 13, width: 7}} />
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent: "center", flex: 3}}>
                    <Text style={{color: "#FFFFFF", fontSize: 15}}>BIDDING</Text>
                </View>
                <View style={{justifyContent: "center", flex: 2, alignItems: "flex-end"}}>
                 
                </View>
            </View>

            <View style={{width: width, height: 298}}>
                    <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={images}
                    renderItem={this._renderItem}
                    sliderWidth={width}
                    itemWidth={width}
                    hasParallaxImages={true}
                    autoplay={true}
                    autoplayDelay={500}
                    autoplayInterval={3000}
                    onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                    />
                    { this.pagination }
                </View>
            
            <View style={{padding: 30}}>
                <View style={{flexDirection: "row"}}>
                    <Text style={{color: "#535353", fontSize: 16}}>Whitemills estate 25 char</Text>
                    <Text style={{color: "#6B6B6B", fontSize: 12, paddingTop: 3}}>   Rent</Text>
                </View>
                <Text style={{color: status === "Approved" ? "#00890A" : "#DD0000", fontSize: 12}}>{status}</Text>
                <Text style={{color: "#6B6B6B", fontSize: 13, marginTop: 10}}>1200 Sq.m | 21st Floor, Kalyani Nagar, Pune</Text>
                <Text style={{color: "#6B6B6B", fontSize: 15, marginTop: 7}}>₹ 45,000</Text>
                <Text style={{color: "#6B6B6B", fontSize: 13, marginTop: 20}}>Price Offered By Arnold</Text>
                <Text style={{color: "#6B6B6B", fontSize: 15, marginTop: 7}}>₹ 35,000</Text>
            </View>

            {buttonView}
        </SafeAreaView>
  );
}
}

export default BiddingAcceptDeclined;

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