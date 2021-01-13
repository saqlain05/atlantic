import React from 'react'
import { Platform, StyleSheet, Text, View,TouchableOpacity } from 'react-native'

const Footer3 = () => {
    return (
        <View style = { styles.MainContainer }>

               <View style={ styles.bottomView} >
               <TouchableOpacity>
               <Text style={ styles.Text1}>
                   PLACE TO ORDER
               </Text>
               </TouchableOpacity>
               
 
               </View>
 
            </View>
    )
}

export default Footer3

const styles = StyleSheet.create({
    MainContainer:
    {
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        // width: '100%', 
        // borderWidth: 2,
        height:80,
        backgroundColor:"#fff"
    },
 
    bottomView:{
//  borderWidth:2,
      width: '90%', 
      height: 65, 
      backgroundColor: '#8DE4F8', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      borderRadius:10,
      marginBottom:5
    },
 
    Text1:{
 
      color: '#000',
      fontSize: 18,
      fontWeight:"700",
      color:"#076887",
    },
    Text2:{
        color:"#000",
        fontSize:9,
        width:"90%",
        textAlign:'center',
        color:"#076887",
    }
})
