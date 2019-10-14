import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar,
        Image, ScrollView, Dimensions, StyleSheet, Animated, Modal, Platform, Picker, TextInput} from "react-native";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import Slider from "react-native-slider";

// import { goToScreen } from "../../utility/goToScreen"; 

const iconCamera = require("../../../assets/images/icon_camera.png")  
const { width, height } = Dimensions.get("window");
  
const CARD_HEIGHT = height / 2;
const CARD_WIDTH = width - 20;


const btn_menu = require("../../../assets/images/btn_menu.png");
const btn_menu_white = require("../../../assets/images/btn_menu_white.png");
const btn_grey_back_arrow = require("../../../assets/images/btn_grey_back_arrow.png");

const ico_listing_owner = require("../../../assets/images/ico_listing_owner.png");
const ico_listing_builder = require("../../../assets/images/ico_listing_builder.png");
const ico_listing_partner = require("../../../assets/images/ico_listing_partner.png");
const ico_listing_commercial = require("../../../assets/images/ico_listing_commercial.png");
const ico_listing_residential = require("../../../assets/images/ico_listing_residential.png");
const ico_listing_rent = require("../../../assets/images/ico_listing_rent.png");
const ico_listing_sell = require("../../../assets/images/ico_listing_sell.png");

const ico_gym = require("../../../assets/images/icon_gym.png");
const ico_garden = require("../../../assets/images/icon_garden.png");
const ico_pool = require("../../../assets/images/icon_swimming_pool.png");
const ico_clubhouse = require("../../../assets/images/icon_clubhouse.png");
const ico_football = require("../../../assets/images/icon_football.png");
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 

