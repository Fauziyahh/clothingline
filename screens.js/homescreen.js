import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View,TextInput,SafeAreaView,FlatList } from 'react-native';

const DATA = [
    {
      id: 1,
      title: 'First Item',
      image: require("../assets/images/CL1.png"),
      price:70,
    },
    {
      id: 2,
      title: 'Second Item',
      image: require("../assets/images/CL5.png"),
      price:80,
    },
    {
      id: 3,
      title: 'Third Item',
      image: require("../assets/images/CL8.png"),
      price:90,
    },
    {
        id: 4,
        title: 'Third Item',
        image: require("../assets/images/CL14.png"),
        price:100,
      },
      {
        id: 5,
        title: 'Third Item',
        image: require("../assets/images/CL10.png"),
        price:100,
      },
      {
        id: 5,
        title: 'Third Item',
        image: require("../assets/images/CL9.png"),
        price:200,
      },
      {
        id: 5,
        title: 'Third Item',
        image: require("../assets/images/CL3.png"),
        price:200,
      },
  ];

  
  


const home=()=>{
    const Item = ({ title }) => (
        <TouchableOpacity style={{ top:20,margin:5}} >
           <ImageBackground source={title.image} style={{height:170,width:100, marginLeft:15}}/> 
          <Text style={{ marginLeft:5}} >PRICE:{title.price}</Text>
        </TouchableOpacity>
      );

      const renderItem = ({ item }) => (
        <Item title={item} />
      );
    return(
        <SafeAreaView>
            <View >
            <TextInput style={{borderWidth:2,height:30,marginTop:10,width:200
            ,position:"absolute", top:40,marginLeft:60,borderRadius:10,height:40
            }} placeholder="search" />  
            </View>

        <View style={{ flex:1,position:"absolute", top:100}}>
      <FlatList
        data={DATA}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </View>
    </SafeAreaView>

    )
}
export default home;