import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setUser} from './src/redux/Slice';
import {useNavigation} from '@react-navigation/native';

export default function TextValue() {
  const [userDetail, setUserDetails] = useState({
    userName: '',
    surname: '',
    userClass: '',
  });

  const navigation = useNavigation();

  const handleButtonClick = () => {
    navigation.navigate('IdDetails');
    dispatch(setUser(userDetail));
    
  };
  
  const {userName, surname, userClass} = useSelector(state => state.slice);
  
  const dispatch = useDispatch(setUser);
  
  const handleTextChange = (inputName, value) => {
    setUserDetails(prevState => ({
      ...prevState,
      [inputName]: value,
    }));
  };

  const textClear = ()=>{
    setUserDetails({
      userName: '',
      surname: '',
      userClass: '',
    });

    console.log("Hello");
  }
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 35, fontWeight: 'bold'}}>Details</Text>
      </View>
      <View style={{flex: 8, backgroundColor: '#b06d6d'}}>
        <TextInput
          value={userName}
          placeholder="name"
          style={{
            padding: 10,
            margin: 10,
            color: 'black',
            backgroundColor: '#824d4d',
          }}
          onChangeText={text => handleTextChange('userName', text)}
        />
        <TextInput
          value={surname}
          placeholder="surname"
          style={{
            padding: 10,
            margin: 10,
            color: 'black',
            backgroundColor: '#824d4d',
          }}
          onChangeText={text => handleTextChange('surname', text)}
        />
        <TextInput
          value={userClass}
          placeholder="class"
          style={{
            padding: 10,
            margin: 10,
            color: 'black',
            backgroundColor: '#824d4d',
          }}
          onChangeText={text => handleTextChange('userClass', text)}
        />

        {/* SUBMIT BUTTON */}
        <TouchableOpacity onPress={() => handleButtonClick() } >
          <View
            style={{
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#a4d7d3',
              margin: 20,
            }}>
            <Text style={{color: '#000000'}}>Sumbit</Text>
          </View>
        </TouchableOpacity>
        {/* ................................................................................................................. */}
      </View>
    </View>
  );
}
