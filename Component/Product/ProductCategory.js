import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ScrollViews from '../Category/ScrollViews'
import ProdictList from './ProdictList'
import Toggle from './Toggle'

const ProductCategory = () => {
    return (
       <>
       <View style={styles.mainDiv}>
       <View style={{marginTop: 5, marginBottom:5}}>
       <ScrollViews />
       </View>
       <Toggle />
       <ProdictList />
       <ProdictList />
       <ProdictList />
       <ProdictList />
       </View>
       
       </>
    )
}

export default ProductCategory

const styles = StyleSheet.create({
    mainDiv:{
        // width:'95%',
        marginLeft: 10,
        marginRight: 10,
        backgroundColor:'#c9e9f6',
        padding: 10,
        borderRadius: 15
    }
})
