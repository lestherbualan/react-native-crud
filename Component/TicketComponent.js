import React from 'react'
import { useState,useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView
}from 'react-native'

export default function Ticket(props){
    const [ticketData, setTicketData] = useState([]);
    const viewTicketHandler = (itemId) => {
        props.navigation.navigate('WorkTicket',itemId);
    }

    useEffect(() => {
        setTicketData(props.data);
    },[ticketData])
    return (
        <ScrollView>
            {ticketData.map(item => {
                return (
                    <View style={styles.container} key={item.id}>
                        <View style={styles.ticketId}>
                            <Text>11:35 AM</Text>
                            <Text>12/24/22</Text>
                            <Text>Ticket #: {item.id}</Text>
                        </View>
                        <View style={styles.ticketInfo}>
                            <Text>{item.ticketTitle}</Text>
                            <Text>
                                {item.address}
                            </Text>
                        </View>
                        <View style={styles.viewTicket}>
                            <TouchableOpacity style={styles.viewTicketBtn} onPress={()=>{
                                viewTicketHandler(item.id)
                            }}>
                                <Text style={{color: '#ffffff'}}>View Ticket</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            })}
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: 120,
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    viewTicketBtn: {
        backgroundColor: '#3dcb01',
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: 'center',
    },
    ticketId: {
        justifyContent: 'center',
        width: '25%',
        borderRightWidth: 1,
        borderRightColor: '#eee',
        paddingHorizontal: 15
    },
    ticketInfo: {
        justifyContent: 'center',
        width: '50%',
        paddingHorizontal: 15
    },
    viewTicket: {
        justifyContent: 'center',
        width: '25%',
        padding: 25
    }
})