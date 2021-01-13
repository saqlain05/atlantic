import 'react-native-gesture-handler';
import * as React from 'react';
import {  Image,StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from './NewComponents/Drawer';
import HomeScreen from './screen/HomeScreen';
import ProductListScreen from './screen/ProductListScreen';
import ProfileScreen from './screen/ProfileScreen';
import PromotionsScreen from './screen/PromotionsScreen';
import OrderScreen from './screen/OrderScreen';
import WalletScreen from './screen/WalletScreen';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ProductListStack = createStackNavigator();
const PromotionsStack = createStackNavigator();
const OrderStack = createStackNavigator();
const WalletStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen =({navigation}) =>(
  <HomeStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:"#fff",
    },
    headerTintColor:"#000",
    headerTitleStyle:{
      fontWeight:"bold"
    }
  }}>
    <HomeStack.Screen name="home" component={HomeScreen} options={{title:"Home", headerTitleStyle: { alignSelf: 'center' },
    headerLeft:()=>(
      // <Icon.Button name="ios-menu" size={25} backgroundColor="#fff" color="#000" onPress={()=>{ navigation.openDrawer()}} ></Icon.Button>
      <TouchableOpacity onPress={()=>{ navigation.openDrawer()}}  >
      <Image style={styles.image2} source={require('./images/Vector.png')} />
      </TouchableOpacity>
    ),
    headerRight:()=>(
      <Image style={styles.image3} source={require('./images/Group.png')} />
    )
    }} />
  </HomeStack.Navigator>
);
const ProfileStackScreen =({navigation}) =>(
  <ProfileStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:"#fff",
    },
    headerTintColor:"#000",
    headerTitleStyle:{
      fontWeight:"bold"
    }
  }}>
  <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{title:"Profile", headerTitleStyle: { alignSelf: 'center' },
   headerLeft:()=>(
      // <Icon.Button name="ios-menu" size={25} backgroundColor="#fff" color="#000" onPress={()=>{ navigation.openDrawer()}} ></Icon.Button>
      <TouchableOpacity onPress={()=>{ navigation.openDrawer()}}  >
      <Image style={styles.image2} source={require('./images/Vector.png')} />
      </TouchableOpacity>
    ),
    headerRight:()=>(
     <Text style={{marginRight: 10, fontSize: 16, fontWeight: "700"}}>Edit</Text>
    ),

    }} />
  </ProfileStack.Navigator>

);
const ProductListStackScreen =({navigation}) =>(
  <ProductListStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:"#fff",
    },
    headerTintColor:"#000",
    headerTitleStyle:{
      fontWeight:"bold"
    }
  }}>
  <ProductListStack.Screen name="Details" component={ProductListScreen} options={{title:"Product List", headerTitleStyle: { alignSelf: 'center' },
   headerLeft:()=>(
      // <Icon.Button name="ios-menu" size={25} backgroundColor="#fff" color="#000" onPress={()=>{ navigation.openDrawer()}} ></Icon.Button>
      <TouchableOpacity onPress={()=>{ navigation.openDrawer()}}  >
      <Image style={styles.image2} source={require('./images/Vector.png')} />
      </TouchableOpacity>
    ),
    headerRight:()=>(
      <Image style={styles.image3} source={require('./images/Group.png')} />
    ),

    }} />
  </ProductListStack.Navigator>

);
const PromotionsStackScreen =({navigation}) =>(
  <PromotionsStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:"#fff",
    },
    headerTintColor:"#000",
    headerTitleStyle:{
      fontWeight:"bold"
    }
  }}>
  <PromotionsStack.Screen name="Promotions" component={PromotionsScreen} options={{title:"Promotions", headerTitleStyle: { alignSelf: 'center' },
   headerLeft:()=>(
      // <Icon.Button name="ios-menu" size={25} backgroundColor="#fff" color="#000" onPress={()=>{ navigation.openDrawer()}} ></Icon.Button>
      <TouchableOpacity onPress={()=>{ navigation.openDrawer()}}  >
      <Image style={styles.image2} source={require('./images/Vector.png')} />
      </TouchableOpacity>
    ),
    headerRight:()=>(
      <Image style={styles.image3} source={require('./images/Group.png')} />
    ),

    }} />
  </PromotionsStack.Navigator>

);
const OrderStackScreen =({navigation}) =>(
  <OrderStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:"#fff",
    },
    headerTintColor:"#000",
    headerTitleStyle:{
      fontWeight:"bold"
    }
  }}>
  <OrderStack.Screen name="Order" component={OrderScreen} options={{title:"Order", headerTitleStyle: { alignSelf: 'center' },
   headerLeft:()=>(
      // <Icon.Button name="ios-menu" size={25} backgroundColor="#fff" color="#000" onPress={()=>{ navigation.openDrawer()}} ></Icon.Button>
      <TouchableOpacity onPress={()=>{ navigation.openDrawer()}}  >
      <Image style={styles.image2} source={require('./images/Vector.png')} />
      </TouchableOpacity>
    ),
    headerRight:()=>(
      <Image style={styles.image3} source={require('./images/Group.png')} />
    ),

    }} />
  </OrderStack.Navigator>

);
const WalletStackScreen =({navigation}) =>(
  <WalletStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:"#fff",
    },
    headerTintColor:"#000",
    headerTitleStyle:{
      fontWeight:"bold"
    }
  }}>
  <WalletStack.Screen name="Wallet" component={WalletScreen} options={{title:"Wallet", headerTitleStyle: { alignSelf: 'center' },
   headerLeft:()=>(
      // <Icon.Button name="ios-menu" size={25} backgroundColor="#fff" color="#000" onPress={()=>{ navigation.openDrawer()}} ></Icon.Button>
      <TouchableOpacity onPress={()=>{ navigation.openDrawer()}}  >
      <Image style={styles.image2} source={require('./images/Vector.png')} />
      </TouchableOpacity>
    ),
    headerRight:()=>(
      <Image style={styles.image3} source={require('./images/Group.png')} />
    ),

    }} />
  </WalletStack.Navigator>

);

export default function App() {
  return (
  <>
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props=> <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="ProductList" component={ProductListStackScreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} />
        <Drawer.Screen name="Promotions" component={PromotionsStackScreen} />
        <Drawer.Screen name="Order" component={OrderStackScreen} />
        <Drawer.Screen name="Wallet" component={WalletStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    </>
  );
}
const styles = StyleSheet.create({
  imgss:{
    width: 100,
    height: 100,
  },
  image3 :{
    width: 25,
    height: 30,
    // borderWidth: 1,
    marginRight: 10
},
image2:{
  width: 20,
  height: 25,
  // borderWidth: 1,
  marginLeft: 10
},
})