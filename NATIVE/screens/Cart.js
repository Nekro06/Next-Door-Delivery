import React, {useState, useEffect, useContext}  from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";

import { UserContext, TypeContext } from '../UserContext';
import ProductCard from './components/ProductCard';

export default function Cart() {
  const {user,setUser} = useContext(UserContext);
  const {types, setTypes} = useContext(TypeContext);

  const [cartList, setCartList] = useState([]);
  var nav = useNavigation();
  var card = [];

  useEffect(() => {
    getProductsList();
  }, []);

  if (cartList.length) {
      for (let i = 0; i < cartList.length; i++) {
      card.push(
          <ProductCard prop={cartList[i]}/>
      );
    }
  }

  function getProductsList () {
    fetch("http://10.0.2.2:8000/api/associate/user/"+ user.id +"/products?prod_state=cart", {
      Accept: "application/json",
      "Content-Type": "application/json",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setCartList(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function checkoutProduct () {
    //TODO: add some functionality to update status to checkout
    var success = 0;
    for (let i = 0; i < cartList.length; i++) {
      const entity = {
        user: user.id,
        product: cartList[i].id,
        prod_state: 'checkout'
      }
      axios.put("associate/user/"+ user.id +"/products/details", entity)
        .then((response) => {
          if (response.status == 200 || response.status == 201) {
              success = 1;
              console.log(response);
          } else {
              success = 0
              console.log(response);
          }
        });
    }
    if (success) {
      Alert.alert(
        "Success",
        "Products moved to checkout",
        [{ text: "OK", onPress: () =>navigation.navigate('checkout') }],
      );
    }
  }

  return(
    <View style={styles.container}>
      <Text style={styles.logo}>ITEMS IN CART</Text>
      <ScrollView style={styles.scroll}>
        {card}
      </ScrollView>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText} onPress={() => checkoutProduct()}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    width:"100%",
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo:{
    fontWeight:"bold",
    fontSize:15,
    color:"#808080",
    marginBottom:10,
    marginLeft: 10
  },
  loginBtn:{
    width:"100%",
    borderColor: "#ffdb58",
    backgroundColor:"#ffdb58",
    borderRadius:3,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:30,
    fontWeight:"bold",
  },
  loginText:{
    color:"white"
  }
});