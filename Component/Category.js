import React from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import ScrollViews from './Category/ScrollViews'

const Category = () => {
    return (
        <>
        <View style={{backgroundColor:'#EAEFF2', paddingBottom: 10}}>
            <View style={styles.mainDiv}>
                <Text style={styles.title}>
                    Choose the laundry service, which you are interested in today.
                </Text>
                {/* <View style={styles.cats}> */}
                   <ScrollViews />
                {/* </View> */}
            </View>
        </View>
        </>
    )
}

export default Category

const styles = StyleSheet.create({
    mainDiv:{
        width:'92%',
        marginHorizontal:'auto',
        padding: 5
    },
    title:{
        fontSize:14,
        marginBottom: 16,
        width:"90%",
        paddingLeft:9
      
    }
 
    
})
