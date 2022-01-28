import React, {useEffect,useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView
} from 'react-native'
import Ticket from '../Component/TicketComponent'
import moment from 'moment'
import { openDatabase } from 'react-native-sqlite-storage'

const db = openDatabase({
    name: 'test'
  });

export default function DashboardScreen({navigation}) {
    const date = moment().format("ll");

    const [tickets, setTickets] = useState(null);
    
    useEffect(() => {
        db.transaction((tranx) => {
            /*
            tranx.executeSql(
                `INSERT INTO tickets (
                    ticketTitle,
                    customerName,
                    customerNumber,
                    schedule,
                    address,
                    distance,
                    dispatchNote,
                    departmentClass,
                    serviceType,
                    reason
                ) VALUES (
                    'Sink Repair',
                    'Lesther Bualan',
                    '012345678910',
                    'Saturday, January 17, 2021 7:00 AM',
                    'Mahaplag Leyte',
                    '1.7 miles',
                    'this is a dispatch note, i want to become a king of a pirate jahaahaha',
                    'Plumbing',
                    'Call Back',
                    'Low water pressure'
                )`
            ),*/
            tranx.executeSql(
                "SELECT * FROM tickets",
                [],
                (_, res) => {
                    setTickets(res.rows.raw())
                }
            )
        })
    })
    return (
        <View style={styles.mainContainer}>
            <View style={styles.dateWrapper}>
                <Text style={{fontSize: 16 }}>{date}</Text>
            </View>
            <View style={styles.container}>
                {tickets? <Ticket navigation={navigation} data={tickets}/>: null}
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