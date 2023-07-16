import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

export default function IdDetails() {

  const navigation = useNavigation();
  const EditClickHandle = () => {
    navigation.navigate('User Info');
  };

  const data = useSelector(state => state.slice.inputs);
  return (
    <View
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#9e5858'}}>
      <View
        style={{
          backgroundColor: '#d98d8d',
          margin: 10,
          borderRadius: 10,
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}}>
            Name
          </Text>
          <Text style={{color: '#000', fontSize: 30}}>{data.userName}</Text>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}}>
            Surname
          </Text>
          <Text style={{color: '#000', fontSize: 30}}>{data.surname}</Text>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}}>
            Class
          </Text>
          <Text style={{color: '#000', fontSize: 30}}>{data.userClass}</Text>
        </View>
        <TouchableOpacity
          onPress={EditClickHandle}
          style={{padding: 20, borderRadius: 50, backgroundColor: '#7268c9'}}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: '#000'}}>
            Edit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