class Listing extends Component{
constructor(props){
  super(props)
  this.state = {
      modalY: new Animated.Value(height),
      stage: 1,
      userType: "",
      propertyType: "",
      sellRent: "",
      coveredAreaValue: 700,
      plotAreaValue: 701,
      plotLengthValue: 702,
      plotBreadthValue: 703,
      carpetAreaValue: 704,
      expectedPriceValue: 705,
      bookingAmountValue: 706,
      maintenanceAmountValue: 707,
      roomsValue: 1,
      setSelectedInputValue: "",
      isCoveredAreaVisible: false,
      isPlotAreaVisible: false,
      isPlotLengthVisible: false,
      isPlotBreadthVisible: false,
      isCarpetAreaVisible: false,
      isRoomsVisible: false, 
      isExpectedPrice: false,
      isBookingAmount: false,
      isMaintenanceAmount: false, 
      maintenancePeriod: "", 
      gym: false,
      garden: false,
      pool: false,
      clubhouse: false,
      footballCourt: false,
      nearBySchool: false,
      nearByHospital: false,
      nearByRailwayStation: false,
      nearByBusStop: false,
      nearByGarden: false, 
  }
}

componentWillMount() {
  
}

componentDidMount() {
    
}

onBackPress = () => {
    if(this.state.stage === 4){
        this.setState({
            stage: 3
        })
    }else if(this.state.stage === 3){
        this.setState({
            stage: 2
        })
    }else if(this.state.stage === 2){
        this.setState({
            stage: 1
        })
    }else if(this.state.stage === 1){
        this.props.navigation.navigate('MainPage');
    }else{
        this.props.navigation.navigate('MainPage');
    }
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


selectListingFor = (types, listingFor) => {

    if(types === "userType"){
        this.setState({
            userType: listingFor
        })
    }else if(types === "propertyType"){
        this.setState({
            propertyType: listingFor
        })
    }else if(types === "sellRent"){
        this.setState({
            sellRent: listingFor,
            stage: 2
        })
    }else if(types === "maintenancePeriod"){
        this.setState({
            maintenancePeriod: listingFor,
        })
    }else{
        alert("Action Not Found.")
    }
} 

selectAmenities = (amenities) => {
    if(this.state[amenities] === false){
        this.setState({
            [amenities] : true
        })
    }else {
        this.setState({
            [amenities] : false
        })
    }

}

setSelectedInput = (selectedInput) => {
    this.setState({
        setSelectedInputValue: selectedInput
    })


    if(selectedInput === "coveredArea"){
        if(this.state.isCoveredAreaVisible === true){
            this.setState({
                isCoveredAreaVisible: false
            })
        }else {
            this.setState({
                isCoveredAreaVisible: true,
                isPlotAreaVisible: false,
                isPlotLengthVisible: false,
                isPlotBreadthVisible: false,
                isCarpetAreaVisible: false,
                isRoomsVisible: false,
                isExpectedPrice: false,
                isBookingAmount: false,
                isMaintenanceAmount: false
            })
        }
    }else if(selectedInput === "plotArea"){
        if(this.state.isPlotAreaVisible === true){
            this.setState({
                isPlotAreaVisible: false
            })
        }else {
            this.setState({
                isPlotAreaVisible: true,
                isCoveredAreaVisible: false,
                isPlotLengthVisible: false,
                isPlotBreadthVisible: false,
                isCarpetAreaVisible: false,
                isRoomsVisible: false,
                isExpectedPrice: false,
                isBookingAmount: false,
                isMaintenanceAmount: false
            })
        }
    }else if(selectedInput === "plotLength"){
        if(this.state.isPlotLengthVisible === true){
            this.setState({
                isPlotLengthVisible: false
            })
        }else {
            this.setState({
                isPlotLengthVisible: true,
                isCoveredAreaVisible: false,
                isPlotAreaVisible: false,
                isPlotBreadthVisible: false,
                isCarpetAreaVisible: false,
                isRoomsVisible: false,
                isExpectedPrice: false,
                isBookingAmount: false,
                isMaintenanceAmount: false
            })
        }
    }else if(selectedInput === "plotBreadth"){
        if(this.state.isPlotBreadthVisible === true){
            this.setState({
                isPlotBreadthVisible: false
            })
        }else {
            this.setState({
                isPlotBreadthVisible: true,
                isCoveredAreaVisible: false,
                isPlotAreaVisible: false,
                isPlotLengthVisible: false,
                isCarpetAreaVisible: false,
                isRoomsVisible: false,
                isExpectedPrice: false,
                isBookingAmount: false,
                isMaintenanceAmount: false
            })
        }
    }else if(selectedInput === "carpetArea"){
        if(this.state.isCarpetAreaVisible === true){
            this.setState({
                isCarpetAreaVisible: false
            })
        }else {
            this.setState({
                isCarpetAreaVisible: true,
                isCoveredAreaVisible: false,
                isPlotAreaVisible: false,
                isPlotLengthVisible: false,
                isPlotBreadthVisible: false,
                isRoomsVisible: false,
                isExpectedPrice: false,
                isBookingAmount: false,
                isMaintenanceAmount: false
            })
        }
    }else if(selectedInput === "rooms"){
        if(this.state.isRoomsVisible === true){
            this.setState({
                isRoomsVisible: false
            })
        }else {
            this.setState({
                isRoomsVisible: true,
                isCoveredAreaVisible: false,
                isPlotAreaVisible: false,
                isPlotLengthVisible: false,
                isPlotBreadthVisible: false,
                isCarpetAreaVisible: false,
                isBookingAmount: false,
                isMaintenanceAmount: false,
                isExpectedPrice: false,
                isBookingAmount: false,
                isMaintenanceAmount: false
            })
        }
    }else if(selectedInput === "expectedPrice"){
        if(this.state.isExpectedPrice === true){
            this.setState({
                isExpectedPrice: false
            })
        }else {
            this.setState({
                isExpectedPrice: true,
                isRoomsVisible: false,
                isCoveredAreaVisible: false,
                isPlotAreaVisible: false,
                isPlotLengthVisible: false,
                isPlotBreadthVisible: false,
                isCarpetAreaVisible: false,
                isBookingAmount: false,
                isMaintenanceAmount: false
            })
        }
    }else if(selectedInput === "bookingAmount"){
        if(this.state.isBookingAmount === true){
            this.setState({
                isBookingAmount: false,
                
            })
        }else {
            this.setState({
                isBookingAmount: true,
                isExpectedPrice: false,
                isRoomsVisible: false,
                isCoveredAreaVisible: false,
                isPlotAreaVisible: false,
                isPlotLengthVisible: false,
                isPlotBreadthVisible: false,
                isCarpetAreaVisible: false,
                isMaintenanceAmount: false
            })
        }
    }else if(selectedInput === "maintenanceAmount"){
        if(this.state.isMaintenanceAmount === true){
            this.setState({
                isMaintenanceAmount: false
            })
        }else {
            this.setState({
                isMaintenanceAmount: true,
                isBookingAmount: false,
                isExpectedPrice: false,
                isRoomsVisible: false,
                isCoveredAreaVisible: false,
                isPlotAreaVisible: false,
                isPlotLengthVisible: false,
                isPlotBreadthVisible: false,
                isCarpetAreaVisible: false,
            })
        }
    }
}


render() {
    let propertyType = null;
    let sellRent = null;
    let loadUi = null;
    let loadHeading = null;
    console.warn('listing')

    let coveredArea = null;
    let plotArea = null;
    let plotLength = null;
    let plotBreadth = null;
    let carpetArea = null;
    let rooms = null;
    let expectedPrice = null;
    let bookingAmount = null;
    let maintenanceAmount = null;

        if(this.state.isCoveredAreaVisible === true){
            coveredArea = <View style={{height: 50, backgroundColor: "#FFFFFF", paddingHorizontal: 20, justifyContent: "center"}}>
                            <Slider
                                minimumValue={1}
                                maximumValue={5000}
                                thumbTintColor={"#FFFFFF"}
                                thumbStyle={{ width: 27, height: 27, borderRadius: 14, borderColor: "#FF9F43",
                                        borderWidth: 1.5}}
                                trackStyle={{height: 10, borderRadius: 26, backgroundColor: "#F1F2F5"}} 
                                minimumTrackTintColor={"#FDB066"}                  
                                value={this.state.coveredAreaValue}
                                onValueChange={value => this.setState({ coveredAreaValue: parseInt(value) })}
                                />
                        </View>
        }else {
            coveredArea = null
        }

        if(this.state.isPlotAreaVisible === true){
            plotArea = <View style={{height: 50, backgroundColor: "#FFFFFF", paddingHorizontal: 20, justifyContent: "center"}}>
                            <Slider
                                minimumValue={1}
                                maximumValue={5000}
                                thumbTintColor={"#FFFFFF"}
                                thumbStyle={{ width: 27, height: 27, borderRadius: 14, borderColor: "#FF9F43",
                                        borderWidth: 1.5}}
                                trackStyle={{height: 10, borderRadius: 26, backgroundColor: "#F1F2F5"}} 
                                minimumTrackTintColor={"#FDB066"}                  
                                value={this.state.plotAreaValue}
                                onValueChange={value => this.setState({ plotAreaValue: parseInt(value) })}
                                />
                        </View>
        }else {
            plotArea = null
        }
    

    
        if(this.state.isPlotLengthVisible === true){
            plotLength = <View style={{height: 50, backgroundColor: "#FFFFFF", paddingHorizontal: 20, justifyContent: "center"}}>
                            <Slider
                                minimumValue={1}
                                maximumValue={5000}
                                thumbTintColor={"#FFFFFF"}
                                thumbStyle={{ width: 27, height: 27, borderRadius: 14, borderColor: "#FF9F43",
                                        borderWidth: 1.5}}
                                trackStyle={{height: 10, borderRadius: 26, backgroundColor: "#F1F2F5"}} 
                                minimumTrackTintColor={"#FDB066"}                  
                                value={this.state.plotLengthValue}
                                onValueChange={value => this.setState({ plotLengthValue: parseInt(value) })}
                                />
                        </View>
        }else {
            plotLength = null
        }
    

        if(this.state.isPlotBreadthVisible === true){
            plotBreadth = <View style={{height: 50, backgroundColor: "#FFFFFF", paddingHorizontal: 20, justifyContent: "center"}}>
                            <Slider
                                minimumValue={1}
                                maximumValue={5000}
                                thumbTintColor={"#FFFFFF"}
                                thumbStyle={{ width: 27, height: 27, borderRadius: 14, borderColor: "#FF9F43",
                                        borderWidth: 1.5}}
                                trackStyle={{height: 10, borderRadius: 26, backgroundColor: "#F1F2F5"}} 
                                minimumTrackTintColor={"#FDB066"}                  
                                value={this.state.plotBreadthValue}
                                onValueChange={value => this.setState({ plotBreadthValue: parseInt(value) })}
                                />
                        </View>
        }else {
            plotBreadth = null
        }


    
        if(this.state.isCarpetAreaVisible === true){
            carpetArea = <View style={{height: 50, backgroundColor: "#FFFFFF", paddingHorizontal: 20, justifyContent: "center"}}>
                            <Slider
                                minimumValue={1}
                                maximumValue={5000}
                                thumbTintColor={"#FFFFFF"}
                                thumbStyle={{ width: 27, height: 27, borderRadius: 14, borderColor: "#FF9F43",
                                        borderWidth: 1.5}}
                                trackStyle={{height: 10, borderRadius: 26, backgroundColor: "#F1F2F5"}} 
                                minimumTrackTintColor={"#FDB066"}                  
                                value={this.state.carpetAreaValue}
                                onValueChange={value => this.setState({ carpetAreaValue: parseInt(value) })}
                                />
                        </View>
        }else {
            carpetArea = null
        }
    
        if(this.state.isRoomsVisible === true){
            rooms = <View style={{height: 50, backgroundColor: "#FFFFFF", paddingHorizontal: 20, justifyContent: "center"}}>
                            <Slider
                                minimumValue={1}
                                maximumValue={10}
                                thumbTintColor={"#FFFFFF"}
                                thumbStyle={{ width: 27, height: 27, borderRadius: 14, borderColor: "#FF9F43",
                                        borderWidth: 1.5}}
                                trackStyle={{height: 10, borderRadius: 26, backgroundColor: "#F1F2F5"}} 
                                minimumTrackTintColor={"#FDB066"}                  
                                value={this.state.roomsValue}
                                onValueChange={value => this.setState({ roomsValue: parseInt(value) })}
                                />
                        </View>
        }else {
            rooms = null
        }

        if(this.state.isExpectedPrice === true){
            expectedPrice = <View style={{height: 50, backgroundColor: "#FFFFFF", paddingHorizontal: 20, justifyContent: "center"}}>
                            <Slider
                                minimumValue={1}
                                maximumValue={5000}
                                thumbTintColor={"#FFFFFF"}
                                thumbStyle={{ width: 27, height: 27, borderRadius: 14, borderColor: "#FF9F43",
                                        borderWidth: 1.5}}
                                trackStyle={{height: 10, borderRadius: 26, backgroundColor: "#F1F2F5"}} 
                                minimumTrackTintColor={"#FDB066"}                  
                                value={this.state.expectedPriceValue}
                                onValueChange={value => this.setState({ expectedPriceValue: parseInt(value) })}
                                />
                        </View>
        }else {
            expectedPrice = null
        }

        if(this.state.isBookingAmount === true){
            bookingAmount = <View style={{height: 50, backgroundColor: "#FFFFFF", paddingHorizontal: 20, justifyContent: "center"}}>
                            <Slider
                                minimumValue={1}
                                maximumValue={5000}
                                thumbTintColor={"#FFFFFF"}
                                thumbStyle={{ width: 27, height: 27, borderRadius: 14, borderColor: "#FF9F43",
                                        borderWidth: 1.5}}
                                trackStyle={{height: 10, borderRadius: 26, backgroundColor: "#F1F2F5"}} 
                                minimumTrackTintColor={"#FDB066"}                  
                                value={this.state.bookingAmountValue}
                                onValueChange={value => this.setState({ bookingAmountValue: parseInt(value) })}
                                />
                        </View>
        }else {
            bookingAmount = null
        }

        if(this.state.isMaintenanceAmount === true){
            maintenanceAmount = <View style={{height: 50, backgroundColor: "#FFFFFF", paddingHorizontal: 20, justifyContent: "center"}}>
                            <Slider
                                minimumValue={1}
                                maximumValue={5000}
                                thumbTintColor={"#FFFFFF"}
                                thumbStyle={{ width: 27, height: 27, borderRadius: 14, borderColor: "#FF9F43",
                                        borderWidth: 1.5}}
                                trackStyle={{height: 10, borderRadius: 26, backgroundColor: "#F1F2F5"}} 
                                minimumTrackTintColor={"#FDB066"}                  
                                value={this.state.maintenanceAmountValue}
                                onValueChange={value => this.setState({ maintenanceAmountValue: parseInt(value) })}
                                />
                        </View>
        }else {
            maintenanceAmount = null
        }
    

    if(this.state.userType != ""){
        propertyType =  <View style={{height: 220, borderBottomWidth: 2, borderColor: "#D6D6D6", backgroundColor: "#F4F4F4"}}>
                            <View style={{flex: 1, flexDirection: "row", paddingHorizontal: 45, paddingTop: 20}}>
                                <View style={{flex:1, alignItems: "flex-start", justifyContent: "center"}}>
                                    <Text style={{fontSize: 15, color: "#535353"}}>Property Type</Text>
                                </View>
                            </View>
                            <View style={{ flex: 5, flexDirection: "row", paddingHorizontal: 30}}>
                                <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
                                    <TouchableOpacity style={{width: 140, height: 95, 
                                    backgroundColor: this.state.propertyType === "Commercial" ? "rgba(52, 52, 52, 0.8)" : "#FFFFFF",
                                    borderRadius: 5, alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "#F2F2F2"}}
                                                    onPress={() => this.selectListingFor("propertyType", "Commercial")}>
                                        <Image source={ico_listing_commercial} style={{height: 34, width: 51}} />
                                        <Text style={{marginTop: 15, color: this.state.propertyType === "Commercial" ? "#FFFFFF" : "#535353", fontSize: 13}}>Commercial</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
                                    <TouchableOpacity style={{width: 140, height: 95, 
                                    backgroundColor: this.state.propertyType === "Residential" ? "rgba(52, 52, 52, 0.8)" : "#FFFFFF", 
                                    borderRadius: 5, alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "#F2F2F2"}}
                                                    onPress={() => this.selectListingFor("propertyType", "Residential")}>
                                        <Image source={ico_listing_residential} style={{height: 37, width: 44}} />
                                        <Text style={{marginTop: 15, color: this.state.propertyType === "Residential" ? "#FFFFFF" : "#535353", fontSize: 13}}>Residential</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
    }

    if(this.state.propertyType != ""){
        sellRent = <View style={{height: 220, borderBottomWidth: 2, borderColor: "#D6D6D6", backgroundColor: "#F9F9F9"}}>
                    <View style={{flex: 1, flexDirection: "row", paddingHorizontal: 45}}>
                        <View style={{flex:1, alignItems: "flex-start", justifyContent: "center"}}>
                            <Text style={{fontSize: 15, color: "#535353"}}>Sell / Rent</Text>
                        </View>
                    </View>
                    <View style={{ flex: 5, flexDirection: "row", paddingHorizontal: 30}}>
                        <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
                            <TouchableOpacity style={{width: 140, height: 95, 
                            backgroundColor: this.state.sellRent === "Rent" ? "rgba(52, 52, 52, 0.8)" : "#FFFFFF", 
                            borderRadius: 5, alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "#F2F2F2"}}
                                            onPress={() => this.selectListingFor("sellRent", "Rent")}>
                                <Image source={ico_listing_rent} style={{height: 49, width: 43}} />
                                <Text style={{marginTop: 15, color: this.state.sellRent === "Rent" ? "#FFFFFF" : "#535353", fontSize: 13}}>Rent</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
                            <TouchableOpacity style={{width: 140, height: 95, 
                            backgroundColor: this.state.sellRent === "Sell" ? "rgba(52, 52, 52, 0.8)" : "#FFFFFF", 
                            borderRadius: 5, alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "#F2F2F2"}}
                                            onPress={() => this.selectListingFor("sellRent", "Sell")}>
                                <Image source={ico_listing_sell} style={{height: 35, width: 36}} />
                                <Text style={{marginTop: 15, color: this.state.sellRent === "Sell" ? "#FFFFFF" : "#535353", fontSize: 13}}>Sell</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
    }

    if(this.state.stage === 1){
        loadHeading = <Text style={{fontSize: 15, color: "#535353", fontWeight: "bold"}}>User Type</Text> 
        loadUi = <View style={{flex: 1, backgroundColor: "#F1F2F5", height: height}}>
                    <View style={{height: 180, borderBottomWidth: 2, borderColor: "#D6D6D6", backgroundColor: "#F1F2F5"}}>
                        
                        <View style={{ flex: 5, flexDirection: "row", paddingHorizontal: 30}}>
                            <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
                                <TouchableOpacity style={{width: 89, height: 95,
                                backgroundColor: this.state.userType === "Owner" ? "rgba(52, 52, 52, 0.8)" : "#FFFFFF", 
                                borderRadius: 5, alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "#F2F2F2"}}
                                                onPress={() => this.selectListingFor("userType", "Owner")}>
                                    <Image source={ico_listing_owner} style={{height: 40, width: 40}} />
                                    <Text style={{marginTop: 15, color: this.state.userType === "Owner" ? "#FFFFFF" : "#535353", fontSize: 13}}>Owner</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
                                <TouchableOpacity style={{width: 89, height: 95, 
                                backgroundColor: this.state.userType === "Builder" ? "rgba(52, 52, 52, 0.8)" : "#FFFFFF", 
                                borderRadius: 5, alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "#F2F2F2"}}
                                                onPress={() => this.selectListingFor("userType", "Builder")}>
                                    <Image source={ico_listing_builder} style={{height: 39, width: 24}} />
                                    <Text style={{marginTop: 15, color: this.state.userType === "Builder" ? "#FFFFFF" : "#535353", fontSize: 13}}>Builder</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
                                <TouchableOpacity style={{width: 89, height: 95, 
                                backgroundColor: this.state.userType === "Partner" ? "rgba(52, 52, 52, 0.8)" : "#FFFFFF", 
                                borderRadius: 5, alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "#F2F2F2"}}
                                                onPress={() => this.selectListingFor("userType", "Partner")}>
                                    <Image source={ico_listing_partner} style={{height: 32, width: 54}} />
                                    <Text style={{marginTop: 15, color: this.state.userType === "Partner" ? "#FFFFFF" : "#535353", fontSize: 13}}>Partner</Text>
                                </TouchableOpacity>
                            </View>
                        </View>      
                    </View>
                    
                    {propertyType}
                    {sellRent}
                </View>

    }else if(this.state.stage === 2){
        loadHeading = <Text style={{fontSize: 15, color: "#535353", fontWeight: "bold"}}>Property Details</Text> 
        loadUi = <View style={{flex: 1, backgroundColor: "#F1F2F5", height: height}}>
                    <View style={{flex: 1, padding: 30}}>
                        <View>
                            <TouchableOpacity onPress={() => this.setSelectedInput("coveredArea")}>
                                <View style={{height: 40, backgroundColor: "#FFFFFF", borderRadius: 3, flexDirection: "row", 
                                                alignItems: "center", paddingHorizontal: 10}}>
                                    <View style={{flex: 1, alignItems: "flex-start"}}>
                                        <Text>+ Covered Area</Text>
                                    </View>
                                
                                    <View style={{flex: 1, alignItems: "flex-end"}}>
                                        <Text>{this.state.coveredAreaValue}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {coveredArea}
                        </View>

                        <View style={{marginTop: 20}}>
                            <TouchableOpacity onPress={() => this.setSelectedInput("plotArea")}>
                                <View style={{height: 40, backgroundColor: "#FFFFFF", borderRadius: 3, flexDirection: "row", 
                                                alignItems: "center", paddingHorizontal: 10}}>
                                    <View style={{flex: 1, alignItems: "flex-start"}}>
                                        <Text>+ Plot Area</Text>
                                    </View>
                                
                                    <View style={{flex: 1, alignItems: "flex-end"}}>
                                        <Text>{this.state.plotAreaValue}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {plotArea}
                        </View>

                        <View style={{marginTop: 20}}>
                            <TouchableOpacity onPress={() => this.setSelectedInput("plotLength")}>
                                <View style={{height: 40, backgroundColor: "#FFFFFF", borderRadius: 3, flexDirection: "row", 
                                                alignItems: "center", paddingHorizontal: 10}}>
                                    <View style={{flex: 1, alignItems: "flex-start"}}>
                                        <Text>+ Plot Length</Text>
                                    </View>
                                
                                    <View style={{flex: 1, alignItems: "flex-end"}}>
                                        <Text>{this.state.plotLengthValue}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {plotLength}
                        </View>

                        <View style={{marginTop: 20}}>
                            <TouchableOpacity onPress={() => this.setSelectedInput("plotBreadth")}>
                                <View style={{height: 40, backgroundColor: "#FFFFFF", borderRadius: 3, flexDirection: "row", 
                                                alignItems: "center", paddingHorizontal: 10}}>
                                    <View style={{flex: 1, alignItems: "flex-start"}}>
                                        <Text>+ Plot Breadth</Text>
                                    </View>
                                
                                    <View style={{flex: 1, alignItems: "flex-end"}}>
                                        <Text>{this.state.plotBreadthValue}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {plotBreadth}
                        </View>

                        <View style={{marginTop: 20}}>
                            <TouchableOpacity onPress={() => this.setSelectedInput("carpetArea")}>
                                <View style={{height: 40, backgroundColor: "#FFFFFF", borderRadius: 3, flexDirection: "row", 
                                                alignItems: "center", paddingHorizontal: 10}}>
                                    <View style={{flex: 1, alignItems: "flex-start"}}>
                                        <Text>+ Carpet Area</Text>
                                    </View>
                                
                                    <View style={{flex: 1, alignItems: "flex-end"}}>
                                        <Text>{this.state.carpetAreaValue}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {carpetArea}
                        </View>

                        <View style={{marginTop: 20}}>
                            <TouchableOpacity onPress={() => this.setSelectedInput("rooms")}>
                                <View style={{height: 40, backgroundColor: "#FFFFFF", borderRadius: 3, flexDirection: "row", 
                                                alignItems: "center", paddingHorizontal: 10}}>
                                    <View style={{flex: 1, alignItems: "flex-start"}}>
                                        <Text>+ Rooms</Text>
                                    </View>
                                
                                    <View style={{flex: 1, alignItems: "flex-end"}}>
                                        <Text>{this.state.roomsValue}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {rooms}
                        </View>

                        <Text style={{marginTop: 30, marginBottom: 20, color: "#535353", fontSize: 15}}>Near By</Text> 
                        <View style={{flexDirection: "row", height: 40}}>
                            <View style={{flex:1}}>
                                <TouchableOpacity style={{flex:1, height: 40,
                                backgroundColor: this.state.nearBySchool === true ? "rgba(52, 52, 52, 0.8)" : "#FFFFFF", 
                                alignItems: "center", justifyContent: "center",}}
                                                onPress={() => this.selectAmenities("nearBySchool")}>
                                    <Text style={{color: this.state.nearBySchool === true ? "#FFFFFF" : "#535353", fontSize: 13}}>School</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1}}>
                                <TouchableOpacity style={{flex:1, height: 40, 
                                backgroundColor: this.state.nearByHospital === true ? "rgba(52, 52, 52, 0.8)" : "#FFFFFF", 
                                 alignItems: "center", justifyContent: "center"}}
                                                onPress={() => this.selectAmenities("nearByHospital")}>
                                    <Text style={{color: this.state.nearByHospital === true ? "#FFFFFF" : "#535353", fontSize: 13}}>Hospital</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1}}>
                                <TouchableOpacity style={{flex: 1, height: 40,
                                backgroundColor: this.state.nearByGarden === true ? "rgba(52, 52, 52, 0.8)" : "#FFFFFF", 
                                alignItems: "center", justifyContent: "center"}}
                                                onPress={() => this.selectAmenities("nearByGarden")}>
                                    <Text style={{color: this.state.nearByGarden === true ? "#FFFFFF" : "#535353", fontSize: 13}}>Garden</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1}}>
                                <TouchableOpacity style={{flex:1, height: 40,
                                backgroundColor: this.state.nearByBusStop === true ? "rgba(52, 52, 52, 0.8)" : "#FFFFFF", 
                                alignItems: "center", justifyContent: "center",}}
                                                onPress={() => this.selectAmenities("nearByBusStop")}>
                                    <Text style={{color: this.state.nearByBusStop === true ? "#FFFFFF" : "#535353", fontSize: 13}}>Bus Stop</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1}}>
                                <TouchableOpacity style={{flex:1, height: 40, 
                                backgroundColor: this.state.nearByRailwayStation === true ? "rgba(52, 52, 52, 0.8)" : "#FFFFFF", 
                                 alignItems: "center", justifyContent: "center"}}
                                                onPress={() => this.selectAmenities("nearByRailwayStation")}>
                                    <Text style={{color: this.state.nearByRailwayStation === true ? "#FFFFFF" : "#535353", fontSize: 13}}>Railway St.</Text>
                                </TouchableOpacity>
                            </View>

                        </View> 
                        
                        <TouchableOpacity style={{backgroundColor: "#535353", height: 50, marginTop: 30,
                            width: "47%", alignItems: "center", justifyContent: "center"}}
                            onPress={() => {this.setState({ stage: 3})}}>
                            <Text style={{color: "#FFFFFF", fontSize: 18}}>NEXT</Text>
                        </TouchableOpacity>
                        
                    </View>
                    
                </View>

    }else if(this.state.stage === 3){
        loadHeading = <Text style={{fontSize: 15, color: "#535353", fontWeight: "bold"}}>Price details & location</Text>
        loadUi = <View style={{flex: 1, backgroundColor: "#F1F2F5", height: height}}>
                    <View style={{flex: 1, padding: 30}}>
                        <View>
                            <TouchableOpacity onPress={() => this.setSelectedInput("expectedPrice")}>
                                <View style={{height: 40, backgroundColor: "#FFFFFF", borderRadius: 3, flexDirection: "row", 
                                                alignItems: "center", paddingHorizontal: 10}}>
                                    <View style={{flex: 1, alignItems: "flex-start"}}>
                                        <Text>+ Expected Price</Text>
                                    </View>
                                
                                    <View style={{flex: 1, alignItems: "flex-end"}}>
                                        <Text>{this.state.expectedPriceValue}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {expectedPrice}
                        </View>

                        <View style={{marginTop: 20}}>
                            <TouchableOpacity onPress={() => this.setSelectedInput("bookingAmount")}>
                                <View style={{height: 40, backgroundColor: "#FFFFFF", borderRadius: 3, flexDirection: "row", 
                                                alignItems: "center", paddingHorizontal: 10}}>
                                    <View style={{flex: 1, alignItems: "flex-start"}}>
                                        <Text>+ Booking amount</Text>
                                    </View>
                                
                                    <View style={{flex: 1, alignItems: "flex-end"}}>
                                        <Text>{this.state.bookingAmountValue}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {bookingAmount}
                        </View>

                        <View style={{marginTop: 20}}>
                            <TouchableOpacity onPress={() => this.setSelectedInput("maintenanceAmount")}>
                                <View style={{height: 40, backgroundColor: "#FFFFFF", borderRadius: 3, flexDirection: "row", 
                                                alignItems: "center", paddingHorizontal: 10}}>
                                    <View style={{flex: 1, alignItems: "flex-start"}}>
                                        <Text>+ Maintenance amount</Text>
                                    </View>
                                
                                    <View style={{flex: 1, alignItems: "flex-end"}}>
                                        <Text>{this.state.maintenanceAmountValue}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {maintenanceAmount}
                        </View>

                        <Text style={{marginTop: 30, marginBottom: 20}}>Period of maintenance</Text>

                        <View style={{flexDirection: "row", height: 40}}>
                            <View style={{flex:1}}>
                                <TouchableOpacity style={{flex:1, height: 40,
                                backgroundColor: this.state.maintenancePeriod === "week" ? "rgba(52, 52, 52, 0.8)" : "#FFFFFF", 
                                alignItems: "center", justifyContent: "center",}}
                                                onPress={() => this.selectListingFor("maintenancePeriod", "week")}>
                                    <Text style={{color: this.state.maintenancePeriod === "week" ? "#FFFFFF" : "#535353", fontSize: 13}}>Weekly</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1}}>
                                <TouchableOpacity style={{flex:1, height: 40, 
                                backgroundColor: this.state.maintenancePeriod === "month" ? "rgba(52, 52, 52, 0.8)" : "#FFFFFF", 
                                 alignItems: "center", justifyContent: "center"}}
                                                onPress={() => this.selectListingFor("maintenancePeriod", "month")}>
                                    <Text style={{color: this.state.maintenancePeriod === "month" ? "#FFFFFF" : "#535353", fontSize: 13}}>Monthly</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1}}>
                                <TouchableOpacity style={{flex: 1, height: 40,
                                backgroundColor: this.state.maintenancePeriod === "year" ? "rgba(52, 52, 52, 0.8)" : "#FFFFFF", 
                                alignItems: "center", justifyContent: "center"}}
                                                onPress={() => this.selectListingFor("maintenancePeriod", "year")}>
                                    <Text style={{color: this.state.maintenancePeriod === "year" ? "#FFFFFF" : "#535353", fontSize: 13}}>Yearly</Text>
                                </TouchableOpacity>
                            </View>
                        </View> 

                        <Text style={{marginTop: 30, marginBottom: 20}}>Location</Text> 
                            <View style={{height: 100, borderWidth: 1}}>
                            <MapView
                                provider={ PROVIDER_GOOGLE }
                                style={{width: '100%', height: '100%',}}
                                initialRegion={{
                                latitude: 73.8567,
                                longitude: 18.5204,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                                }}
                            />
                        </View>   

                        <TouchableOpacity style={{backgroundColor: "#535353", height: 50, marginTop: 30,
                            width: "47%", alignItems: "center", justifyContent: "center"}}
                            onPress={() => {this.setState({ stage: 4})}}>
                            <Text style={{color: "#FFFFFF", fontSize: 18}}>NEXT</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>

    }else if(this.state.stage === 4){
        loadHeading = <Text style={{fontSize: 15, color: "#535353", fontWeight: "bold"}}>Other Details</Text>
        loadUi = <View style={{flex: 1, backgroundColor: "#F1F2F5", height: height}}>
                    <View style={{flex: 1, paddingHorizontal : 30}}>
                        <Text style={{marginTop: 30, marginBottom: 20, color: "#535353", fontSize: 15}}>Add Photos</Text> 
                        <View>
                            <TouchableOpacity onPress={() => {alert("add photos here")}}>
                                <View style={{alignItems: "center", justifyContent: "center", borderRadius: 5, height: 95, width: 85, backgroundColor: "#FFFFFF"}}>
                                    <Image source={iconCamera} style={{height: 34, width: 43}} />
                                    <Text style={{color: "#535353", fontSize: 12, marginTop: 10}}>Add Photo</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <Text style={{marginTop: 30, marginBottom: 20, color: "#535353", fontSize: 15}}>Amenities</Text> 
                        <View style={{height: 100, flexDirection: "row"}}>
                            <ScrollView horizontal={true}>
                                <View>
                                    <TouchableOpacity style={{height: 80, width: 80, alignItems: "center", justifyContent: "center"}} 
                                                        onPress={() => this.selectAmenities("gym")}>
                                        <View style={{height: 50, width: 50, borderRadius: 25, backgroundColor: this.state.gym === true ? "#D3DDC3" : "#FFFFFF", alignItems: "center", justifyContent: "center"}}>
                                            <Image source={ico_gym} style={{height: 8, width: 22}} />
                                        </View>
                                        <View style={{width: 80, alignItems: "center", justifyContent: "center", marginTop: 10}}>
                                            <Text style={{fontSize: 12, color: "#535353"}}>Gym</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View>
                                    <TouchableOpacity style={{height: 80, width: 80, alignItems: "center", justifyContent: "center"}} 
                                                            onPress={() => this.selectAmenities("garden")}>
                                        <View style={{height: 50, width: 50, borderRadius: 25, backgroundColor: this.state.garden === true ? "#D3DDC3" : "#FFFFFF", alignItems: "center", justifyContent: "center"}}>
                                            <Image source={ico_garden} style={{height: 16, width: 24}} />
                                        </View>
                                        <View style={{width: 80, alignItems: "center", justifyContent: "center", marginTop: 10}}>
                                            <Text style={{fontSize: 12, color: "#535353"}}>Garden</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View>
                                    <TouchableOpacity style={{height: 80, width: 80, alignItems: "center", justifyContent: "center"}} 
                                                            onPress={() => this.selectAmenities("pool")}>
                                        <View style={{height: 50, width: 50, borderRadius: 25, backgroundColor: this.state.pool === true ? "#D3DDC3" : "#FFFFFF", alignItems: "center", justifyContent: "center"}}>
                                            <Image source={ico_pool} style={{height: 17, width: 17}} />
                                        </View>
                                        <View style={{width: 80, alignItems: "center", justifyContent: "center", marginTop: 10}}>
                                            <Text style={{fontSize: 12, color: "#535353"}}>Pool</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View>
                                    <TouchableOpacity style={{height: 80, width: 80, alignItems: "center", justifyContent: "center"}} 
                                                            onPress={() => this.selectAmenities("clubhouse")}>
                                        <View style={{height: 50, width: 50, borderRadius: 25, backgroundColor: this.state.clubhouse === true ? "#D3DDC3" : "#FFFFFF", alignItems: "center", justifyContent: "center"}}>
                                            <Image source={ico_clubhouse} style={{height: 18, width: 18}} />
                                        </View>
                                        <View style={{width: 80, alignItems: "center", justifyContent: "center", marginTop: 10}}>
                                            <Text style={{fontSize: 12, color: "#535353"}}>Clubhouse</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View>
                                    <TouchableOpacity style={{height: 80, width: 80, alignItems: "center", justifyContent: "center"}} 
                                                            onPress={() => this.selectAmenities("footballCourt")}>
                                        <View style={{height: 50, width: 50, borderRadius: 25, backgroundColor: this.state.footballCourt === true ? "#D3DDC3" : "#FFFFFF", alignItems: "center", justifyContent: "center"}}>
                                            <Image source={ico_football} style={{height: 14, width: 14}} />
                                        </View>
                                        <View style={{width: 80, alignItems: "center", justifyContent: "center", marginTop: 10}}>
                                            <Text style={{fontSize: 12, color: "#535353"}}>Football court</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </ScrollView> 
                        </View>

                        
                        <Text style={{marginTop: 20, marginBottom: 20, color: "#535353", fontSize: 15}}>Other information</Text> 
                            <View style={{height: 100, backgroundColor: "#FFFFFF", borderRadius: 3}}>
                                <TextInput
                                    placeholder="Enter Here..."
                                    style={{margin:10}} 
                                    multiline={true}
                                />
                
                            </View>    

                        <TouchableOpacity style={{backgroundColor: "#535353", height: 50, marginTop: 30,
                            width: "47%", alignItems: "center", justifyContent: "center"}}
                            onPress={() => this.props.navigation.navigate('PropertyListingConfirmation')}>
                            <Text style={{color: "#FFFFFF", fontSize: 18}}>SUBMIT</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>

    }

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
        <SafeAreaView style={{flex: 1}}> 
            <View style={{height: 50, backgroundColor: "#2A2A2A", 
                    flexDirection: "row", paddingRight: 29, paddingLeft: 29}}>
                <View style={{justifyContent: "center", flex: 1}}>
                    <TouchableOpacity onPress={() => {this.onBackPress()}}>
                        <Image source={btn_grey_back_arrow} style={{height: 13, width: 7}} />
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent: "center", flex: 3}}>
                    <Text style={{color: "#FFFFFF", fontSize: 15}}>LISTING</Text>
                </View>
                <View style={{justifyContent: "center", flex: 2, alignItems: "flex-end"}}>
                    <TouchableOpacity onPress={() => this.openModal()}>
                        <Image source={btn_menu_white} style={{height: 15, width: 20}} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View style={{flex: 1, flexDirection: "row", paddingHorizontal: 30, paddingTop: 20, backgroundColor: "#F1F2F5",}}>
                    <View style={{flex:1,}}>
                        {loadHeading}
                    </View>
                    <View style={{flex:1, alignItems: "flex-end", justifyContent: "center"}}>
                        <Text style={{fontSize: 11, color: "#535353"}}>STAGE {this.state.stage}</Text>
                    </View>
                </View>
                {loadUi}
            </ScrollView>
            
        { mods } 
        </SafeAreaView>
  );
}
}

export default Listing;

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