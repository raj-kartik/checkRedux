import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {user} from './src/redux/Slice';

export default function TextValue() {
  const [userDetail, setUserDetails] = useState({
    userName: '',
    surname: '',
    userClass: '',
  });

  const [ClickedButton, setClickedButton] = useState(false);
  const handleButtonClick = () => {
    setClickedButton(!ClickedButton);
    dispatch(user(userDetail));
  };

  const {userName, surname, userClass} = useSelector(state => state.user);

  const dispatch = useDispatch();

  const handleTextChange = (inputName, value) => {
    setUserDetails(prevState => ({
      ...prevState,
      [inputName]: value,
    }));
  };
  return (
    <View style={{backgroundColor: 'black'}}>
      <View>
        <TextInput
          value={userDetail.userName}
          style={{
            padding: 20,
            margin: 10,
            color: 'black',
            backgroundColor: '#ffffff',
          }}
          onChangeText={text => handleTextChange('userName', text)}
        />
        <TextInput
          value={userDetail.surname}
          style={{
            padding: 20,
            margin: 10,
            color: 'black',
            backgroundColor: '#ffffff',
          }}
          onChangeText={text => handleTextChange('surname', text)}
        />
        <TextInput
          value={userDetail.userClass}
          style={{
            padding: 20,
            margin: 10,
            color: 'black',
            backgroundColor: '#ffffff',
          }}
          onChangeText={text => handleTextChange('userClass', text)}
        />
      </View>
      <TouchableOpacity onPress={() => handleButtonClick}>
        <View style={{padding: 10, backgroundColor: '#ffffff', margin: 20}}>
          <Text style={{color: '#000000'}}>Sumbit</Text>
        </View>
      </TouchableOpacity>

      {ClickedButton && (
        <View>
          <View style={{backgroundColor: '#d16161', borderRadius: 14}}>
            <Text>{userName}</Text>
            <Text>{surname}</Text>
            <Text>{userClass}</Text>
          </View>
        </View>
      )}
    </View>
  );
}
