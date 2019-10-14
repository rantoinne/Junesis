import React, {Component} from 'react';
import {
    View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Image
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const btn_menu = require("../../../assets/images/btn_menu.png")

const {width, height} = Dimensions.get('window');
const array = [1, 2, 3, 4, 5, 6, 7];

class Clients extends Component {

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
            <SafeAreaView style= {{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                <View style={{width: '100%', flexDirection: "row", justifyContent: "space-between", backgroundColor: '#2A2A2A', padding: 18, marginLeft: 29, marginRight: 29}}>
                    
                    <View style={{width: '50%', flexDirection: "row", justifyContent: "flex-start", alignItems: 'center'}}>
                        <Entypo onPress= {()=> this.props.navigation.navigate('ClientsHome')} name="chevron-left" size= {24} color="#A3A3A3" style= {{alignSelf: 'center'}} />
                        <Text style={{fontSize: 15, fontFamily: 'Cinzel-Bold', color: 'white'}}>Clients</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=> this.props.navigation.openDrawer()}>
                            <Image source={btn_menu} style={{height: 20, width: 30}} />
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView>                

                <Text style= {{fontSize: 12, marginTop: 20, marginLeft: 29, fontFamily: 'GothamMedium', alignSelf: 'flex-start', color: '#2A2A2A'}}>Name</Text>

                <Text style= {{fontSize: 14, marginLeft: 29, marginTop: 10, alignSelf: 'flex-start', fontFamily: 'GothamMedium', color: '#A3A3A3'}}>Mark Evans</Text>
                <Text style= {{fontSize: 14, marginLeft: 29, marginTop: 10, alignSelf: 'flex-start', fontFamily: 'GothamMedium', color: '#A3A3A3'}}>xyz@zbc.com</Text>

                <Text style= {{fontSize: 12, marginTop: 20, marginLeft: 29, fontFamily: 'GothamMedium', alignSelf: 'flex-start', color: '#2A2A2A'}}>Property of Interest</Text>

                <Text style= {{fontSize: 14, marginLeft: 29, marginTop: 10, alignSelf: 'flex-start', fontFamily: 'GothamMedium', color: '#A3A3A3'}}>White-mills Estate</Text>
                <Text style= {{fontSize: 14, marginLeft: 29, marginTop: 10, alignSelf: 'flex-start', fontFamily: 'GothamMedium', color: '#A3A3A3'}}>Kalyani Nagar, Pune</Text>
                <Text style= {{fontSize: 14, marginLeft: 29, marginTop: 10, alignSelf: 'flex-start', fontFamily: 'GothamMedium', color: '#A3A3A3'}}>Rs. 45,000</Text>

                <Text style= {{fontSize: 14, marginLeft: 29, marginTop: 10, alignSelf: 'flex-start', fontFamily: 'GothamMedium', color: '#A3A3A3'}}>Details</Text>

                <Text style= {{fontSize: 14, marginLeft: 29, marginRight: 29, marginTop: 10, alignSelf: 'flex-start', fontFamily: 'GothamMedium', color: '#A3A3A3'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure</Text>

                <Text style= {{fontSize: 14, marginLeft: 29, marginTop: 20, alignSelf: 'flex-start', fontFamily: 'GothamMedium', color: '#2A2A2A'}}>Scan QR Code for {'\n'}Confirming</Text>

                <Image source={require('../../../assets/images/demoQr.png')} style= {{width: '60%', marginTop: 20, alignSelf: 'center'}} resizeMode="cover" />

                <TouchableOpacity>
                    <View style= {{width: '40%', marginBottom: 20, marginTop: 20, marginLeft: 29, paddingVertical: 20, backgroundColor:'#535353', justifyContent: 'center', alignItems:'center'}}>
                    <Text style= {{fontSize: 14, fontFamily: 'GothamMedium', color: 'white'}}>DONE</Text>
                    </View>
                </TouchableOpacity>

                </ScrollView>

            </SafeAreaView>
        );
    }
}

export default Clients;