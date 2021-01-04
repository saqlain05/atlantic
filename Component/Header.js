import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <View style={{marginTop:20}}>
        <View style={styles.mainDiv}>
            <Text style={styles.saqlain}>
                HEADER
            </Text>
            <Text style={styles.saqlain}>
                HEADER
            </Text>
            <Text style={styles.saqlain}>
                HEADER
            </Text>
        </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    mainDiv :{
        width: "100%",
        height: 50,
        backgroundColor:'#FFFFFF',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal: 15,
        top: 0,
        position:'absolute',
        marginBottom:5
        // borderWidth: 1
    },
  

})
