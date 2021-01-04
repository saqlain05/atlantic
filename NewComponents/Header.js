import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <View style={{marginTop:20}} >
        <View style={styles.mainDiv} >
            <Image style={styles.image} source={require('../images/Vector.png')} />
            <Image style={styles.image}  source={require('../images/Vector.png')} />
           
            <Image style={styles.image3} source={require('../images/Group.png')} />
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
        position:'absolute',
        top: 0,
        left:0,
        right:0,
        marginBottom:5,

        // borderWidth: 1
    },
    
    image :{
        width: 20,
        height: 20,
        // borderWidth: 1
    },
  
   
  
  

})
