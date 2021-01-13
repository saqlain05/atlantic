import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Search = () => {
    return (
        < View style={styles.margin}>
            <View style={styles.view}>
                <Text style={styles.title}>
                    Welcome to Atlantis Laundry
                </Text>
                <View style={styles.location}>
                    <Text style={styles.chhose}>
                        Choose your location
                    </Text>
                    <TextInput
                        style={styles.locationArea}
                        placeholder="Search Location"
                    />
                </View>

            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    margin:{
        
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#fff"
    },
    view:{
        width: "96%" ,
        marginHorizontal: "auto",
        // borderWidth: 2,
        paddingBottom: 10,
    },
    title :{
        fontWeight:"700",
        fontSize: 23, 
        width:'70%',
        paddingLeft:5
    },
    location:{
        width: '100%',
        marginTop: 8,
        paddingLeft: 5
        // borderWidth: 5
    },
    choose:{
        color:'#c4c4c4',
        
    },
    locationArea:{
        marginTop: 8,
        width:"100%",
        height: 35,
        backgroundColor:"#EAEFF2",
        paddingLeft:15,
        borderRadius:50,
        borderWidth:0,
    }
    
})
