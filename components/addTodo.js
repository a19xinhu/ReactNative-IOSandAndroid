import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
  [text, setText] = useState('');

 

  const pressHandler = () => {
    submitHandler(text);
    setText('');
  }

  return (
    <View>
      <Button color='coral' onPress={pressHandler} title='add todo' />
    
    <Button color='coral' onPress={pressHandler} title='add todo 10 times' />
  </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});