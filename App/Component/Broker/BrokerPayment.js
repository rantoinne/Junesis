import
React, { Component }
    from 'react';

import {

    View,
    Text, StyleSheet,
    Dimensions, TouchableOpacity,
    ScrollView, Image

} from
    'react-native';

import {
    SafeAreaView
} from
    'react-navigation';

import
Entypo from
    'react-native-vector-icons/Entypo';

import
FontAwesome from
    'react-native-vector-icons/FontAwesome';



const
    btn_menu = require("../../../assets/images/btn_menu.png")



const { width,
    height } =
    Dimensions.get('window');

const
    img = "https://livinator.com/wp-content/uploads/2016/03/Horizontal-Lines-aceinteriordesign.jpg";



class
    BrokerPayment extends
    Component {



    render() {

        return (

            <SafeAreaView
                style=
                {{
                    flex:
                        1, justifyContent:
                        'flex-start', alignItems:
                        'center'
                }}>

                <View
                    style={{
                        width:
                            '100%',
                        flexDirection: "row",
                        justifyContent: "space-between",
                        backgroundColor:
                            '#2A2A2A', padding:
                            18, marginLeft:
                            29, marginRight:
                            29
                    }}>

                    <View>

                        <Text
                            style={{
                                fontSize:
                                    15,
                                fontFamily: 'GothamMedium',
                                color: 'white'
                            }}>PROPERTY</Text>

                    </View>

                    <View>

                        <Image
                            source={btn_menu}
                            style={{
                                height:
                                    20,
                                width: 30
                            }}
                        />

                    </View>

                </View>



                <View
                    style={{
                        paddingLeft:
                            29,
                        paddingRight: 29
                    }}>

                    <View
                        style={{
                            paddingTop:
                                28,
                            paddingBottom: 18
                        }}>

                        <Text
                            style={{
                                color:
                                    "#535353",
                                fontSize: 15,
                                fontFamily: 'GothamMedium',
                                alignSelf: 'flex-start'
                            }}>PAYMENT</Text>

                    </View>

                    <ScrollView
                        horizontal={true}

                        showsHorizontalScrollIndicator={false}>

                        <View
                            style={{
                                marginRight:
                                    10
                            }}>

                            <View
                                style={{
                                    borderRadius:
                                        8,
                                    height: 203,
                                    width: 122,
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>

                                <Image
                                    source={{
                                        uri:
                                            img
                                    }}
                                    style={{
                                        height:
                                            "100%",
                                        width: "100%",
                                        borderRadius: 5
                                    }}
                                    resizeMode="stretch"
                                />

                            </View>

                        </View>



                        <View
                            style={{
                                marginRight:
                                    10
                            }}>

                            <View
                                style={{
                                    borderRadius:
                                        8,
                                    height: 203,
                                    width: 122,
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>

                                <Image
                                    source={{
                                        uri:
                                            img
                                    }}
                                    style={{
                                        height:
                                            "100%",
                                        width: "100%",
                                        borderRadius: 5
                                    }}
                                    resizeMode="stretch"
                                />

                            </View>

                        </View>



                        <View
                            style={{
                                marginRight:
                                    10
                            }}>

                            <View
                                style={{
                                    borderRadius:
                                        8,
                                    height: 203,
                                    width: 122,
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>

                                <Image
                                    source={{
                                        uri:
                                            img
                                    }}
                                    style={{
                                        height:
                                            "100%",
                                        width: "100%",
                                        borderRadius: 5
                                    }}
                                    resizeMode="stretch"
                                />

                            </View>

                        </View>



                        <View>

                            <View
                                style={{
                                    borderRadius:
                                        8,
                                    height: 203,
                                    width: 122,
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>

                                <Image
                                    source={{
                                        uri:
                                            img
                                    }}
                                    style={{
                                        height:
                                            "100%",
                                        width: "100%",
                                        borderRadius: 5
                                    }}
                                    resizeMode="stretch"
                                />

                            </View>

                        </View>

                    </ScrollView>

                </View>





                <Image
                    source=
                    {{
                        uri:
                            img
                    }}
                    style={{
                        width:
                            100,
                        height: 100
                    }}
                />



            </SafeAreaView>

        );

    }

}



export
    default BrokerPayment;
