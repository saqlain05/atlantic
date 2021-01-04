import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Toggle from '../Component/Product/Toggle';
import Footer1 from './Footer1';
import ProductList from './ProductList';

const Product = () => {
    return (
        <View style={styles.mainDivProduct}>
            <View style={styles.toggle}>
            <Toggle />
            </View>
            <View style={styles.toggle}>
            <ProductList />
            <ProductList />
            <ProductList />
           
            </View>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    mainDivProduct:{
        backgroundColor:'#D0F6FF',
        width:'100%',
        minHeight: 300
    },
    toggle:{
        width:'90%',
        // margin:'auto',
        marginTop:0,
        marginHorizontal:20,
        // borderWidth: 10
    }
})
