import React, {Component} from 'react';
import {
    View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Image
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const btn_menu = require("../../../assets/images/btn_menu.png")

const {width, height} = Dimensions.get('window');
const array = [1, 2, 3, 4, 5, 6, 7];

class ClientsHome extends Component {

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
                        <Entypo name="cross" onPress= {()=> this.props.navigation.navigate('MainPage')} size= {24} color="#A3A3A3" style= {{alignSelf: 'center'}} />
                        <Text style={{fontSize: 15, fontFamily: 'Cinzel-Bold', justifyContent: 'center', alignItems: 'center', color: 'white'}}>CLIENTS</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=> this.props.navigation.openDrawer()}>
                            <Image source={btn_menu} style={{height: 20, width: 30}} />
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView contentContainerStyle= {{width}}>                

                <TouchableOpacity onPress= {()=> this.props.navigation.navigate('Clients')}>
                    <View style= {{flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 20, paddingVertical: 20, borderBottomWidth: 0.5, borderColor: "#D6D6D6"}}>
                        <MaterialIcons name= 'person-outline' size= {60} color= "orange" style= {{alignSelf: 'center'}} />
                        <Text style= {{fontSize: 16, marginTop: 20, marginLeft: 29, fontFamily: 'GothamMedium', alignSelf: 'flex-start', color: '#2A2A2A'}}>Mark Gens {'\n'}{'\n'}New Profile</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress= {()=> this.props.navigation.navigate('Clients')}>
                    <View style= {{flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 20, paddingVertical: 20, borderBottomWidth: 0.5, borderColor: "#D6D6D6"}}>
                        <MaterialIcons onPress= {()=> this.props.navigation.navigate('Clients')} name= 'person-outline' size= {60} color= "gray" style= {{alignSelf: 'center'}} />
                        <Text style= {{fontSize: 16, marginTop: 20, marginLeft: 29, fontFamily: 'GothamMedium', alignSelf: 'flex-start', color: '#2A2A2A'}}>Mark Gens {'\n'}{'\n'}New Profile</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress= {()=> this.props.navigation.navigate('Clients')}>
                    <View style= {{flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 20, paddingVertical: 20, borderBottomWidth: 0.5, borderColor: "#D6D6D6"}}>
                        <MaterialIcons onPress= {()=> this.props.navigation.navigate('Clients')} name= 'person-outline' size= {60} color= "red" style= {{alignSelf: 'center'}} />
                        <Text style= {{fontSize: 16, marginTop: 20, marginLeft: 29, fontFamily: 'GothamMedium', alignSelf: 'flex-start', color: '#2A2A2A'}}>Mark Gens {'\n'}{'\n'}New Profile</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress= {()=> this.props.navigation.navigate('Clients')}>
                    <View style= {{flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 20, paddingVertical: 20, borderBottomWidth: 0.5, borderColor: "#D6D6D6"}}>
                        <MaterialIcons onPress= {()=> this.props.navigation.navigate('Clients')} name= 'person-outline' size= {60} color= "green" style= {{alignSelf: 'center'}} />
                        <Text style= {{fontSize: 16, marginTop: 20, marginLeft: 29, fontFamily: 'GothamMedium', alignSelf: 'flex-start', color: '#2A2A2A'}}>Mark Gens {'\n'}{'\n'}New Profile</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress= {()=> this.props.navigation.navigate('Clients')}>
                    <View style= {{flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 20, paddingVertical: 20, borderBottomWidth: 0.5, borderColor: "#D6D6D6"}}>
                        <MaterialIcons onPress= {()=> this.props.navigation.navigate('Clients')} name= 'person-outline' size= {60} color= "black" style= {{alignSelf: 'center'}} />
                        <Text style= {{fontSize: 16, marginTop: 20, marginLeft: 29, fontFamily: 'GothamMedium', alignSelf: 'flex-start', color: '#2A2A2A'}}>Mark Gens {'\n'}{'\n'}New Profile</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress= {()=> this.props.navigation.navigate('Clients')}>
                    <View style= {{flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 20, paddingVertical: 20, borderBottomWidth: 0.5, borderColor: "#D6D6D6"}}>
                        <MaterialIcons onPress= {()=> this.props.navigation.navigate('Clients')} name= 'person-outline' size= {60} color= "red" style= {{alignSelf: 'center'}} />
                        <Text style= {{fontSize: 16, marginTop: 20, marginLeft: 29, fontFamily: 'GothamMedium', alignSelf: 'flex-start', color: '#2A2A2A'}}>Mark Gens {'\n'}{'\n'}New Profile</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress= {()=> this.props.navigation.navigate('Clients')}>
                    <View style= {{flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 20, paddingVertical: 20, borderBottomWidth: 0.5, borderColor: "#D6D6D6"}}>
                        <MaterialIcons onPress= {()=> this.props.navigation.navigate('Clients')} name= 'person-outline' size= {60} color= "orange" style= {{alignSelf: 'center'}} />
                        <Text style= {{fontSize: 16, marginTop: 20, marginLeft: 29, fontFamily: 'GothamMedium', alignSelf: 'flex-start', color: '#2A2A2A'}}>Mark Gens {'\n'}{'\n'}New Profile</Text>
                    </View>
                </TouchableOpacity>

                </ScrollView>

            </SafeAreaView>
        );
    }
}

export default ClientsHome;