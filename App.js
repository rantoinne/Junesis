import Home from "./App/Component/Home/Home";
import MainPage from "./App/Component/MainPage/MainPage";
import PropertyDetailView from "./App/Component/PropertyDetailView/PropertyDetailView";
import PropertySchedule from "./App/Component/PropertyDetailView/PropertyScheduled";
import Profile from "./App/Component/Profile/Profile";
import Bidding from "./App/Component/Bidding/Bidding";
import BiddingAcceptDeclined from "./App/Component/Bidding/BiddingAcceptDeclined";

import Notifications from "./App/Component/Notifications/Notifications";
import MeetingAcceptDeclined from "./App/Component/Notifications/MeetingAcceptDeclined";

import Meetings from "./App/Component/Meetings/Meetings";
import BrokerMeetingScreen from "./App/Component/Meetings/BrokerMeetingScreen";
import BuyerMeetingScreen from "./App/Component/Meetings/BuyerMeetingScreen";

import Listing from "./App/Component/PropertyListing/Listing";
import PropertyListingConfirmation from "./App/Component/PropertyListing/PropertyListingConfirmation";

import Login from "./App/Component/Login/Login";
import SignUp from "./App/Component/SignUp/SignUp";
import Drawer from './Drawer';

import SplashScreen from "./App/Component/SplashScreen/SplashScreen";
import MoneySpent from "./App/Component/DashBoard/MoneySpent";
import DemoMapView from "./App/Component/DemoMapView/DemoMapView";
import PieDash from "./App/Component/Login/Dashboard/PieDash";
import Clients from './App/Component/Clients/Clients';
import ClientsHome from './App/Component/Clients/ClientsHome';
import BrokerPayment from './App/Component/Broker/BrokerPayment';
import {Dimensions} from 'react-native'


import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';

const {width, height} = Dimensions.get('window')

const App = createStackNavigator({
  Splash: {
    screen: SplashScreen
  },
  Login: {
    screen: Login
  },
  SignUp: {
    screen: SignUp
  },
  BrokerPayment: {
    screen: BrokerPayment
  },
  PieDash: {
    screen: PieDash
  },
  Home: {
    screen: Home
  },
  MoneySpent: {
    screen: MoneySpent
  },
  MainPage: {
    screen: MainPage
  },
  PropertyDetailView: {
    screen: PropertyDetailView
  },
  PropertySchedule: {
    screen: PropertySchedule
  },
  Profile: {
    screen: Profile
  },
  Bidding: {
    screen: Bidding
  },
  BiddingAcceptDeclined: {
    screen: BiddingAcceptDeclined
  },
  Notifications: {
    screen: Notifications
  },
  Meetings: {
    screen: Meetings
  },
  MeetingAcceptDeclined: {
    screen: MeetingAcceptDeclined
  },
  BrokerMeetingScreen: {
    screen: BrokerMeetingScreen
  },
  BuyerMeetingScreen: {
    screen: BuyerMeetingScreen
  },
  Listing: {
    screen: Listing
  },
  PropertyListingConfirmation: {
    screen: PropertyListingConfirmation
  },
  DemoMapView: {
    screen: DemoMapView
  }
}, {
  defaultNavigationOptions:{
    header: null
  }
});

const AppDrawer=createDrawerNavigator({
  MainPage: {
    screen: MainPage
  },
  Listing: {
    screen: Listing
  },
  Clients: {
    screen: Clients
  },
  ClientsHome: {
    screen: ClientsHome
  },
  PieDash: {
    screen: PieDash
  },
  Meetings: {
    screen: Meetings
  },
  MeetingAcceptDeclined: {
    screen: MeetingAcceptDeclined
  },
  BrokerMeetingScreen: {
    screen: BrokerMeetingScreen
  },
  BuyerMeetingScreen: {
    screen: BuyerMeetingScreen
  },
},{
  initialRouteName:'MainPage', //change
  drawerWidth: width*3/4,
  contentComponent:Drawer,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  drawerPosition: 'right'
})

export default createAppContainer(
  createSwitchNavigator({
      AppDrawer,
      App
  })
)