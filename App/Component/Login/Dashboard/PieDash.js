import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    StyleSheet,
    Dimensions,
} from 'react-native';
import PieChart from 'react-native-pie-chart';
const btn_menu = require("../../../../assets/images/btn_menu.png")
import Entypo from 'react-native-vector-icons/Entypo'; 
import {SafeAreaView} from 'react-navigation';

const {width, height} = Dimensions.get('window');

const chart_wh = 250
const series = [123, 140]
const sliceColor = ['#A3A0FB','#54A0FF']
class PieDash extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <SafeAreaView style= {{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                <View style={{width: '100%', flexDirection: "row", justifyContent: "space-between", backgroundColor: '#2A2A2A', padding: 18, marginLeft: 29, marginRight: 29}}>
                    <View style={{width: '50%', flexDirection: "row", justifyContent: "flex-start", alignItems: 'center'}}>
                        <Entypo name="cross" onPress= {()=> this.props.navigation.navigate('MainPage')} size= {24} color="#A3A3A3" style= {{alignSelf: 'center'}} />
                        <Text style={{fontSize: 15, fontFamily: 'Cinzel-Bold', justifyContent: 'center', alignItems: 'center', color: 'white'}}>DASHBOARD</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=> this.props.navigation.openDrawer()}>
                            <Image source={btn_menu} style={{height: 20, width: 30}} />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView contentContainerStyle= {{width}} showsVerticalScrollIndicator= {false}>

                <Text style= {{fontFamily: 'Cinzel-B', fontSize: 18, marginLeft: 29, marginTop: 30, color: 'black'}}>PROPERTIES</Text>

                <View style={{flexDirection: "row", justifyContent: "space-around", paddingHorizontal: 20, marginLeft: 0, marginRight: 0, marginTop: 20}}>
                    <View style= {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <PieChart
                            chart_wh={width / 2.5}
                            series={series}
                            sliceColor={sliceColor}
                            doughnut={true}
                            coverRadius={0.55}
                            coverFill={'#FFF'}
                        />
                        <Text style= {{fontSize: 16, fontFamily: 'Cinzel-Regular', position: 'absolute', color: 'black', top: 60, textAlign: 'center'}}>22{'\n'}TOTAL</Text>
                    </View>
                    <View style= {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{flexDirection: "row", justifyContent: "space-around", alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20}}>
                            <View style= {{width: 10, height: 10, marginRight: 6, borderRadius: 5, backgroundColor: '#A3A0FB'}}></View>
                            <Text>22 Sold</Text>
                        </View>
                        <View style={{flexDirection: "row", justifyContent: "space-around", alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20}}>
                            <View style= {{width: 10, height: 10, marginRight: 6, borderRadius: 5, backgroundColor: '#54A0FF'}}></View>
                            <Text>22 Sold</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style= {{width: '80%', padding: 18, borderColor: '#535353', justifyContent: 'center', alignItems: 'center', borderWidth: 0.5, borderRadius: 4, alignSelf: 'center', marginTop: 20}}>
                    <Text style= {{fontFamily: 'Cinzel-Regular', fontSize: 17, color: 'black'}}>View All Properties</Text>
                </TouchableOpacity>



                <Text style= {{fontFamily: 'Cinzel-B', fontSize: 18, marginLeft: 29, marginTop: 30, color: 'black'}}>MEETINGS</Text>

                <View style={{flexDirection: "row", justifyContent: "space-around", paddingHorizontal: 20, marginLeft: 0, marginRight: 0, marginTop: 20}}>
                    <View style= {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <PieChart
                            chart_wh={width / 2.5}
                            series={series}
                            sliceColor={sliceColor}
                            doughnut={true}
                            coverRadius={0.55}
                            coverFill={'#FFF'}
                        />
                        <Text style= {{fontSize: 16, fontFamily: 'Cinzel-Regular', position: 'absolute', color: 'black', top: 60, textAlign: 'center'}}>21{'\n'}TOTAL</Text>
                    </View>
                    <View style= {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{flexDirection: "row", justifyContent: "space-around", alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20}}>
                            <View style= {{width: 10, height: 10, marginRight: 6, borderRadius: 5, backgroundColor: '#A3A0FB'}}></View>
                            <Text>22 Sold</Text>
                        </View>
                        <View style={{flexDirection: "row", justifyContent: "space-around", alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20}}>
                            <View style= {{width: 10, height: 10, marginRight: 6, borderRadius: 5, backgroundColor: '#54A0FF'}}></View>
                            <Text>22 Sold</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style= {{width: '80%', padding: 18, borderColor: '#535353', justifyContent: 'center', alignItems: 'center', borderWidth: 0.5, borderRadius: 4, alignSelf: 'center', marginTop: 20}}>
                    <Text style= {{fontFamily: 'Cinzel-Regular', fontSize: 17, color: 'black'}}>MEETING SCHEDULE</Text>
                </TouchableOpacity>

                <Text style= {{fontFamily: 'GothamRegular', fontSize: 16, marginLeft: 29, marginTop: 20, color: 'black'}}>VISITORS</Text>
                <Text style= {{fontFamily: 'GothamBold', fontSize: 24, marginLeft: 29, marginTop: 20, color: 'black'}}>502</Text>
                <Text style= {{fontFamily: 'GothamRegular', fontSize: 16, marginLeft: 29, marginTop: 30, color: 'black'}}>PROPERTIES VIEWED</Text>


                <View style={{flexDirection: "row", justifyContent: "space-around", paddingHorizontal: 20, marginLeft: 0, marginRight: 0, marginTop: 20}}>
                    <View style= {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <PieChart
                            chart_wh={width / 2.5}
                            series={series}
                            sliceColor={sliceColor}
                            doughnut={true}
                            coverRadius={0.55}
                            coverFill={'#FFF'}
                        />
                        <Text style= {{fontSize: 16, fontFamily: 'Cinzel-Regular', position: 'absolute', color: 'black', top: 60, textAlign: 'center'}}>21{'\n'}TOTAL</Text>
                    </View>
                    <View style= {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{flexDirection: "row", justifyContent: "space-around", alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20}}>
                            <View style= {{width: 10, height: 10, marginRight: 6, borderRadius: 5, backgroundColor: '#A3A0FB'}}></View>
                            <Text>22 Sold</Text>
                        </View>
                        <View style={{flexDirection: "row", justifyContent: "space-around", alignItems: 'center', marginLeft: 0, marginRight: 0, marginTop: 20}}>
                            <View style= {{width: 10, height: 10, marginRight: 6, borderRadius: 5, backgroundColor: '#54A0FF'}}></View>
                            <Text>22 Sold</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style= {{width: '80%', padding: 18, borderColor: '#535353', marginBottom: 10, justifyContent: 'center', alignItems: 'center', borderWidth: 0.5, borderRadius: 4, alignSelf: 'center', marginTop: 20}}>
                    <Text style= {{fontFamily: 'Cinzel-Regular', fontSize: 17, color: 'black'}}>FINANCIAL DATA</Text>
                </TouchableOpacity>

                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default PieDash;