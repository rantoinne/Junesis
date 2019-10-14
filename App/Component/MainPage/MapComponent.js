import React, {Component} from 'react';
import {
    View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Image
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 

const btn_menu = require("../../../assets/images/btn_menu.png");
const btn_grey_heart = require("../../../assets/images/btn_grey_heart.png");
const btn_grey_share = require("../../../assets/images/btn_grey_share.png");
const btn_green_star = require("../../../assets/images/btn_green_star.png");
const btn_grey_search = require("../../../assets/images/btn_grey_search.png");

const dummyImageUrl = "https://livinator.com/wp-content/uploads/2016/03/Horizontal-Lines-aceinteriordesign.jpg";

const {width, height} = Dimensions.get('window');
const array = [1, 2, 3, 4, 5, 6, 7];
class MoneySpent extends Component {

    showAllTransactions() {
        return array.map((arr, idx)=> {
            return (
                <View style= {{width, paddingVertical: 18, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', borderTopWidth: 1, borderColor: '#F1F2F5'}}>
                    <Text style= {{fontFamily: 'GothamMedium', fontSize: 14, color: '#A3A3A3',  marginLeft: 29}}>White-mills Estate</Text>
                    <Text style= {{fontFamily: 'GothamMedium', fontSize: 12, color: '#535353',  marginLeft: 29}}>$ 45,000</Text>
                </View>
            )
        })
    }

    render() {
        return(
            <View style={{height: (height / 100) * 90, marginBottom: 20}}>
                <MapView
                    provider={ PROVIDER_GOOGLE }
                    style={{width: '100%', height: '40%',}}
                    initialRegion={{
                    latitude: 73.8567,
                    longitude: 18.5204,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                />
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
        );
    }
}

export default MoneySpent;