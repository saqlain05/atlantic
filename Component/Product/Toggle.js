import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Toggle = () => {
    return (
        <View>
            <View style={styles.toggleDiv}>
                <Text style={styles.toggleTitle1}>
                    Toggle To See Prices For Express Delivary
                </Text>
                <Text style={styles.toggleTitle2}>
                    Button
                </Text>

            </View>
        </View>
    )
}

export default Toggle

const styles = StyleSheet.create({
    toggleDiv:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#0A9BC9',
        height: 40,
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,
        borderRadius: 50,
        marginTop: 10,
        marginBottom: 2,
        
    },
    toggleTitle1:{
        color:"#fff",
        // borderWidth: 1,
        width: "85%",
        fontSize: 13,
        fontWeight: "700"

    },
    toggleTitle2:{
        color:"#fff"
    }
})
