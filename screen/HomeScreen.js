import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import Category from '../NewComponents/Category';
import Footer1 from '../NewComponents/Footer1';
import Product from '../NewComponents/Product';
import Offer from '../Component/Offer'
import Search from '../Component/Search'

const HomeScreen = () => {
    return (
        <>
        <ScrollView>
        <Search />
        <Offer />
        <Category />
        <Product />
        
        </ScrollView>
        <Footer1 />
        
        </>
      );
}

export default HomeScreen

const styles = StyleSheet.create({})
