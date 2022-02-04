import React,{ useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import moment from 'moment';
import { openDatabase } from 'react-native-sqlite-storage'

const db = openDatabase({
    name: 'test'
  });

export default function WorkTicketScreen({navigation}) {

    const [selectedItem, setSelectedItem] = useState();

    useEffect(() => {
        db.transaction((tranx) => {
            tranx.executeSql(
                "SELECT * FROM tickets WHERE id = ?",
                [navigation.state.params],
                (_, res) => {
                    const rawresult = res.rows.raw()
                    setSelectedItem(rawresult);
                }
            )
        });
    },[])

    const openMap = () =>{
        navigation.navigate('OpenMap');
    };

    const date = moment().format("LLLL");

    if (selectedItem != null){
        return (
            <View style={styles.mainContainer}>
                    <View style={styles.container}>
                        <View style={styles.wrapper}>
                            <Text style={styles.titles}>Customer Info:</Text>
                            <Text style={styles.info}>{selectedItem[0].customerName}, {selectedItem[0].id}</Text>
                        </View>
                        <View style={styles.wrapper}>
                            <Text style={styles.titles}>Schedule For:</Text>
                            <Text style={styles.info}>{selectedItem[0].schedule}</Text>
                        </View>
                    </View>
                    <View style={styles.containerNoPadding}>
                        <View style={styles.leftContainer}>
                            <View style={styles.flexRow}>
                                <View style={styles.wrapper}>
                                    <Text style={styles.titles}>Job Site Addres:</Text>
                                    <Text style={styles.info}>{selectedItem[0].address}</Text>
                                </View>
                                <View style={styles.wrapper,{alignContent: 'flex-end'}}>
                                    <TouchableOpacity style={styles.getDirectionBnt} onPress={openMap}>
                                        <Text style={{color: '#ffffff'}}>Get Direction</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.titles}>Distance:</Text>
                                <Text style={styles.info}> Approx. 17 minutes</Text>
                                <Text>{selectedItem[0].distance}</Text>
                            </View>
                        </View>
                        <View style={styles.wrapper}>
                            <View style={styles.containerNoFlex}>
                                <Text style={styles.titles}>Dispatch Note:</Text>
                                <Text style={styles.dispatchNoteInfo}>
                                    {selectedItem[0].dispatchNote}
                                </Text>
                            </View>

    
                            <View>
                                <View style={styles.flexRow}>
                                    <View style={styles.flexRow}>
                                        <Text style={styles.titles}>Dept. Class:</Text>
                                        <Text style={styles.info}>{selectedItem[0].departmentClass}</Text>
                                    </View>
                                    <View style={styles.flexRow}>
                                        <Text style={styles.titles}>Service Type:</Text>
                                        <Text style={styles.info}>{selectedItem[0].serviceType}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
            </View>
        )
    }
    return(
        <Text>No Data Found</Text>
    )
    
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: '#ffffff'
    },
    container: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#d5d3d3',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerNoPadding: {
        borderBottomWidth: 1,
        borderBottomColor: '#d5d3d3',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerNoFlex: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#d5d3d3',
    },
    constPadding:{
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    flexRow:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    wrapper: {
        width: '50%',
    },
    titles: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
        color: '#9c9c9c'
    },
    info: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#676767'
    },
    leftContainer: {
        width: '50%',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRightWidth: 1,
        borderRightColor: '#d5d3d3'
    },
    rightContainer: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        width: '50%'
    },
    dispatchNoteInfo: {
        fontSize: 15,
    },
    getDirectionBnt: {
        width: 150,
        backgroundColor: '#3dcb01',
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: 'center',
    }
})