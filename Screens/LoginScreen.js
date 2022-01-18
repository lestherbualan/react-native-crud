import React, { useState, useEffect } from 'react';
import {
    Text,
    TextInput,
    StyleSheet,
    View,
    TouchableOpacity,
    Pressable,
    ToastAndroid
} from 'react-native';
import SQLite from 'react-native-sqlite-storage';

// const db = SQLite.openDatabase(
//     {
//         name: 'mainDatabase',
//         location: 'default'
//     },
//     ()=>{},
//     error => {console.log(error)}
// )

export default function LoginScreen(){
    // useEffect(()=>{
    //     console.log('hello world')
    //     createTable();
    // });

    // const createTable = ()=> {
    //     db.transaction((transact)=>{
    //         transact.executeSql('CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, Username TEXT, Password TEXT)')
    //     })
    // }
    return (
        <View style={style.container}>
            <View>
                <TextInput 
                    style={style.textInput}
                    placeholder='Your Username'
                />
                <TextInput
                    style={style.textInput} 
                    placeholder='Your Password'
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={style.loginBtn}
                    onPress={showToast}
                >
                    <Text style={style.loginBtnText}>Login</Text>
                </TouchableOpacity>
                <View style={{
                    alignItems: 'flex-end',
                    marginTop: 10
                }}>
                    <Pressable
                        onPress={showToast}
                    >
                        <Text>Forgot?</Text>
                    </Pressable>
                </View>
            </View>
            
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#f3f6f4",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        borderWidth: 2,
        padding: 10,
        width: 300,
        marginBottom: 10,
        borderRadius: 5,
        fontSize: 18,
        borderColor: '#3dcb01'
    },
    loginBtn: {
        backgroundColor: '#3dcb01',
        width: 300,
        alignItems: 'center',
        height: 55,
        borderRadius: 5,
        padding: 10
    },
    loginBtnText: {
        fontSize: 23,
        color: 'white'
    },
    forgot: {
        color: 'grey'
    }
});