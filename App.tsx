/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {Button,StyleSheet,Text,View,Image,FlatList,} from 'react-native';
import Header from './components/header';
import TodoImage from './components/todoImage';
import AddTodo from './components/addTodo';

export default function App() {
  //declare a new state variable, which we call Image
  const [Image, setImage] = useState([
    {  key: '1' },
    {  key: '2' },
    {  key: '3' },
    {  key: '4' },
  ]);

  //delete function
  const pressHandler = (key:string) => {
    setImage(prevImage => {
      return prevImage.filter(image => image.key != key);
    });
  };

  //add image function
  const submitHandler = () => {
    //use the setImage from useState to add new image.
    setImage(prevImage => {
        return [
          {  key: Math.random().toString() },
          ...prevImage
        ];
      });
  };

  //add image 10 times  different image
  const submitHandler100 = () => {
    //use the setImage from state to add new image.
    for(let i =0; i< 100;i++) {
      submitHandler();
    }
  };
  const submitHandler500 = () => {
    //use the setImage from state to add new image.
    for(let i =0; i< 500;i++) {
      submitHandler();
    }
  };
  // main screen code
  return (
      <View style={styles.container}>
         {/* header from header.js*/}
        <Header/> 
        <View style={styles.content}>
          {/* AddTodo from addTodo.js , it is about button */}
          <AddTodo text='1' submitHandler={submitHandler} />
          <AddTodo text='100' submitHandler={submitHandler100} />
          <AddTodo text='500' submitHandler={submitHandler500} />
          <View style={styles.list}> 
            <FlatList
              data={Image}  //use the Image group (useState)
              renderItem={({ item }) => ( 
                // TodoImage from todoImage.js , it is about button function
                <TodoImage toImage={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});

  //  {}    {/* */}
  // [ ]

