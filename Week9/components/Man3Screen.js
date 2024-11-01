import React, { useState,useEffect} from 'react';
import { View, Text,Image,Button,TouchableOpacity,TextInput,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserRequest } from './UserActions';
import { fetchUsers, updateUser } from './Usertoolkit'
export default function Man3Screen ({navigation,route}){
  // const UserList = () => {
  // const dispatch = useDispatch();
  // const { users, loading, error } = useSelector((state) => state.users);

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, [dispatch]);

  // const handleUpdateUser = (user) => {
  //   const updatedUser = { ...user, title: 'New Job Title' }; // Modify user data as needed
  //   dispatch(updateUser(updatedUser));
  // };
  const {title} =route.params;
  const [data,setData] = useState(title.title);
 const dispatch = useDispatch();
  const { users, loading, error } = useSelector(state => state.users);

  const handleUpdateUser = (id,data) => {
    const userData ={"id":id,"title":data}
    dispatch(updateUserRequest(userData)); // Dispatch the update request action
    navigation.navigate('man1');
  };

  useEffect(() => {
    // Handle loading and error state
    if (loading) {
      console.log('Updating user...');
    }
    if (error) {
      console.error('Error updating user:', error);
    }
  }, [loading, error]);
    

  return(
     <View style={{flex:1}}>
      <View style={{flex:0.8}}>
        <Text style={{fontSize: 24,
                      fontWeight: 'bold',}}>Hi Twinkle</Text>
        <Text style={{fontSize: 16,
                      color: 'gray',}}>Have a great day ahead</Text>
      </View>
    <View style={{flex:0.3,alignItems:'center'}}>
        <Text style={{fontSize:25,
                      fontWeight:'bold',
                      }}>EDIT YOUR JOB</Text>
    </View>
    <View style={{flex:1}}>
    <View style={{flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 10,
                  padding: 10,
                  marginBottom: 20,}}>
        <Icon name="list-alt" size={20} color="#000" />
        <TextInput
          style={{marginLeft: 10,
                  fontSize: 16,
                  flex: 1,}}
          placeholder="input your job"
          value={data}
          onChangeText={(text)=>setData(text)}
        />
      </View>
    </View>
    <View style={{flex:1,alignItems:'center'}}>
    <TouchableOpacity style={{position: 'absolute',
                              backgroundColor: '#9095A0',
                              width: '60%',
                              height: 40,
                              borderRadius: 30,
                              justifyContent: 'center',
                              alignItems: 'center',}} 
                      onPress={()=>handleUpdateUser(title.id,data)}>
        <Text style={{fontSize:19,
                      color:'white'}}>FINSH</Text>
      </TouchableOpacity>
    </View>
    </View> 
  );
}