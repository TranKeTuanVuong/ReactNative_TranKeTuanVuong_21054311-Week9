import React, { useState,useEffect} from 'react';
import { View, Text,Image,Button,TouchableOpacity,TextInput,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function HomeScreen({navigation,route}) {

  return (
    <View style={{ flex: 1}}>
       <View style={{flex:3,
                  flexDirection:'column',
                  alignItems:'center',
                  justifyContent:'space-around'}} >
       <Text style={{fontSize:25,color:'blue',fontWeight:'bold'}}>MANAGE YOUR TASK</Text>
    </View>
    <View style={{flex:1}}>
     <View style={{flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 10,
                  padding: 10,
                  marginBottom: 20,}}>
        <Icon name="envelope" size={20} color="#000" />
        <TextInput
          style={{marginLeft: 10,
                  fontSize: 16,
                  flex: 1,}}
          placeholder="Enter your name"
        />
      </View>
      </View>
    <View style={{flex:2,
                  alignItems:'center'}}>
        <TouchableOpacity style={{height:40,
                                  width:'80%',
                                  backgroundColor:'#00BDD6',
                                  borderRadius:10}} onPress={()=>navigation.navigate('man1')}>
        <View style={{flex:1,
                      flexDirection:'row',
                      justifyContent:'center',
                      margin:10,
                      }}>
        <Text style={{color:'white'}}>GET START </Text>
        <Icon name="arrow-right" size={20} color="#000" style={{}} />
        </View>
        </TouchableOpacity>
    </View>
    </View>  
  );
}
