import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import Category from '../NewComponents/Category';
import Footer3 from '../NewComponents/Footer3';
import Product from '../NewComponents/Product';
import Offer from '../Component/Offer'

const ProductListScreen = () => {
    
        return (
            <>
            <ScrollView>
            <Category />
            <Product />
            
            </ScrollView>
            <Footer3 />
            
            </>
          );
    
}

export default ProductListScreen

const styles = StyleSheet.create({})
