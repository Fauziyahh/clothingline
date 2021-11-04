import * as React from 'react';
import { Button, View, Text,ImageBackground,TouchableOpacity,StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
        <View style={{flex:1,width:"100%",height:"100%"
      
      }}>
        <ImageBackground style={{width:"100%",height:"100%"}} source={require("../assets/b1.jpg")} />
        <View style={styles.textWrapper}>
        <Text style={{color:"#fff",fontWeight:"600",fontSize:30}}>Welcome To the</Text>
        
      <Text style={{color:"#fff",fontWeight:"300",fontSize:24,}}>Dress Shop</Text>
      <View>
          <TouchableOpacity style={{borderWidth:2,position:"absolute",top:100,left:40,borderRadius:10,
            width:150,height:30,backgroundColor:"#faedcd",alignItems: 'center',justifyContent: 'center',
        }}  onPress={()=>{navigation.navigate('Login')}}>
            <Text>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        </View>



      
      </View>
    </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#80ffdb',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textWrapper:{
      position:"absolute",
      top:100,
      left:100
    }
  });
  