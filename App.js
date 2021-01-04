import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Category from './NewComponents/Category';
import Header from './NewComponents/Header';
import Offer from './Component/Offer';
import Product from './NewComponents/Product';
import LoyalityPoint from './Component/Profile/LoyalityPoint';
import Search from './Component/Search';
import Footer1 from './NewComponents/Footer1';
import Modals2 from './NewComponents/Modals2';
import CheckOut from './NewComponents/CheckOut';
import CommonForm from './NewComponents/CommonForm';
import AddressForm from './NewComponents/AddressForm';

export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <Header />
    
    <ScrollView>
    
    {/* <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      
    </View> */}
   
    {/* <Search />
    <Category />
    <Offer />

    <Product />
    <LoyalityPoint />
    */}

    <Search />
    
    <Offer />

    <LoyalityPoint />
    
    <Category />
    <Product/> 
    <CheckOut />
   <CommonForm />
   <AddressForm />
    </ScrollView>
    {/* <Footer1 /> */}
    
   
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
