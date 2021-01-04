import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

const Footer1 = () => {
    return (
        <View style = { styles.MainContainer }>

               <View style={ styles.bottomView} >
               <Text style={ styles.Text1}>
                   SKIP ITEM SELECTION
               </Text>
               <Text style={ styles.Text2}>
               (OUR DELIVERY PERSON DIRECTLY TAKE ORDER FROM YOUR PLACE)
               </Text>
 
               </View>
 
            </View>
    )
}

export default Footer1

const styles = StyleSheet.create({
    MainContainer:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10
        // paddingTop: ( Platform.OS === "window" ) ? 20 : 0
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
        fontSize:10,
        width:"90%",
        textAlign:'center',
        color:"#076887",
    }
})
