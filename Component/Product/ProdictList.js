import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ProdictList = () => {
    return (
        <View style={styles.productListMain}>
            <View style={styles.productItems}>
                <View style={styles.productItemsFirst}>
                    <Text style={styles.productItemsText}>T-Shirt</Text>
                </View>
                <View style={styles.productItemsSecond}>
                    <View style={styles.productItemsSecondFirst}>
                        <Text style={styles.productItemsSecondTitle}>Dry Clean</Text>
                        <Text style={styles.productItemsSecondPrice}> 10 QAR</Text>
                    </View>
                    <View style={styles.productItemsSecondFirst}>
                        <Text style={styles.productItemsSecondTitle}>Wash & Iron</Text>
                        <Text style={styles.productItemsSecondPrice}> 10 QAR</Text>
                    </View>
                    <View style={styles.productItemsSecondFirst}>
                        <Text style={styles.productItemsSecondTitle}> Ironing </Text>
                        <Text style={styles.productItemsSecondPrice}> 10 QAR</Text>
                    </View>
                </View>
                

            </View>
            <View style={styles.productImg}>
            <Image style={styles.img} source={{uri:"https://purepng.com/public/uploads/large/purepng.com-women-dressclothingwomen-dressfashion-women-dress-cloth-apparel-631522326975ia8xr.png"}} />
            </View>

            
        </View>
    )
}

export default ProdictList

const styles = StyleSheet.create({
    productListMain:{
        backgroundColor:'#fff',
        marginTop: 8,
        marginBottom: 8,
        height: 100,
        padding:5,
        borderRadius: 12,
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 5,

    },
    productItems:{
        flex: 5,
        justifyContent:'space-around',
        marginTop: 5,
        marginBottom: 5
    },
   
    productItemsSecond:{
        flexDirection:'row',
        justifyContent:'space-between',
        // borderWidth: 2,
        paddingHorizontal: 8

    },
  
    productItemsText:{
        fontSize: 22,
        fontWeight: '700',
        marginLeft:4
    },
    productItemsSecondFirst:{
        // borderWidth:2,
       
        justifyContent:'center',
        alignItems:'center'
    },
    productImg:{
        flex: 2,
        // borderWidth: 2,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff900',
        borderRadius: 12,
        height: '100%',
        // borderWidth: 2
    },
    img:{
        width:'85%',
        height:'100%',
        
    },
   
})
