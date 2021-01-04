import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

const Offer = () => {
    return (
        <View>
            <View style={styles.mainDiv}>
                <Text  style={styles.title}>
                    Promotions
                </Text>
                <View style={styles.imgDivUper}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.imgDiv}>
                        <Image style={styles.img} source={{uri:"https://image.freepik.com/free-vector/big-sale-special-offer-banner-template_7547-308.jpg"}} />
                    </View>
                    <View style={styles.imgDiv}>
                        <Image style={styles.img} source={{uri:"https://image.freepik.com/free-vector/big-sale-special-offer-banner-template_7547-308.jpg"}} />
                    </View>
                    <View style={styles.imgDiv}>
                        <Image style={styles.img} source={{uri:"https://image.freepik.com/free-vector/big-sale-special-offer-banner-template_7547-308.jpg"}} />
                    </View>
                    <View style={styles.imgDiv}>
                        <Image style={styles.img} source={{uri:"https://image.freepik.com/free-vector/big-sale-special-offer-banner-template_7547-308.jpg"}} />
                    </View>
                </ScrollView>
                </View>
                
                    <Text style={styles.bottomText}>
                        One Call, Cleans It All
                    </Text>

            </View>
        </View>
    )
}

export default Offer

const styles = StyleSheet.create({
    mainDiv:{
        width:"93%",
        marginHorizontal:'auto',
        marginBottom: 10
    },
    title:{
        fontSize: 25,
        fontWeight:"700",
        paddingLeft:15
    },
    imgDivUper:{
        width:"98%",
        marginHorizontal: "auto",
        marginLeft: 10

    },
    imgDiv:{
        width: 250,
        height: 150,
        marginHorizontal: 1,
        marginTop: 8,
        paddingLeft:2,
        // borderWidth: 1
    },
    img:{
        width:'100%',
        height: '100%',
        borderRadius: 20 
    },
  
    bottomText:{
        fontSize: 14,
        fontWeight:"700",
        textAlign:'center',
        marginTop: 15
    }
})
