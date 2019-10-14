
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, 
  SafeAreaView, StatusBar, Image, TextInput } from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { LoginManager } from "react-native-fbsdk";
// import { Navigation } from "react-native-navigation"
// import { goToScreen } from '../../utility/goToScreen';

const btn_facebook_login = require("../../../assets/images/btn_facebook_login.png")
const btn_google_login = require("../../../assets/images/btn_google_login.png")

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

GoogleSignin.configure({
  iosClientId: '358361541444-m43is9q1roicipcs6qro16i78ms8gscd.apps.googleusercontent.com',
  webClientId: '358361541444-ebl7vs6v4bisa5bk2j1aru8gi0lb4r2s.apps.googleusercontent.com',
})

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      authData: {
        email: {
          value: '',
          valid: ""
        },
        password: {
          value: '', 
          valid: ""
        }
      }
    }
  }

  goForSignUp = (userType) => {
    this.props.navigation.navigate('SignUp')
  }

  fLogin = () => {
    LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_likes']).then({
        function(result) {
            if (result.isCancelled) {
                alert('Login was cancelled');
            } else {
                AccessToken.getCurrentAccessToken().then((accessTokenData) => {
                    const credential = firebase.auth.FacebookAuthProvider.credential(accessTokenData.accessToken);
  
                    firebase.auth().signInWithCredential(credential).then((result) =>{
                        alert('Successful login');
                    }, (error)=>{
                        console.log(error)
                    })
                });
            }
        },
        function(error) {
            alert('Login failed with error: ' + error);
        }
      })
    }

    onLogin = () => {
      
      GoogleSignin.signIn()
      .then((user) => {
          console.warn("user", user)
          alert("Logged in with "+user.user.givenName)
          this.setState({
              user: user
          })
      })
      .catch((error) => {
          console.warn("Sign In ", error)
      })
      .done();

  }
    
  render() {
    return (
      <SafeAreaView style={{flex: 1}}> 
        <View> 
          <StatusBar backgroundColor={"#FF9F43"} barStyle={'dark-content'} translucent={false} />
          <View style={{marginTop: 84, alignItems: "center", justifyContent: "center"}}>
            <Text style={{color: "#707070", fontSize: 30, fontFamily: "Cinzel-Regular"}}>JUNESIS</Text>
          </View>
          <View style={{marginTop: 41, marginLeft: 29, marginRight: 29}}>
                <Text style={{color: "#535353", fontSize: 16, marginBottom: 10}}>E-mail</Text>
                <View style={{borderWidth: 1, borderColor: "#D6D6D6", height: 40, justifyContent: "center", paddingLeft: 5, borderRadius: 3}}>
                  <TextInput
                    onChangeText={(text) => this.setState({ authData: {
                                                            email: {
                                                              value: text
                                                            }
                                                        }
                                                      })}/>
                </View>

                <Text style={{color: "#535353", fontSize: 16, marginTop: 33, marginBottom: 10 }}>Password</Text>
                <View style={{borderWidth: 1, borderColor: "#D6D6D6", height: 40, justifyContent: "center", paddingLeft: 5, borderRadius: 3}}>
                  <TextInput
                    onChangeText={(text) => this.setState({ authData: {
                                                        password: {
                                                          value: text
                                                        }
                                                      }
                                                    })}/>
                </View>
          </View>
          
          <View style={{flexDirection: "row", marginTop: 40, marginLeft: 29, marginRight: 29}}>
            <TouchableOpacity style={{backgroundColor: "#535353", height: 50, 
                width: "47%", alignItems: "center", justifyContent: "center"}}>
              <Text style={{color: "#FFFFFF", fontSize: 18}}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderWidth: 1, borderColor: "#A3A3A3", height: 50,
                width: "47%", alignItems: "center", justifyContent: "center", marginLeft: 20}}
                onPress={() => this.goForSignUp("USER")}>
              <Text style={{color: "#A3A3A3", fontSize: 18}}>SIGN UP</Text>
            </TouchableOpacity>                                      
          </View>

          <View style={{flexDirection: "row", marginTop: 35, marginLeft: 29, marginRight: 29}}>
            <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => this.goForSignUp("Listing")}>
                <Text style={{color: "#535353", fontSize: 14}}>SIGN UP AS A BROKER</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, alignItems: "flex-end"}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('MainPage')}                  
                style={{borderColor: "#A3A3A3", borderBottomWidth: 1, borderBottomColor: "#A3A3A3"}}>
                <Text style={{color: "#A3A3A3", fontSize: 16}}>Skip login</Text>
              </TouchableOpacity>
            </View>                             
          </View>

          <View style={{borderTopWidth: 1, borderTopColor: "#D6D6D6", borderRadius: 5, marginTop: 29, marginLeft: 29, marginRight: 29}}></View>

          <View style={{alignItems: "center", justifyContent: "center"}}>
            <Text style={{fontSize: 18, color: "#A3A3A3", marginTop: 21}}>Social Login</Text>
          </View>
          
          <View style={{flexDirection: "row", marginTop: 20, alignItems: "center", justifyContent: "center"}}>
           <TouchableOpacity 
              onPress={() => this.fLogin()}>
              <Image source={btn_facebook_login} style={{height: 38, width: 38}} /> 
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 69}}
                onPress={this.onLogin.bind(this)}>
              <Image source={btn_google_login} style={{height: 38, width: 38}} /> 
            </TouchableOpacity> 
          </View>  
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});



//FaaceBook Login with Button

{/* <LoginButton
                onLoginFinished={
                  (error, result) => {
                    if (error) {
                      console.warn("login has error: " +error);
                    } else if (result.isCancelled) {
                      console.warn("login is cancelled.");
                    } else {
                      alert("Login in Success")
                      AccessToken.getCurrentAccessToken().then(
                        (data) => {
                            console.warn("Login in Success")
                            alert("Login in Success")
                          console.warn(data.accessToken.toString())
                        }
                      )
                    }
                  }
                }
                onLogoutFinished={() => console.warn("logout.")}/>                 */}