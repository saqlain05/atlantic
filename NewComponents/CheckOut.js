import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const CheckOut = () => {
    return (
        <>
            <View style={styles.checkoutmain}>
                <View style={styles.time}>
                    <Text style={styles.timeText}>Timing</Text>
                  <View style={styles.first}>
                  <View style={styles.collection}>
                        <Text style={styles.collection1}>
                            Collection On
                        </Text>
                        <Text style={styles.collection2}>
                            Thu , 31 Dec 1 PM - 2PM
                        </Text>
                    </View>
                    <View style={styles.del}>
                        <Text style={styles.collection1}>
                            DELIVERY On
                        </Text>
                        <Text style={styles.collection2}>
                            Thu , 31 Dec 1 PM - 2PM
                        </Text>
                    </View>
                    </View>
                </View>

                <View style={styles.time}>
                <Text style={styles.timeText}>Address</Text>
                <View style={styles.first}>
                <View style={{flexDirection:"row", justifyContent:"space-between", width:"100%"}}>
                    <Text>Al Rumaili West</Text>
                    <Text>Al</Text>
                </View>
                </View>
                </View>
                <View style={styles.time}>
                <Text style={styles.timeText}>Notes(Optional)</Text>
                <View style={styles.first}>
                <View style={{flexDirection:"row", justifyContent:"space-between", width:"100%"}}>
                    <Text>Type Your Claeaning Notes.....</Text>
                </View>
                </View>
                </View>
                <View style={styles.time}>
                <Text style={styles.timeText}>Order Amount</Text>
                <View style={styles.first}>
                <View style={{flexDirection:"row", justifyContent:"space-between", width:"100%"}}>
                    <Text>Promo Code</Text>
                    <Text>Al</Text>
                </View>
                
                </View>
                <View style={styles.orderSummry}>
                <View style={styles.first}>
                <View style={styles.sec}>
                   <View style={styles.total} >
                    <Text>SUB TOTAL</Text>
                    <Text>QAR 0.00</Text>
                   </View> 
                   <View style={styles.total} >
                    <Text>SUB TOTAL</Text>
                    <Text>QAR 0.00</Text>
                   </View> 
                   <View style={styles.total} >
                    <Text>SUB TOTAL</Text>
                    <Text>QAR 0.00</Text>
                   </View> 
                   </View>
                </View>
                </View>
                </View>
            <View style={styles.placeOrder}>
                <TouchableOpacity style={styles.buttonCart}>
                    <Text> ADD TO ORDER </Text>
                </TouchableOpacity>

            </View>
            </View>
        </>
    )
}

export default CheckOut

const styles = StyleSheet.create({
    placeOrder:{
        backgroundColor:"#fff",
        height: 90,
        justifyContent:"center",
        alignItems:"center",
        marginBottom: 10
    },
    buttonCart:{
        justifyContent:"center",
        alignItems:'center',
        height: 40,
        backgroundColor:"#8DE4F8",
        borderRadius: 12,
        width:"80%",
        height:"60%"
    },
    checkoutmain:{
        width:"100%",
        
        backgroundColor:"#D0F6FF",
        marginTop: 1
    },
    time:{
        width: "85%",
        marginLeft: 20,
        marginBottom: 5,
        marginTop: 10
    },
    timeText:{
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 5
    },
    first:{
        minHeight: 50,
        alignItems:"center",
        backgroundColor:"white",
        flexDirection:"row",
        // justifyContent:"space-between",
        padding: 10,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowOpacity: 0.9,
        shadowRadius: 4,
        elevation: 5
     
    },
    collection:{
        width: "30%",
        marginHorizontal: 10
    },
    collection1:{
        color:"#9A9A9A"
    },
    collection2:{
        fontWeight: "700"
    },
    del:{
        width: "30%",
        marginHorizontal: 10
    },
    orderSummry:{
        marginTop: 10
    },
    total:{
        flexDirection:"row",
        justifyContent:"space-between",
        width: "83%",
        marginTop: 3,
        marginBottom: 3
        // borderWidth: 2
        }
})
