import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Friends from './Friends';
import ChatRoom2 from '../Components/ChatRoom2';


const Stack = createNativeStackNavigator(); 

const FreindsChat: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="friends" > 
      <Stack.Screen name="friends" component={Friends}  options={{
          headerShown: false,
        }}/>
      <Stack.Screen name="chat" component={ChatRoom2}  options={{
          headerShown: false,
        }}/>

     
        
     
    </Stack.Navigator>
  );
};{}

export default FreindsChat;