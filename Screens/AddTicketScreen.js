import React from 'react'
import {
    Text,
    TextInput,
    StyleSheet,
    View,
    ScrollView,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';

export default function AddTicketScreen(){
    return (
        <ScrollView>
            <SafeAreaView>
                <View style={{width: 400}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Ticket Title"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Customer Name"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Customer Number"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Schedule"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Address"
                        multiline={true}
                        numberOfLines={4}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Dispatch Note"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Department Class"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Service Type"
                    />
                    <TouchableOpacity style={styles.AddTicket}>
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