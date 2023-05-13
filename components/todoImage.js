import React from 'react'
import {StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

export default function TodoImage({ pressHandler, toImage }) {

  return (
    <TouchableOpacity onPress={() => pressHandler(toImage.key)}>
       {(()=>  {
          if(toImage.key == '1') {
            return(
              <Image source={require('../assets/rating-1.png')}/>
            )
          }else if(toImage.key == '2'){
            return(
              <Image source={require('../assets/rating-2.png')}/>
            )
          }else if(toImage.key == '3'){
            return(
              <Image source={require('../assets/rating-3.png')}/>
            )
          }else if(toImage.key == '4'){
            return(
              <Image source={require('../assets/rating-4.png')}/>
            )
          }
          return <Image source={require('../assets/Brating-5.png')}/>
      })()}
       
    </TouchableOpacity>
  )
}
 /*<Image source={require('../assets/rating-2.png')}/> */
const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
  }
});