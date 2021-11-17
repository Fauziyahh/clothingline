import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View,TextInput } from 'react-native';


const Login =({navigation})=>{
    return(
        <View style={{flex: 1,
            
            alignItems: 'center',
            justifyContent: 'center'}}>
                
            <Text style={{fontSize:30,position:"absolute",top:50}}>Login</Text>

            <TextInput style={{borderWidth:2,height:30,marginTop:10,width:200}} placeholder="username" />
            <TextInput style={{borderWidth:2,height:30,marginTop:10,width:200}} placeholder="password" />
            
            <TouchableOpacity style={{borderWidth:2,height:30,marginTop:10,width:100,
            alignItems:"center",justifyContent:"center",borderRadius:10
            }} onPress={()=>{navigation.navigate('home')}}>
                <Text>Login</Text>
            </TouchableOpacity>

            <View style={{fontSize:30,position:"absolute",bottom:30}} >
                <Text> Do not have an account?</Text>
            <TouchableOpacity style={{borderWidth:2,height:30,marginTop:10,width:200,
            alignItems:"center",justifyContent:"center",borderRadius:10
            }} onPress={()=>{navigation.navigate('signup')}}>
                <Text>create Account</Text>
            </TouchableOpacity>
            </View>
            
               
            

        </View>
    )
};
export default Login;