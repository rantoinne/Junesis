import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, 
        Image, ScrollView, Dimensions, TextInput, Modal, StyleSheet } from "react-native";
// import { goToScreen } from "../../utility/goToScreen";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;


const btn_menu_white = require("../../../assets/images/btn_menu_white.png")
const btn_grey_back_arrow = require("../../../assets/images/btn_grey_back_arrow.png")
const ico_grey_close = require("../../../assets/images/ico_grey_close.png");
const ico_add = require("../../../assets/images/ico_add.png");
const ico_subtract = require("../../../assets/images/ico_subtract.png");

// const ASPECT_RATIO = width / height;
// const LATITUDE = 0;
// const LONGITUDE = 0;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const btn_grey_heart = require("../../../assets/images/btn_grey_heart.png");
const btn_grey_share = require("../../../assets/images/btn_grey_share.png");
const btn_green_star = require("../../../assets/images/btn_green_star.png");
const btn_black_phone = require("../../../assets/images/btn_black_phone.png");

const icon_school = require("../../../assets/images/icon_school.png");
const icon_park = require("../../../assets/images/icon_park.png");
const icon_swimming_pool = require("../../../assets/images/icon_swimming_pool.png");
const icon_hospital = require("../../../assets/images/icon_hospital.png");

const img = "https://livinator.com/wp-content/uploads/2016/03/Horizontal-Lines-aceinteriordesign.jpg";

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


class PropertyDetailView extends Component{
    constructor(props){
        super(props)
        this.state = { 
            activeSlide: 0,
            isMakeAnOfferModalVisible: false,
            rupees: 45000,
        }
      }


