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
            <SafeAreaView style= {{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                <View style={{width: '100%', flexDirection: "row", justifyContent: "space-between", backgroundColor: '#2A2A2A', padding: 18, marginLeft: 29, marginRight: 29}}>
                    <View>
                        <Text style={{fontSize: 15, fontFamily: 'Cinzel-Bold', color: 'white'}}>Dashboard</Text>
                    </View>
                    <View>
                        <Image source={btn_menu} style={{height: 20, width: 30}} />
                    </View>
                </View>

                <View style= {{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, width: '90%', marginTop: 20, alignItems: 'center'}}>
                    <Text style= {{fontSize: 20, fontFamily: 'GothamRegular'}}>MONEY SPENT</Text>
                    <Text style= {{fontSize: 16, fontFamily: 'Cinzel-Regular'}}>Currency <Entypo name="chevron-down" color="#A3A3A3" size={18} style= {{alignSelf: 'center'}} /></Text>
                </View>

                <Text style= {{fontSize: 50, letterSpacing: 3, marginTop: 20, fontFamily: 'GothamMedium', color: '#535353'}}><FontAwesome name="rupee" color="#535353" size= {50} style={{alignSelf: 'center'}} /> 50,00,000</Text>

                <Text style= {{fontSize: 18, letterSpacing: 2, marginLeft: 29, marginTop: 38, alignSelf: 'flex-start', fontFamily: 'GothamMedium', color: '#707070'}}>TRANSACTIONS</Text>

                <View style= {{flexDirection: 'row', marginTop: 28, alignItems: 'center', justifyContent: 'space-around', width: '100%', padding: 20, paddingVertical: 50, backgroundColor: "#F1F2F5"}}>
                    <View style= {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style= {{fontSize: 55, fontFamily: 'GothamMedium', color: '#535353'}}>4</Text>
                        <Text style= {{fontSize: 14, fontFamily: 'GothamMedium', color: '#A3A3A3'}}>CARD</Text>
                    </View>

                    <View style= {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style= {{fontSize: 55, fontFamily: 'GothamMedium', color: '#535353'}}>10</Text>
                        <Text style= {{fontSize: 14, fontFamily: 'GothamMedium', color: '#A3A3A3'}}>ONLINE WALLET</Text>
                    </View>
                    <View style= {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style= {{fontSize: 55, fontFamily: 'GothamMedium', color: '#535353'}}>7</Text>
                        <Text style= {{fontSize: 14, fontFamily: 'GothamMedium', color: '#A3A3A3'}}>BANK</Text>
                    </View>
                </View>

                <Text style= {{fontSize: 18, marginTop: 30, fontFamily: 'GothamMedium', alignSelf: 'flex-start', marginLeft: 29, color: '#A3A3A3'}}>CARD TRANSACTIONS</Text>

                <ScrollView contentContainerStyle= {{width, marginTop: 10, marginBottom: 4}}>
                    {
                        this.showAllTransactions()
                    }
                </ScrollView>

            </SafeAreaView>
        );
    }
}

export default MoneySpent;