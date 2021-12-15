import React from 'react';
import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import DashboardScreen from "../Screens/DashboardScreen"
import GetDirectionScreen from "../Screens/GetDirectionScreen"
import WorkTicketScreen from "../Screens/WorkTicketScreen"
import CustomHeader from '../Component/CustomHeader'

const screens = {
    Dashboard: {
        screen: DashboardScreen,
        navigationOptions: {
            headerTitle: ()=> <CustomHeader />
        }
    },
    GetDirection: {
        screen: GetDirectionScreen
    },
    WorkTicket: {
        screen: WorkTicketScreen
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