import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const PromotionsScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
    )
}

export default PromotionsScreen

const styles = StyleSheet.create({})
