import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

const LoyalityPoint = () => {
    return (
        <View >
            <View style={styles.lpmainDiv}>
                <View style={styles.lpimage}>
                <ImageBackground style={styles.bgimage} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEXR7M1N3K2MsbinrtLiy1v61l2ylH2-x25Q&usqp=CAU"}}>
                    <View style={styles.lpimg}>
                        <Image style={styles.img} source={{uri:"https://media.gettyimages.com/vectors/profile-icon-male-avatar-portrait-casual-person-vector-id530830041"}} />
                        <View>
                        <Text style={styles.lpImageSecTitle1}>Md Saqlan Nasim</Text>
                        <Text style={styles.lpImageSecTitle2}>xyz xyz, Kamarhati, kolkata</Text>
                        </View>
                    </View>
                </ImageBackground>
                </View>

                <View style={styles.loyalityPoint}>
                    <View style={styles.loyalityPointFirst}>
                        <View style={styles.lpfirst}>
                            <Text style={styles.lpfirstTitle1}>
                                Loyality Points :
                            </Text>
                            <Text style={styles.lpfirstTitle2}>
                                 26 Points
                            </Text>
                            <Text style={styles.lpfirstTitle3}>
                                (26 AQR)
                            </Text>
                        </View>
                        <View style={styles.lpsec}>
                            <Text style={styles.lpsecTitle1}>4</Text>
                            <Text style={styles.lpsecTitle2}>More points needed for redumptions</Text>

                        </View>
                        <View style={styles.lpThird}>
                            <View style={styles.lpThirdCard}>
                                <View style={styles.lpThirdCardImage}>
                                <Image style={styles.lpThirdCardImg} source={{uri:"https://lh3.googleusercontent.com/proxy/mumqj21wq508SjZFpqmR_z8crWI_u2eDQ39loZh9hXTomARyxWyHXPZhZOQ8BC3-NFvQXU34eb4m7jjzAjHJtg9_nypVbQ8kizJgfjRqsxlNbLM"}} />
                                </View>
                                <View>
                                    <Text style={styles.lpThirdCardTitle}>
                                        Drop-off
                                    </Text>
                                </View>

                            </View>
                            <View style={styles.lpThirdCard}>
                                <View style={styles.lpThirdCardImage}>
                                <Image style={styles.lpThirdCardImg} source={{uri:"https://images.vexels.com/media/users/3/147708/isolated/preview/91325939f803fbc90c64c844c3a05f20-camper-van-illustration-by-vexels.png"}} />
                                </View>
                                <View>
                                    <Text style={styles.lpThirdCardTitle}>
                                        Pick
                                    </Text>
                                </View>

                            </View>
                            <View style={styles.lpThirdCard}>
                                <View style={styles.lpThirdCardImage}>
                                <Image style={styles.lpThirdCardImg} source={{uri:"https://cdn1.vectorstock.com/i/1000x1000/58/15/bakery-shop-front-veiw-flat-icon-vector-17255815.jpg"}} />
                                </View>
                                <View>
                                    <Text style={styles.lpThirdCardTitle}>
                                        Shop
                                    </Text>
                                </View>

                            </View>
                            <View style={styles.lpThirdCard}>
                                <View style={styles.lpThirdCardImage}>
                                <Image style={styles.lpThirdCardImg} source={{uri:"https://image.flaticon.com/icons/png/512/189/189709.png"}} />
                                </View>
                                <View>
                                    <Text style={styles.lpThirdCardTitle}>
                                        Top-up
                                    </Text>
                                </View>

                            </View>

                        </View>
                    </View>
                   
                </View>

            </View>
        </View>
    )
}

export default LoyalityPoint

const styles = StyleSheet.create({
    lpmainDiv:{
        
        height: 300,
        
    }
    ,
    bgimage:{
        flex: 1,
    resizeMode: "cover",
    // justifyContent: "center"

    },
    lpimage:{
        // backgroundColor:'#2940DC',
        height: 180
    },
    lpimg:{
        flexDirection:'row',
        width: "95%",
        // borderWidth: 2,
        margin:'auto',
        // justifyContent:'center',
        alignItems:'center',
        marginVertical: 20

    },
    img:{
        width: 60,
        height: 60,
        // borderWidth: 2,
        marginLeft: 1,
        marginRight: 10,
        shadowColor: "#000",
        borderRadius:10,
        marginLeft:10

    },
    lpImageSecTitle1:{
        fontSize:18,
        color:'#fff',
        fontWeight:"700"

    },
    lpImageSecTitle2:{
        fontSize:12,
        color:'#fff'

    },
    loyalityPoint:{
        // borderWidth:5,
        marginTop: -80,
        backgroundColor:'white',
        width:'90%',
        marginLeft: 15,
        padding: 10,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },
    lpfirst:{
        flexDirection:'row',
        alignItems:"center"
    },
    lpsec:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth: 1,
    },
    lpsecTitle1:{
        fontWeight:"700",
        fontSize:22

    },
    lpsecTitle2:{
        fontSize:12,
        marginLeft:5,
        
        

    },
    lpfirstTitle1:{
        fontSize:18,
        fontWeight:"700"
    },
    lpfirstTitle2:{
        fontSize: 16,
        color:"#c4c4c4",
        fontWeight:"700",
        marginLeft: 10,
        marginRight:10
    },
    lpfirstTitle3:{
        fontSize: 12,
        color:"#c8c8c8",
        marginRight:10

    },
    lpThird:{
        // borderWidth: 2,
        flexDirection:"row"

    },
    lpThirdCard:{
        // borderWidth: 1,
        width: 75,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10
    },
    lpThirdCardImage:{
        padding: 10,
        backgroundColor:'#f1f1f1',
        borderRadius: 50,
        width:60,
        height:60

    },
    lpThirdCardImg:{
        width: "100%",
        height: "100%",

    },
    lpThirdCardTitle:{
        fontWeight:"700"
    }
})
