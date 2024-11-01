import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { postUserRequest } from './UserActions';

export default function Man2Screen({ navigation }) {
  const dispatch = useDispatch();
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);

  // Selector to access responseData and error
  const responseData = useSelector((state) => state.users.responseData);
  const error = useSelector((state) => state.users.error);

  const handlePostUser = () => {
    if (!data.trim()) {
      Alert.alert("Validation Error", "Job title cannot be empty.");
      return;
    }
    
    setLoading(true);
    const userData = { title: data, id: 1 };
    dispatch(postUserRequest(userData));
    navigation.navigate('man1');
  };

  useEffect(() => {
    console.log('Effect triggered:', { responseData, error });
    
    if (responseData) {
      console.log('Navigation to man1 triggered');
      setLoading(false);
    }
    
    if (error) {
      console.log('Error detected');
      setLoading(false);
      console.error('Error posting user:', error);
      Alert.alert("Error", "An error occurred while posting the job.");
    }
  }, [responseData, error, navigation]);



  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ flex: 0.8 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Hi Twinkle</Text>
        <Text style={{ fontSize: 16, color: 'gray' }}>Have a great day ahead</Text>
      </View>
      <View style={{ flex: 0.3, alignItems: 'center' }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>ADD YOUR JOB</Text>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 10,
          padding: 10,
          marginBottom: 20,
        }}>
          <Icon name="list-alt" size={20} color="#000" />
          <TextInput
            style={{
              marginLeft: 10,
              fontSize: 16,
              flex: 1,
            }}
            placeholder="Input your job"
            value={data}
            onChangeText={(text) => setData(text)}
          />
        </View>
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            backgroundColor: '#9095A0',
            width: '60%',
            height: 40,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={()=>{handlePostUser()
                        }}
          disabled={loading} // Disable button when loading
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" /> // Show loading indicator
          ) : (
            <Text style={{ fontSize: 19, color: 'white' }}>FINISH</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
