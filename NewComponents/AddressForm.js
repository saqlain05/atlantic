import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import {TextInput} from 'react-native-paper'

const AddressForm = () => {
    const [name, setName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [mobile, setMobile] = useState("");
    return (
        <View style={styles.add}>
            <View style={styles.profile}>
                <Text style={styles.profileText}> X </Text>
                <Text style={styles.profileText}> Address Details </Text>
                <Text style={styles.profileText}>   </Text>
            </View>
            <View style={styles.map}>
                <Image style={styles.mapImg} source={{uri:"https://miro.medium.com/max/4064/1*qYUvh-EtES8dtgKiBRiLsA.png"}} />
            </View>
            <View style={styles.area}>
                <Text style={styles.areaText}>Area</Text>
               <View style={styles.area2}>
               <Text style={styles.area2Text}>Ain Khalad</Text>
                <Text style={styles.area2Text2}>CHANGE</Text>
               </View>
               <Text style={styles.areaText}>Nick Name</Text>
                <View style={styles.nickname}>
                    <Text>Home</Text>
                    <Text>Hotel</Text>
                    <Text style={styles.nicknameText}>Customer</Text>
                </View>
            </View>
            <View style={styles.form}>
                <TextInput style={styles.input} theme={theme} label="First Name" value={name} mode="outlined" onChangeText={text => setName(text)}  />
                <TextInput style={styles.input} theme={theme} label="Last Name" value={lname} mode="outlined" onChangeText={text => setLName(text)}  />
                <TextInput style={styles.input} theme={theme} label="Email" value={email} mode="outlined" onChangeText={text => setEmail(text)}  />
                <TextInput style={styles.input} theme={theme} label="Email" value={email} mode="outlined" onChangeText={text => setEmail(text)}  />
                <TextInput style={styles.input} theme={theme} label="Email" value={email} mode="outlined" onChangeText={text => setEmail(text)}  />
                
                <View style={styles.mob}>
                <TextInput style={styles.codeinput} keyboardType="number-pad" theme={theme} label="Code" value={code} mode="outlined" onChangeText={text => setCode(text)}  />
                <TextInput style={styles.mobinput} keyboardType="number-pad" theme={theme} label="Mobile" value={mobile} mode="outlined" onChangeText={text => setMobile(text)}  />
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
export default AddressForm

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
    },
    map:{
        width: "100%" ,
    },
    mapImg:{
        width:"100%",
        height: 150
    },
    area:{
        marginLeft: 15
    },
    areaText:{
        fontSize: 19,
        marginTop: 10,
        marginBottom: 10,
        color:"#c1c1c1"
    },
    area2:{
        flexDirection:"row",
    },
    area2Text:{
        marginRight: 10,
        fontSize: 16,
    },
    area2Text2:{
        color:"purple",
        fontWeight: "700",
        fontSize: 16
    },
    nickname:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom: 25
    },
    nicknameText:{
        marginRight: 25
    }
   
})
