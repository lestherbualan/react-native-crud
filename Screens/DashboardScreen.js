import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView
} from 'react-native'

import Ticket from '../Component/TicketComponent'

import moment from 'moment'

export default function DashboardScreen() {
    const date = moment().format("ll");

    return (
        <View style={styles.mainContainer}>
            <View style={styles.dateWrapper}>
                <Text style={{fontSize: 16 }}>{date}</Text>
            </View>
            <View style={styles.container}>
                <ScrollView>
                    <Ticket />
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#e9e9e9',
        flexDirection: 'column'
    },
    dateWrapper: {
        paddingHorizontal: '10%',
    },
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingHorizontal: '10%',
        paddingVertical: 20
    }
})