import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {TextInput} from 'react-native-paper'

const CommonForm = () => {
    const [name, setName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [mobile, setMobile] = useState("");
    return (
        <View style={styles.cfmainDiv}>
    
            <View style={styles.form}>
                <TextInput style={styles.input} theme={theme} label="First Name" value={name} mode="outlined" onChangeText={text => setName(text)}  />
                <TextInput style={styles.input} theme={theme} label="Last Name" value={lname} mode="outlined" onChangeText={text => setLName(text)}  />
                <TextInput style={styles.input} theme={theme} label="Email" value={email} mode="outlined" onChangeText={text => setEmail(text)}  />
                
                <View style={styles.mob}>
                <TextInput style={styles.codeinput} keyboardType="number-pad" theme={theme} label="Code" value={code} mode="outlined" onChangeText={text => setCode(text)}  />
                <TextInput style={styles.mobinput} keyboardType="number-pad" theme={theme} label="Mobile" value={mobile} mode="outlined" onChangeText={text => setMobile(text)}  />
                </View>
                <View style={styles.changePassword}>
                    <Text style={styles.changePasswordText}>Change Password</Text>
                    <Text style={styles.changePasswordText} > > </Text>
                </View>
                <View style={styles.signout}>
                    <Text style={styles.signoutText}>SignOut</Text>
                </View>
            </View>
        </View>
    )
}

const theme ={
    colors:{
        primary:"black"
    }
}

export default CommonForm


const styles = StyleSheet.create({
 
    form:{
        width:"95%",
        marginHorizontal: 10
    },
    input:{
        marginTop: 2,
        backgroundColor:"white",
        marginTop: 5
    },
    changePassword:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop: 10,
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
    changePasswordText:{
        fontSize: 20
    },
    signout:{
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomWidth: 1,
    },
    signoutText:{
        fontSize: 20,
        color:"red",
        fontWeight: "600"
    },
    mob:{
        flexDirection:"row",
        width:"100%",
        marginTop: 5
    },
    codeinput:{
        width:"25%",
        marginRight:16,
        backgroundColor:"white"
    },
    mobinput:{
        width:"70%",
        backgroundColor:"white"
    },
    profile:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        height: 70,
        padding: 5
    },
    profileText:{
        fontSize: 20,
        fontWeight:"700"
    }
})
