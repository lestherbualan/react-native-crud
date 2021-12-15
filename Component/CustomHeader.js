import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ToastAndroid
} from 'react-native'
import Fontawesome from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

export default function DashboardHeader(){
    const showToast = () =>{
        ToastAndroid.show('This is toast!',ToastAndroid.SHORT);
    }
    return (
        <View style={styles.container}>
            <View style={styles.leftHeaderContainer}>
                <TouchableOpacity onPress={showToast}>
                    <View style={styles.headerItems,{marginRight: 10}}>
                        <Fontawesome name='calendar' size={20} color='green' style={{width: 20, alignSelf: 'center'}}/>
                        <Text style={styles.headerItemText}>Calendar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={showToast}>
                    <View style={styles.headerItems}>
                        <Fontawesome name='sync' size={20} color='green' style={{width: 20, alignSelf: 'center'}}/>
                        <Text style={styles.headerItemText}>Sync</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.centerHeaderContainer}>
                <Text style={styles.dashboardText}>Dashboard</Text>
            </View>
            <View style={styles.rightHeaderContainer}>
                <TouchableOpacity onPress={showToast}>
                    <View style={styles.headerItems,{marginRight: 10}}>
                        <Fontawesome name='plus' size={20} color='green' style={{width: 20, alignSelf: 'center'}}/>
                        <Text style={styles.headerItemText}>New</Text>
                    </View>
                </TouchableOpacity>             
                <TouchableOpacity onPress={showToast}>
                    <View style={styles.headerItems}>
                        <Entypo name='menu' size={20} color='green' style={{width: 20, alignSelf: 'center'}}/>
                        <Text style={styles.headerItemText}>Menu</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    leftHeaderContainer: {
        flexDirection: 'row',
        width: 100,
        justifyContent: 'flex-start'
    },
    centerHeaderContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    rightHeaderContainer: {
        flexDirection: 'row',
        width: 100,
        justifyContent: 'flex-end',
    },
    dashboardText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    headerItems: {
        flexDirection: 'column',
    },
    headerItemText: {
        color: 'green'
    }
})