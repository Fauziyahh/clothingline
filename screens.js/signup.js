import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View,TextInput } from 'react-native';



const signup=()=>{
    return(
        <View style={{flex: 1,
            
            alignItems: 'center',
            justifyContent: 'center'}}>
                
            <Text style={{fontSize:30,position:"absolute",top:50}}>Signup</Text>

            <TextInput style={{borderWidth:2,height:30,marginTop:10,width:200}} placeholder="enter username" />
            <TextInput style={{borderWidth:2,height:30,marginTop:10,width:200}} placeholder="enter email" />
            <TextInput style={{borderWidth:2,height:30,marginTop:10,width:200}} placeholder=" enter password" />
            <TextInput style={{borderWidth:2,height:30,marginTop:10,width:200}} placeholder=" confirm password" />
            
            <TouchableOpacity style={{borderWidth:2,height:30,marginTop:10,width:100,
            alignItems:"center",justifyContent:"center",borderRadius:10
            }}>
                <Text>Signup</Text>
            </TouchableOpacity>
            
               
            

        </View>

    )
}

export default signup;