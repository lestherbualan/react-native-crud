import React, {useEffect,useState} from 'react'
import {
    Text,
    TextInput,
    StyleSheet,
    View,
    ScrollView,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage'

const db = openDatabase({
    name: 'test'
  });

export default function AddTicketScreen(){

    const [ticketInfo, setTicketInfo] = useState({
        ticketTitle: '',
        customerName: '',
        customerNumber: '',
        schedule: '',
        address: '',
        dispatchNote: '',
        departmentClass: '',
        serviceType: '',
        reason: ''
    })
    const changeTextHandler = (val, field) => {
        setTicketInfo({ ...ticketInfo, [field]: val })
    }

    const onSubmit = () =>{
        db.transaction((tranx) => {
            tranx.executeSql(
                "INSERT INTO tickets(ticketTitle,customerName,customerNumber,schedule,address,distance,dispatchNote,departmentClass,serviceType,reason) VALUES ('" + ticketInfo.ticketTitle +"','" + ticketInfo.customerName +"','" + ticketInfo.customerNumber +"','" + ticketInfo.schedule +"','" + ticketInfo.address +"','" + ticketInfo.dispatchNote +"','" + ticketInfo.departmentClass +"','" + ticketInfo.serviceType +"','" + ticketInfo.reason +"')"
            )
        });
    }

    return (
        <ScrollView>
            <SafeAreaView>
                <View style={{width: 400}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Ticket Title"
                        onChangeText={value => {
                            changeTextHandler(value, 'ticketTitle')
                        }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Customer Name"
                        onChangeText={value => {
                            changeTextHandler(value, 'customerName')
                        }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Customer Number"
                        onChangeText={value => {
                            changeTextHandler(value, 'customerNumber')
                        }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Schedule"
                        onChangeText={value => {
                            changeTextHandler(value, 'schedule')
                        }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Address"
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={value => {
                            changeTextHandler(value, 'address')
                        }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Dispatch Note"
                        onChangeText={value => {
                            changeTextHandler(value, 'dispatchNote')
                        }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Department Class"
                        onChangeText={value => {
                            changeTextHandler(value, 'departmentClass')
                        }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Service Type"
                        onChangeText={value => {
                            changeTextHandler(value, 'serviceType')
                        }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Reason for Call"
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={value => {
                            changeTextHandler(value, 'reason')
                        }}
                    />
                    <TouchableOpacity style={styles.AddTicket} onPress={onSubmit}>
                        <Text style={{color: '#ffffff'}}>Add Ticket</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
        
    );
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    AddTicket: {
        width: 400,
        backgroundColor: '#3dcb01',
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: 'center',
    }
  });