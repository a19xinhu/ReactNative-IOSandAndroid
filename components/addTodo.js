import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({text, submitHandler }) {
  
  const pressHandler = () => {
    submitHandler();
  }

  return (
    <View>
      {(()=>  {
          if(text == '1') {
            return(
              <Button color='coral' onPress={pressHandler} title='add todo' />
            )
          }
          return <Button color='coral' onPress={pressHandler} title='add todo 10 times' />
      })()}
      
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