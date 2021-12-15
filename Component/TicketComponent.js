import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
}from 'react-native'

export default function Ticket(){
    return (
        <View style={styles.container}>
            <View style={styles.ticketId}>
                <Text>qwert</Text>
                <Text>qwert</Text>
                <Text>qwert</Text>
            </View>
            <View style={styles.ticketInfo}>
                <Text>Sink Repair</Text>
                <Text>
                    ssds
                </Text>
            </View>
            <View style={styles.viewTicket}>
                <TouchableOpacity style={styles.viewTicketBtn}>
                    <Text style={{color: '#ffffff'}}>View Ticket</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: 100,
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewTicketBtn: {
        backgroundColor: '#3dcb01',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    ticketId: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    ticketInfo: {
        flexDirection: 'column',
        justifyContent: 'center'

    },
    viewTicket: {
        flexDirection: 'column',
        justifyContent: 'center'
    }
})