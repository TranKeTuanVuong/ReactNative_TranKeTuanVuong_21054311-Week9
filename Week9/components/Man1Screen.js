import React, { useState,useEffect} from 'react';
import { View, Text,Image,Button,TouchableOpacity,TextInput,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from './UserActions';
import { useUsers } from './Hook';
export default function Man1Screen({ navigation,route}) {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);
  // const { users, loadUsers, addUser, modifyUser, removeUser } = useUsers();
  // const [newUserTitle, setNewUserTitle] = useState('');

  // useEffect(() => {
  //   loadUsers();
  // }, [loadUsers]);

  // const handleAddUser = () => {
  //   if (!newUserTitle) return;
  //   addUser({ title: newUserTitle });
  //   setNewUserTitle('');
  // };
  useEffect(() => {
    dispatch(fetchUsersRequest());

    // Add the focus listener
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(fetchUsersRequest());
    });

    // Clean up the listener on unmount or when navigation changes
    return () => unsubscribe();
}, [dispatch, navigation]);
   

 
const Item = ({title}) => (
  <View style={{ flex:1, 
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#DEE1E6',
                borderRadius: 10,
                padding: 15,
                marginVertical: 5,
                }}>
    <Text style={{flex: 1,
                  fontSize: 18,}}>{title.title}</Text>
    <TouchableOpacity style={{ marginLeft: 10,}} >
      <Icon name="trash" size={20} color="#FF6347" onPress={()=>handleDelete(title.id)} />
    </TouchableOpacity>
    <TouchableOpacity style={{ marginLeft: 10,}} onPress={()=>{
                                                               navigation.navigate('man3',{
                                                                     title
                                                              });
                                                             }}>
      <Icon name="pencil" size={20} color="#FF6347" />
    </TouchableOpacity>
  </View>
);
  return (
    <View style={{flex:1}}>
      <View style={{
                    alignItems:'flex-end'}}>
        <Text style={{fontSize: 24,
                      fontWeight: 'bold',}}>Hi Twinkle</Text>
        <Text style={{fontSize: 16,
                      color: 'gray',}}>Have a great day ahead</Text>
      </View>

    <View style={{flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 10,
                  padding: 10,
                  marginBottom: 20,}}>
        <Icon name="search" size={20} color="#000" />
        <TextInput
          style={{marginLeft: 10,
                  fontSize: 16,
                  flex: 1,}}
          placeholder="Search"
        />
      </View>
    <View style={{flex:1}}>
      <FlatList
        data={users}
        renderItem={({item}) => <Item title={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View> 
    <View style={{flex:1,alignItems:'center'}}>
    <TouchableOpacity style={{position: 'absolute',
                              backgroundColor: '#9095A0',
                              width: 60,
                              height: 60,
                              borderRadius: 30,
                              justifyContent: 'center',
                              alignItems: 'center',}} onPress={()=>navigation.navigate('man2')}>
        <Icon name="plus" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
    </View> 
  );
  
}