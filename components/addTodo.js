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
              //button add once
              <Button color='coral' onPress={pressHandler} title='add todo' />
            )
          }else if(text == '500') {
            return(
              //button add 500
              <Button color='coral' onPress={pressHandler} title='add todo 500' />
            )
          }
             //button add 100 times
          return <Button color='coral' onPress={pressHandler} title='add todo 100 times' />
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