    onBackPress = () => {
        this.props.navigation.navigate('MainPage');
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
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              carouselRef={this._slider1Ref}
              tappableDots={!!this._slider1Ref}
            />
        );
    }

    subtractAdd = (method) => {
        if(method === "add"){
            let rs = parseInt(this.state.rupees) + 1
            this.setState({
                rupees: rs
            })
        }else if(method === "sub"){
            let rs = parseInt(this.state.rupees) - 1
            this.setState({
                rupees: rs
            })
        }else{
            alert("Something went wrong, method not found !")
        }

    }

    makeOfferModal = () => {
        if(this.state.isMakeAnOfferModalVisible === false){
            this.setState({
                isMakeAnOfferModalVisible: true
            })
        }else{
            this.setState({
                isMakeAnOfferModalVisible: false
            })
        }
    }

    setRupeesValue = (val) => {
        console.warn("val", val)
        let rs = parseInt(val)
        this.setState({ rupees: rs})
    }

    onSend = () =>{
        console.warn("val", this.state.rupees)
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
            <View style={{paddingBottom: 30}}>
                <View style={{width: WIDTH, height: 298}}>
                    <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={images}
                    renderItem={this._renderItem}
                    sliderWidth={WIDTH}
                    itemWidth={WIDTH}
                    hasParallaxImages={true}
                    autoplay={true}
                    autoplayDelay={500}
                    autoplayInterval={3000}
                    onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                    />
                    { this.pagination }
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

                <View style={{height: 46, flexDirection: "row", paddingLeft: 29, paddingRight: 29}}>
                    <View style={{width: "50%", justifyContent: "center"}}>
                        <Text style={{color: "#535353", fontSize: 15}}>₹45,000</Text>
                    </View>
                    <View style={{flexDirection: "row", width: "50%"}}>
                        <View style={{flex: 2, alignItems: "flex-end", justifyContent: "center"}}>
                            <TouchableOpacity onPress={() => this.makeOfferModal()}>
                                <Text style={{color: "#8B8B8B", fontSize: 12}}>MAKE AN OFFER</Text>
                            </TouchableOpacity> 
                        </View>
                        <View style={{flex: 1, alignItems: "flex-end", justifyContent: "center"}}>
                            <Image source={btn_black_phone} style={{height: 22, width: 22}} />
                        </View>
                    </View>
                </View>

                <View style={{height: 31, flexDirection: "row", paddingLeft: 17, paddingRight: 17, backgroundColor: "#F6F6F6"}}>
                    <View style={{flex: 1, flexDirection: "row" }}>
                        <View style={{flex: 1, alignItems: "center", justifyContent: "center" }}>
                            <View style={{backgroundColor: "#D6D6D6", width: 8, height: 8, borderRadius: 4}} />
                        </View>
                        <View style={{flex: 3, justifyContent: "center" }}>
                            <Text style={{color: "#535353", fontSize: 13}}>2 Bedrooms</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: "row"}}>
                        <View style={{flex: 1, alignItems: "center", justifyContent: "center", paddingLeft:15}}>
                            <View style={{backgroundColor: "#D6D6D6", width: 8, height: 8, borderRadius: 4}} />
                        </View>
                        <View style={{flex: 3, justifyContent: "center" }}>
                            <Text style={{color: "#535353", fontSize: 13}}>1 Hall</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: "row" }}>
                        <View style={{flex: 1, alignItems: "center", justifyContent: "center" }}>
                            <View style={{backgroundColor: "#D6D6D6", width: 8, height: 8, borderRadius: 4}} />
                        </View>
                        <View style={{flex: 3, justifyContent: "center" }}>
                            <Text style={{color: "#535353", fontSize: 13}}>1 Kitchen</Text>
                        </View>
                    </View>
                </View>

                <View style={{flexDirection: "row", paddingTop: 20, paddingBottom: 20}}>
                    <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
                        <TouchableOpacity style={{backgroundColor: "#535353", justifyContent: "center", alignItems: "center", height: 40, width: 140}}>
                            <Text style={{color: "#FFFFFF", fontSize: 15}}>BUY</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('PropertySchedule')}
                        style={{borderColor: "#535353", borderWidth: 1, justifyContent: "center", alignItems: "center", height: 40, width: 140}}>
                            <Text style={{color: "#535353", fontSize: 15}}>SCHEDULE</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{flexDirection : "row", paddingLeft: 29, paddingRight: 29, paddingBottom: 20}}>
                <Text style={{color: "#535353"}}>EMI and Loans are available</Text>
                    <View style={{borderBottomWidth: 1, borderBottomColor: "#535353"}}>
                        <Text style={{color: "#535353"}}> View plans</Text>
                    </View>
                </View>
            
                <View style={{borderBottomColor: "#F6F6F6", borderBottomWidth: 1}} />

                <View style={{paddingLeft: 29, paddingRight: 29}}>
                    <View style={{paddingTop: 20, paddingBottom: 18}}>
                        <Text style={{color: "#2A2A2A", fontSize: 15}}>Nearby</Text>
                    </View>
                    <View>
                    <ScrollView horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                            <View style={{marginRight: 30}}>
                                <View style={{backgroundColor: "#F6F6F6", height: 86, width: 86, borderRadius: 43, alignItems: "center", justifyContent: "center"}}>
                                    <Image source={icon_school} style={{height: 33, width: 41}} />
                                </View>
                                <View style={{justifyContent: "center", alignItems: "center", marginTop: 10}}>
                                    <Text>School</Text>
                                </View>
                            </View>

                            <View style={{marginRight: 30}}>
                                <View style={{backgroundColor: "#F6F6F6", height: 86, width: 86, borderRadius: 43, alignItems: "center", justifyContent: "center"}}>
                                    <Image source={icon_park} style={{height: 38, width: 32}} />
                                </View>
                                <View style={{justifyContent: "center", alignItems: "center", marginTop: 10}}>
                                    <Text>Park</Text>
                                </View>
                            </View> 

                            <View style={{marginRight: 30}}>
                                <View style={{backgroundColor: "#F6F6F6", height: 86, width: 86, borderRadius: 43, alignItems: "center", justifyContent: "center"}}>
                                    <Image source={icon_swimming_pool} style={{height: 27, width: 27}} />
                                </View>
                                <View style={{justifyContent: "center", alignItems: "center", marginTop: 10}}>
                                    <Text>Swimming Pool</Text>
                                </View>
                            </View> 

                            <View>
                                <View style={{backgroundColor: "#F6F6F6", height: 86, width: 86, borderRadius: 43, alignItems: "center", justifyContent: "center"}}>
                                    <Image source={icon_hospital} style={{height: 25, width: 25}} />
                                </View>
                                <View style={{justifyContent: "center", alignItems: "center", marginTop: 10}}>
                                    <Text>Hospital</Text>
                                </View>
                            </View>       
                        </ScrollView>
                    </View>  
                </View>

                <View style={{paddingLeft: 29, paddingRight: 29}}>
                    <View style={{paddingTop: 40}}>
                        <Text style={{color: "#2A2A2A", fontSize: 15}}>About the Property</Text>
                    </View>
                    <View style={{flexDirection: "row", paddingTop: 18}}>
                        <View style={{flex: 1}}>
                            <View>
                                <Text style={{color: "#535353", fontSize: 14}}>Carpet Area</Text>
                                <Text style={{color: "#797676", fontSize: 12, marginTop: 10}}>1200 Sq.m</Text> 
                            </View>
                            <View>
                                <Text style={{color: "#535353", fontSize: 14, marginTop: 20}}>Amenities</Text>
                                <Text style={{color: "#797676", fontSize: 12, marginTop: 10}}>Swimming pool</Text>
                                <Text style={{color: "#797676", fontSize: 12, marginTop: 10}}>Gym</Text>
                                <Text style={{color: "#797676", fontSize: 12, marginTop: 10}}>Clubhouse</Text>   
                            </View>
                        </View>
                        <View style={{flex: 1}}>
                            <View>
                                <Text style={{color: "#535353", fontSize: 14}}>Type</Text>
                                <Text style={{color: "#797676", fontSize: 12, marginTop: 10}}>Residential</Text> 
                            </View>
                            <View>
                                <Text style={{color: "#535353", fontSize: 14, marginTop: 20}}>Direction Facing</Text>
                                <Text style={{color: "#797676", fontSize: 12, marginTop: 10}}>North</Text> 
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{paddingTop: 40, paddingLeft: 29, paddingRight: 29}}>
                    <View style={{paddingBottom: 18}}>
                        <Text style={{color: "#2A2A2A"}}>Location</Text>
                    </View>
                    <View style={{height: 98, borderWidth: 1, justifyContent: "center", alignItems: "center"}}>
                        <MapView
                            provider={ PROVIDER_GOOGLE }
                            style={{width: '100%', height: '100%', ...StyleSheet.absoluteFillObject}}
                            initialRegion={{
                            latitude: 73.8567,
                            longitude: 18.5204,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                            }}
                        />
                        
                    </View>
                </View>

                <View style={{paddingTop: 28, paddingLeft: 29, paddingRight: 29}}>
                    <Text style={{color: "#2A2A2A", fontSize: 15}}>Managed by</Text>
                    <Text style={{marginTop: 10, color: "#535353", fontSize: 14}}>abc Brokerage Firm</Text>
                </View>

                <View style={{paddingTop: 28, paddingLeft: 29, paddingRight: 29}}>
                    <Text style={{color: "#2A2A2A", fontSize: 15}}>Review</Text>
                    <Text style={{marginTop: 10, color: "#2A2A2A", fontSize: 14}}>Review the house</Text>
                    <View style={{height: 50, borderWidth: 1, marginTop: 20}}>
                        <Text style={{marginTop: 10, color: "#535353", fontSize: 14}}>Star ratings</Text>
                    </View>

                    <View style={{paddingTop: 18}}>
                        <Text style={{color: "#535353", fontSize: 14}}>Subject</Text>
                        <View style={{height: 40, borderWidth: 1, borderColor: "#C7C7C7", borderRadius: 3, marginTop: 10}}>
                            <TextInput />
                        </View>
                    </View>

                    <View style={{paddingTop: 20}}>
                        <Text style={{color: "#535353", fontSize: 14}}>Comment</Text>
                        <View style={{height: 76, borderWidth: 1, borderColor: "#C7C7C7", borderRadius: 3, marginTop: 10}}>
                            <TextInput 
                                multiline={true}
                            />
                        </View>
                    </View>

                    <View style={{marginTop: 20}}>
                        <TouchableOpacity style={{backgroundColor: "#535353", justifyContent: "center", alignItems: "center", height: 40, width: 140}}>
                            <Text style={{color: "#FFFFFF", fontSize: 15}}>POST</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={{paddingLeft: 29, paddingRight: 29}}>
                    <View style={{paddingTop: 28, paddingBottom: 18}}>
                        <Text style={{color: "#2A2A2A", fontSize: 15}}>Similar properties</Text>
                    </View>
                    <View>
                    <ScrollView horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                            <View style={{marginRight: 10}}>
                                <View style={{borderRadius: 3, height: 203, width: 122, alignItems: "center", justifyContent: "center"}}>
                                    <Image source={{uri: img}} style={{height: "100%", width: "100%"}} resizeMode="stretch" />
                                </View>
                            </View>

                            <View style={{marginRight: 10}}>
                                <View style={{borderRadius: 3, height: 203, width: 122, alignItems: "center", justifyContent: "center"}}>
                                    <Image source={{uri: img}} style={{height: "100%", width: "100%"}} resizeMode="stretch" />
                                </View>
                            </View> 

                            <View style={{marginRight: 10}}>
                                <View style={{borderRadius: 3, height: 203, width: 122, alignItems: "center", justifyContent: "center"}}>
                                    <Image source={{uri: img}} style={{height: "100%", width: "100%"}} resizeMode="stretch" />
                                </View>
                            </View> 

                            <View>
                                <View style={{borderRadius: 3, height: 203, width: 122, alignItems: "center", justifyContent: "center"}}>
                                    <Image source={{uri: img}} style={{height: "100%", width: "100%"}} resizeMode="stretch" />
                                </View>
                            </View>       
                        </ScrollView>
                    </View>  
                </View>


                <Modal
                    style={{flex: 1}}
                    animationType="fade"
                    transparent={true}
                    visible={this.state.isMakeAnOfferModalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{flex: 1, backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
                        <View style={{marginTop: HEIGHT/4, width: WIDTH, height: 300, padding: 30}}>
                            <View style={{flex: 1, backgroundColor: "#FFFFFF", borderRadius: 5, }}>
                                <View style={{padding: 20, alignItems: "flex-end"}}>
                                    <TouchableOpacity onPress={() => this.makeOfferModal()}>
                                        <Image source={ico_grey_close} style={{height: 15, width: 15}} />
                                    </TouchableOpacity> 
                                </View>
                                <Text style={{color: "#2A2A2A", fontSize: 15, fontWeight: "bold", marginBottom: 10, marginHorizontal: 29}}>₹ 45,000</Text>
                                <Text style={{fontSize: 13, color: "#2A2A2A", marginHorizontal: 29}}>Auction End Time - 1.23.45</Text>

                                <View style={{backgroundColor: "#F6F6F6", height: 40, marginHorizontal: 30, flexDirection: "row", marginTop: 20, marginBottom: 20, justifyContent: "center"}}>
                                    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                                        <TouchableOpacity onPress={() => this.subtractAdd("sub")}>
                                            <Image source={ico_subtract} style={{height: 20, width: 20}} resizeMode={"contain"} />
                                        </TouchableOpacity> 
                                    </View>
                                    <View style={{flex: 3, justifyContent: "center", alignItems: "center", height: 40, flexDirection: "row"}}>
                                        
                                            <Text style={{color: "#2A2A2A", fontSize: 15, marginRight: 5}}>₹</Text>
                                        
                                        
                                            <TextInput 
                                                value={`${this.state.rupees}`}
                                            />
                                        
                                    </View>
                                    <View style={{flex: 1, justifyContent: "center", alignItems: "center", paddingLeft: 10}}>
                                        <TouchableOpacity onPress={() => this.subtractAdd("add")}>
                                            <Image source={ico_add} style={{height: 20, width: 20}} />
                                        </TouchableOpacity> 
                                    </View>
                                </View>

                                <TouchableOpacity onPress={() => this.onSend()}
                                    style={{borderColor: "#535353", backgroundColor: "#535353",borderWidth: 1, justifyContent: "center", alignItems: "center", 
                                    height: 40, width: 140, marginLeft: 29, marginRight: 29}}>
                                        <Text style={{color: "#FFFFFF", fontSize: 15}}>SEND</Text>
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

export default PropertyDetailView;


