
import React from 'react'
import TextValue from './TextValue'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IdDetails from './src/IdDetails';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="User Info"
          options={{headerShown: false}}
          component={TextValue}
        />
        <Stack.Screen
          name="IdDetails"
          options={{headerStyle: {backgroundColor: '#d98d8d'}}}
          component={IdDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}