import React from 'react';
import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import DashboardScreen from "../Screens/DashboardScreen"
import GetDirectionScreen from "../Screens/GetDirectionScreen"
import WorkTicketScreen from "../Screens/WorkTicketScreen"
import CustomHeader from '../Component/CustomHeader'
import AddTicketScreen from '../Screens/AddTicketScreen';
import MapScreen from '../Screens/MapScreen';

const screens = {
    Dashboard: {
        screen: DashboardScreen,
        navigationOptions: ({navigation}) => ({
            headerTitle: () => <CustomHeader navigation = { navigation }/>
        })
    },
    GetDirection: {
        screen: GetDirectionScreen
    },
    WorkTicket: {
        screen: WorkTicketScreen
    },
    AddTicket: {
        screen: AddTicketScreen
    },
    OpenMap: {
        screen: MapScreen
    }
}

const routeStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: '#eee',
            height: 70,
            
        }
    }
});

export default createAppContainer(routeStack);