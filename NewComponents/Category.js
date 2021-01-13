import React from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'

const Category = () => {
    return (
        <View style={styles.bgc}>
            <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.cat}>
                        <Image style={styles.img} source={{uri:"https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png"}} />
                        <Text>Men</Text>
                    </View>
                    <View style={styles.cat}>
                        <Image style={styles.img} source={{uri:"https://purepng.com/public/uploads/large/purepng.com-women-dressclothingwomen-dressfashion-women-dress-cloth-apparel-631522326975ia8xr.png"}} />
                        <Text>Women</Text>
                    </View>
                    <View style={styles.cat}>
                        <Image style={styles.img} source={{uri:"https://www.pngfind.com/pngs/m/1-18233_png-imges-free-download-png-dress-for-boy.png"}} />
                        <Text>Common</Text>
                    </View>
                    <View style={styles.cat}>
                        <Image style={styles.img} source={{uri:"https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png"}} />
                        <Text>Men</Text>
                    </View>
                    <View style={styles.cat}>
                        <Image style={styles.img} source={{uri:"https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png"}} />
                        <Text>Men</Text>
                    </View>
                    <View style={styles.cat}>
                        <Image style={styles.img} source={{uri:"https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png"}} />
                        <Text>Men</Text>
                    </View>
                
                    </ScrollView>
        </View>
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
      
    },
    bgc:{
        backgroundColor:'white',
        padding: 5,
        // marginTop:40
    },
    cat:{
        width: 70,
        height: 85,
        // borderWidth: 2,
        borderRadius: 10,
        marginHorizontal: 6,
        padding: 5,
        backgroundColor:'#EAFFAD',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},

shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 9,
    },
    img:{
        width:'80%',
        height:'70%',
    }
 
    
})

