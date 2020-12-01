import React from 'react';
import { Text } from 'react-native';
import {Button, Label} from './style';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';

export default function PayButton({ onPress, focused}){
  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <Button
    colors={
      focused
      ? ['#fff', '#ccc']
      : ['##191970', '#000080']
    }
    start={[1, 0.2]}
    >
      <MaterialIcons name="attach-money" size={30} color={focused ? '#000' : '#FFFF00'} />
      <Label focused={focused}>Pagar</Label>
    </Button>
    </TouchableWithoutFeedback>
  );
}