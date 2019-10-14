import React, { Component } from 'react'
import { Text,Dimensions, View,ImageBackground,Image, Platform, StyleSheet,TouchableHighlight,TouchableOpacity, ScrollView } from 'react-native'
import {NavigationActions} from 'react-navigation';
import { DrawerActions, SafeAreaView } from 'react-navigation';
const screen = Dimensions.get('window')

const {width, height} = Dimensions.get('window');
class Drawer extends Component {

  constructor(props) {
    super(props);
    this.state= {
      role: "",
      details: {}
    };
  }
  

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
          routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
        this.props.navigation.dispatch(DrawerActions.closeDrawer())
    }

  render() {
    return (
      <View style= {{marginTop: 10, marginLeft: 20}}>

        <ScrollView contentContainerStyle= {{width: '100%'}} showsVerticalScrollIndicator= {false}>
        <View>
          <TouchableHighlight
          onPress={this.navigateToScreen('Listing')}
           >
            <View style= {{width: '90%', padding: 4, marginBottom: 20, marginTop: 20, borderRadius: 4, backgroundColor: '#535353', justifyContent: 'center', alignItems:'center'}}>
                <Text style={[styles.textMenu, {color: 'white'}]}>LIST A PROPERTY</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
        //    onPress={this.navigateToScreen('Payment')}
           >
              <Text numberOfLines={1} style={styles.textMenu}>MENU</Text>
          </TouchableHighlight>
          <TouchableHighlight
           onPress={this.navigateToScreen('MainPage')}
           >
              <Text numberOfLines={1} style={styles.textMenu}>Home</Text>
          </TouchableHighlight>
          <TouchableHighlight
          //  onPress={this.navigateToScreen('')}
           >
              <Text numberOfLines={1} style={styles.textMenu}>Profile</Text>
          </TouchableHighlight>
          <TouchableHighlight
           onPress={this.navigateToScreen('PieDash')}
           >
              <Text numberOfLines={1} style={styles.textMenu}>Dashboard</Text>
          </TouchableHighlight>
          <TouchableHighlight
           onPress={this.navigateToScreen('ClientsHome')}
           >
              <Text numberOfLines={1} style={styles.textMenu}>Clients</Text>
          </TouchableHighlight>
          
          <TouchableHighlight
           onPress={this.navigateToScreen('Meetings')}
           >
              <Text numberOfLines={1} style={styles.textMenu}>Meetings</Text>
          </TouchableHighlight>
          <TouchableHighlight
          //  onPress={this.navigateToScreen('')}
           >
              <Text numberOfLines={1} style={styles.textMenu}>Property Listing</Text>
          </TouchableHighlight>

          <TouchableHighlight
        //    onPress={this.navigateToScreen('LoginScreen')}
           >
              <Text numberOfLines={2} style={styles.textMenu}>LOGOUT</Text>
          </TouchableHighlight>
        </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    image:{
      width: 60,
      height: 60,
      borderRadius: 60/2
    },
    textUserName:{
      ...Platform.select({
        ios: {
          width:screen.width-200,
          marginRight:20,
          fontSize:width / (width / 12) + 4,
          fontWeight: 'bold',
          marginLeft: 15,
          textAlign:'center',
        },
        android: {
          width:screen.width-200,
          marginRight:20,
          fontSize:width / (width / 12) + 4,
          marginLeft: 15,
          textAlign:'center',
        }
      })
    },
    textMenu:{
      ...Platform.select({
        ios: {
          fontSize:width / (width / 12) + 6,
          marginLeft: 0,
          fontWeight: '600',
          paddingLeft:20,
          paddingRight: 20,
          paddingTop: 15,
          paddingBottom: 15,
        },
        android: {
          fontSize:width / (width / 12) + 6,
          marginLeft: 0,
          paddingLeft:20,
          paddingRight: 20,
          paddingTop: 15,
          paddingBottom: 15,
        }
      })
    },
    profileContainer:{
      flexDirection:'row',
      padding: 20,
      alignItems: 'center',
      marginTop: 10,
    },
    bottom:{
      position: 'absolute',bottom:0,width:'100%'
    }
  });

  export default Drawer;
