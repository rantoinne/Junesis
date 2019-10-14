import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar,
        Image, TextInput } from "react-native";
// import { goToScreen } from "../../utility/goToScreen";

const btn_grey_back_arrow = require("../../../assets/images/btn_grey_back_arrow.png")



class SignUp extends Component{
constructor(props){
    super(props)
    this.state = {
        userType: this.props.userType,
        // userType: "USER",
        step: 1, 
        authData: {
            name: {
                value: '',
                valid: ""
            },
            email: {
              value: '',
              valid: ""
            },
            password: {
              value: '', 
              valid: ""
            },
            contact: {
                value: '', 
                valid: ""
            },
            address: {
                value: '', 
                valid: ""
            },
            adhaar: {
                value: '', 
                valid: ""
            },
            companyName: {
                value: '', 
                valid: ""
            },
            companyAddress: {
                value: '', 
                valid: ""
            },
          }
    }
}

componentDidMount = () => {
    
      
}

backButton = () => {
    let count = parseInt(this.state.step) - 1
    if(count < 1){
        this.props.navigation.navigate('Login');
    }
    this.setState({
        step: count
    })
}

nextStep = () => {
    let count = parseInt(this.state.step) + 1;
    this.setState({
        step: count
    }) 
}

submitButton = () => {
    console.warn("Submit Button")
}

render() {
    console.warn("userType", this.state.userType)
    console.warn("step", this.state.step)
    let loadUi = null;
    let button = null;

    let user = null;
    if(this.state.userType === "USER"){
        user = null
    }else{
        user = "as Broker"
    }

    if(this.state.step === 1){
        loadUi = <View>
                    <Text style={{color: "#535353", fontSize: 16, marginTop: 30, marginBottom: 10}}>Name</Text>
                        <View style={{borderWidth: 1, borderColor: "#D6D6D6", height: 40, justifyContent: "center", paddingLeft: 5, borderRadius: 3}}>
                        <TextInput
                            onChangeText={(val) => this.setState({ authData: {
                                                                    name: {
                                                                    value: val
                                                                    }
                                                                }
                                                                })}/>
                        </View>

                    <Text style={{color: "#535353", fontSize: 16, marginTop: 30, marginBottom: 10 }}>E-mail</Text>
                        <View style={{borderWidth: 1, borderColor: "#D6D6D6", height: 40, justifyContent: "center", paddingLeft: 5, borderRadius: 3}}>
                        <TextInput
                            onChangeText={(val) => this.setState({ authData: {
                                                                    email: {
                                                                    value: val
                                                                    }
                                                                }
                                                                })}/>
                        </View>

                    <Text style={{color: "#535353", fontSize: 16, marginTop: 30, marginBottom: 10 }}>Password</Text>
                        <View style={{borderWidth: 1, borderColor: "#D6D6D6", height: 40, justifyContent: "center", paddingLeft: 5, borderRadius: 3}}>
                        <TextInput
                            onChangeText={(val) => this.setState({ authData: {
                                                                    password: {
                                                                    value: val
                                                                    }
                                                                }
                                                                })}/>
                        </View>
                </View>
        
    }else if(this.state.step === 2){
        loadUi = <View>
                    <Text style={{color: "#535353", fontSize: 16, marginTop: 30, marginBottom: 10}}>Contact Number</Text>
                        <View style={{borderWidth: 1, borderColor: "#D6D6D6", height: 40, justifyContent: "center", paddingLeft: 5, borderRadius: 3}}>
                        <TextInput
                            onChangeText={(val) => this.setState({ authData: {
                                                                    number: {
                                                                    value: val
                                                                    }
                                                                }
                                                                })}/>
                        </View>

                    <Text style={{color: "#535353", fontSize: 16, marginTop: 30, marginBottom: 10 }}>Address</Text>
                        <View style={{borderWidth: 1, borderColor: "#D6D6D6", height: 121, justifyContent: "center", paddingLeft: 5, borderRadius: 3}}>
                        <TextInput
                            onChangeText={(val) => this.setState({ authData: {
                                                                    address: {
                                                                    value: val
                                                                    }
                                                                }
                                                                })}/>
                        </View>

                    <Text style={{color: "#535353", fontSize: 16, marginTop: 30, marginBottom: 10 }}>Adhaar</Text>
                        <View style={{borderWidth: 1, borderColor: "#D6D6D6", height: 40, justifyContent: "center", paddingLeft: 5, borderRadius: 3}}>
                        <TextInput
                            onChangeText={(val) => this.setState({ authData: {
                                                                    adhaar: {
                                                                    value: val
                                                                    }
                                                                }
                                                                })}/>
                        </View>
                </View>
    }else if(this.state.step === 3){
        if(this.state.userType === "USER"){
            loadUi = <View>
                        <Text>Profile Complete</Text>
                    </View>
        }else if(this.state.userType === "BROKER"){
            loadUi = <View>
                        <Text style={{color: "#535353", fontSize: 16, marginTop: 30, marginBottom: 10}}>Company Name</Text>
                            <View style={{borderWidth: 1, borderColor: "#D6D6D6", height: 40, justifyContent: "center", paddingLeft: 5, borderRadius: 3}}>
                            <TextInput
                                onChangeText={(val) => this.setState({ authData: {
                                                                        companyName: {
                                                                        value: val
                                                                        }
                                                                    }
                                                                    })}/>
                            </View>

                        <Text style={{color: "#535353", fontSize: 16, marginTop: 30, marginBottom: 10 }}>Address</Text>
                            <View style={{borderWidth: 1, borderColor: "#D6D6D6", height: 121, justifyContent: "center", paddingLeft: 5, borderRadius: 3}}>
                            <TextInput
                                onChangeText={(val) => this.setState({ authData: {
                                                                        companyAddress: {
                                                                        value: val
                                                                        }
                                                                    }
                                                                    })}/>
                            </View>
                    </View>
        }
    }else if(this.state.step === 4){
        loadUi = <View>
                        <Text>Profile Complete</Text>
                    </View>

    }

    if(this.state.step === 3){
        if(this.state.userType === "USER"){
            button = <View>
                    <TouchableOpacity onPress={() => this.submitButton()}
                        style={{backgroundColor: "#535353", height: 50, marginTop: 30, 
                            width: "47%", alignItems: "center", justifyContent: "center"}}>
                        <Text style={{color: "#FFFFFF", fontSize: 18}}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
        }else{
            button = <View>
                    <TouchableOpacity onPress={() => this.nextStep()}
                        style={{backgroundColor: "#535353", height: 50, marginTop: 30, 
                            width: "47%", alignItems: "center", justifyContent: "center"}}>
                        <Text style={{color: "#FFFFFF", fontSize: 18}}>NEXT</Text>
                    </TouchableOpacity>
                </View>
        }
    }else if(this.state.step === 4){
        button = <View>
                <TouchableOpacity onPress={() => this.submitButton()}
                    style={{backgroundColor: "#535353", height: 50, marginTop: 30, 
                        width: "47%", alignItems: "center", justifyContent: "center"}}>
                    <Text style={{color: "#FFFFFF", fontSize: 18}}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
    }else {
        button = <View>
                    <TouchableOpacity onPress={() => this.nextStep()}
                        style={{backgroundColor: "#535353", height: 50, marginTop: 30, 
                            width: "47%", alignItems: "center", justifyContent: "center"}}>
                        <Text style={{color: "#FFFFFF", fontSize: 18}}>NEXT</Text>
                    </TouchableOpacity>
                </View>
    }


  return (
      <SafeAreaView style={{flex:1}}> 
         <View style={{height: 50, backgroundColor: "#FFFFFF", borderBottomColor: "#F6F6F6", borderBottomWidth: 1,
                flexDirection: "row", paddingRight: 29, paddingLeft: 29}}>
            <TouchableOpacity onPress={() => this.backButton()}>
                <View style={{justifyContent: "center", flex: 1}}>
                    <Image source={btn_grey_back_arrow} style={{height: 13, width: 7}} />
                </View>
            </TouchableOpacity>
            <View style={{justifyContent: "center", flex: 10, paddingLeft: 20}}>
                <Text style={{color: "#707070", fontSize: 20, fontFamily: "Cinzel-Regular"}}>JUNESIS</Text>
            </View>
        </View>
        <View style={{paddingTop: 32, paddingLeft: 29, paddingRight: 29}}>
            <View style={{flexDirection: "row"}}>
                <Text style={{fontSize: 20, color: "#535353"}}>Sign Up</Text>
                <Text style={{fontSize: 20, color: "#535353"}}> {user}</Text>
            </View>
            {loadUi}
            {button}

            
            
        </View>          
            
        
      </SafeAreaView>
  );
}
}

export default SignUp;