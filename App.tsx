/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  ScrollView,
  Button,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList, Alert, TouchableWithoutFeedback, Keyboard
} from 'react-native';




  //  {}
  // [ ]
  import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [addImage, setTodos] = useState([
    { text: 'one star', key: '1' },
    { text: 'two star', key: '2' },
    { text: 'three star', key: '3' },
    { text: 'four star', key: '4' },
  ]);

  const pressHandler = (key:string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = (text:string) => {
    
      setTodos(prevTodos => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={addImage}
              renderItem={({ item }) => (
                <TodoItem toImage={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});



