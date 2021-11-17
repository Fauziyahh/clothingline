import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View,TextInput,SafeAreaView,FlatList } from 'react-native';

const DATA = [
    {
      id: 1,
      title: 'Long Flare Dress',
      image: require("../assets/images/CL1.png"),
      price:70,
    },
    {
      id: 2,
      title: 'Short Silk Dress',
      image: require("../assets/images/CL5.png"),
      price:80,
    },
    {
      id: 3,
      title: 'Knee Length Bodycon Dress',
      image: require("../assets/images/CL8.png"),
      price:90,
    },
    {
        id: 4,
        title: 'Short Bodycon Dress',
        image: require("../assets/images/CL14.png"),
        price:100,
      },
      {
        id: 5,
        title: 'Silk Gown',
        image: require("../assets/images/CL10.png"),
        price:100,
      },
      {
        id: 5,
        title: 'Straight Gown',
        image: require("../assets/images/CL9.png"),
        price:200,
      },
      {
        id: 5,
        title: 'Short Flare Dress',
        image: require("../assets/images/CL3.png"),
        price:200,
      },
  ];

  
  


const home=({navigation})=>{
    const Item = ({ title }) => (
        <TouchableOpacity style={{ top:20,margin:5,borderWidth:2,height:210,
        borderRadius:10
        }} 
        onPress={()=>{alert("added to carts")}}
        >
           <ImageBackground source={title.image} style={{height:170,width:100, marginLeft:15}}/> 
           <Text style={{ marginLeft:5}} >{title.title}</Text>
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

            <View>
                <TouchableOpacity style={{position:"absolute",right:10,borderWidth:2,
                top:10, width:70,borderRadius:10,height:30,backgroundColor:"#a4ac86"
            }}
            onPress={()=>{navigation.navigate("Login")}}
            >
                    <Text>Logout</Text>
                </TouchableOpacity>
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