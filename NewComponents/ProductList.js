import React, { useState } from 'react'
import { Alert, Image, StyleSheet, Text, View, Modal,TouchableHighlight, Button,TouchableOpacity } from 'react-native'

const ProdictList = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [count, setCount] = useState(0);
    const [saq, setSaq] = useState(0);
    const [saql, setSaql] = useState(0);
    return (
        <>
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
            <TouchableOpacity
        style={styles.productImg}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Image style={styles.img} source={{uri:"https://purepng.com/public/uploads/large/purepng.com-women-dressclothingwomen-dressfashion-women-dress-cloth-apparel-631522326975ia8xr.png"}} />
         
      </TouchableOpacity>
            

            
        </View>

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          
            <View style={styles.modalViewimg}>
            <Image style={styles.imgss} source={{uri:"https://purepng.com/public/uploads/large/purepng.com-women-dressclothingwomen-dressfashion-women-dress-cloth-apparel-631522326975ia8xr.png"}} />
            </View>
            <View style={{ width:"110%", marginTop: 5}}>
            <Text style={{fontSize: 22, fontWeight:"700", marginTop: 5, marginBottom: 10, marginLeft:-5}}>T-Shirt</Text>

            <View style={styles.clean}>
                <View style={styles.cleanTitles}>
                <Text style={styles.cleanTitle1}>Dry Clean</Text>
                <Text style={styles.cleanTitle2}>5 QAR</Text>
                </View>
                <View style={styles.cleanButton}>
                <TouchableOpacity style={styles.button} onPress={()=>setCount(count - 1)}>
                    <Text> - </Text>
                </TouchableOpacity>
                <Text> {count} </Text>
                <TouchableOpacity style={styles.button} onPress={()=>setCount(count + 1)}>
                    <Text> + </Text>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.clean}>
                <View style={styles.cleanTitles}>
                <Text style={styles.cleanTitle1}>Dry Clean</Text>
                <Text style={styles.cleanTitle2}>5 QAR</Text>
                </View>
                <View style={styles.cleanButton}>
                <TouchableOpacity style={styles.button} onPress={()=>setSaq(saq - 1)}>
                    <Text> - </Text>
                </TouchableOpacity>
                <Text> {saq} </Text>
                <TouchableOpacity style={styles.button} onPress={()=>setSaq(saq + 1)}>
                    <Text> + </Text>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.clean}>
                <View style={styles.cleanTitles}>
                <Text style={styles.cleanTitle1}>Dry Clean</Text>
                <Text style={styles.cleanTitle2}>5 QAR</Text>
                </View>
                <View style={styles.cleanButton}>
                <TouchableOpacity style={styles.button} onPress={()=>setSaql(saql - 1)}>
                    <Text> - </Text>
                </TouchableOpacity>
                <Text> {saql} </Text>
                <TouchableOpacity style={styles.button} onPress={()=>setSaql(saql + 1)}>
                    <Text> + </Text>
                </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.buttonCart}>
                    <Text> ADD TO ORDER </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
            //   style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
            <View>
            <Text style={styles.textStyle}> Close Cart </Text>
            </View>
              
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

        </>
    )
}

export default ProdictList

const styles = StyleSheet.create({
    clean:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop: 10,
        marginBottom:10

    },
    buttonCart:{
        justifyContent:"center",
        alignItems:'center',
        height: 40,
        backgroundColor:"#8DE4F8",
        borderRadius: 12
    },
    button:{
        backgroundColor:'transparent',
        paddingLeft: 5,
        paddingRight: 5,
        },
    cleanButton:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderWidth: 2,
        width: 100,
        borderRadius: 15
    },
    productListMain:{
        backgroundColor:'#fff',
        marginTop: 5,
        marginBottom: 8,
        height: 100,
        padding:5,
        borderRadius: 12,
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.5,
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
          width: 300,
          minHeight: 300,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "right",
        marginTop: 20,

        // marginLeft: 170
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      modalViewimg:{
          backgroundColor:'#f0f0f2',
        width: 200,
        height: 120
      },
      imgss:{
          width: "100%",
          height:'100%'
         
      },
      cleanTitle1:{
          color:"#9A9A9A"
      },
      cleanTitle2:{
          fontSize: 16
      }
   
})
