import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar,
        Image, ScrollView } from "react-native";

const btn_menu = require("../../../assets/images/btn_menu.png")

class Home extends Component{
constructor(props){
  super(props)
  this.state = {
      isListViewActive: true,
      isMapViewActive: false,
      isGalleryViewActive: false      
  }
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


render() {
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

        loadView = <View style={{height: 600, paddingBottom: 100}}>
                    <ScrollView>
                        <View>
                            <View style={{height: 161, backgroundColor: "red", alignItems: "center", justifyContent: "center"}}>
                                <Text>Image</Text>
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
                                        <View>
                                            <Image source={btn_menu} style={{height: 20, width: 35}} />
                                        </View>
                                        <View style={{paddingLeft: 28}}>
                                            <Image source={btn_menu} style={{height: 20, width: 35}} />
                                        </View>
                                    </View>
                                </View>
                                <View style={{marginTop: 12, flexDirection: "row"}}>
                                    <View style={{justifyContent: "center"}}>
                                        <Image source={btn_menu} style={{height: 20, width: 35}} />
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
                            <View style={{height: 161, backgroundColor: "green", alignItems: "center", justifyContent: "center"}}>
                                <Text>Image</Text>
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
                                        <View>
                                            <Image source={btn_menu} style={{height: 20, width: 35}} />
                                        </View>
                                        <View style={{paddingLeft: 28}}>
                                            <Image source={btn_menu} style={{height: 20, width: 35}} />
                                        </View>
                                    </View>
                                </View>
                                <View style={{marginTop: 12, flexDirection: "row"}}>
                                    <View style={{justifyContent: "center"}}>
                                        <Image source={btn_menu} style={{height: 20, width: 35}} />
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
                            <View style={{height: 161, backgroundColor: "blue", alignItems: "center", justifyContent: "center"}}>
                                <Text>Image</Text>
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
                                        <View>
                                            <Image source={btn_menu} style={{height: 20, width: 35}} />
                                        </View>
                                        <View style={{paddingLeft: 28}}>
                                            <Image source={btn_menu} style={{height: 20, width: 35}} />
                                        </View>
                                    </View>
                                </View>
                                <View style={{marginTop: 12, flexDirection: "row"}}>
                                    <View style={{justifyContent: "center"}}>
                                        <Image source={btn_menu} style={{height: 20, width: 35}} />
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
                    </ScrollView>
                </View>


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

        loadView = <View style={{height: 600, borderWidth: 1}}>
                    <ScrollView>
                        <Text>MAP VIEW</Text>
                    </ScrollView>
                </View>        
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

        loadView = <View style={{height: 600, borderWidth: 1}}>
                    <ScrollView>
                        <Text>GALLERY VIEW</Text>
                    </ScrollView>
                </View>
    }else{
        btnGallery = <View style={{flex: 1, backgroundColor: "#F6F6F6", height: 40}}>
                        <TouchableOpacity style={{backgroundColor: "#F6F6F6", borderRadius: 3, 
                        height: 40, alignContent: "center", justifyContent: "center"}}
                        onPress={() => this.toggleView("galleryView")}>
                        <Text style={{color: "#6B6B6B", alignSelf: "center"}}>GALLERY</Text>
                    </TouchableOpacity>
                    </View>
    }

  return (
    <SafeAreaView style={{flex: 1}}> 
    <View> 
       <StatusBar backgroundColor={'red'} barStyle={'dark-content'} translucent={false} />
       <View style={{flex: 1, backgroundColor: "#FFFFFF"}}>
        <View style={{height: 125, borderBottomWidth: 3, borderBottomColor: "#F6F6F6"}}>
          <View style={{flexDirection: "row", justifyContent: "space-between", marginLeft: 29, marginRight: 29, marginTop: 20}}>
            <View>
                <Text style={{fontSize: 15}}>H O M E</Text>
            </View>
            <View>
                <Image source={btn_menu} style={{height: 20, width: 35}} />
            </View>  
          </View>
          <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 29, marginRight: 29, marginTop: 25}}>
            {btnList}
            {btnMap}
            {btnGallery}
          </View>
        </View>

        <View style={{flexDirection: "row", marginTop: 15, marginBottom: 20, paddingLeft: 29, paddingRight: 29, height: 15}}>
            <Text style={{fontSize: 16, color: "#6B6B6B"}}>SEARCH</Text>
        </View>
        
        <View>
            {loadView}
        </View>

       </View>
    </View>
    </SafeAreaView>
  );
}
}

export default Home;
