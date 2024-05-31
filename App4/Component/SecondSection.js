import { View, Text,TextInput,StyleSheet} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import {  Feather} from '@expo/vector-icons';
const SecondSection = () => {
  return (
    <View style={styles.Secondsection}>
      
        <TextInput style={styles.SecondSectionTextInput} placeholder="Search" placeholderTextColor={'black'}/>
      <AntDesign name="search"height={24} size={82} color="black" style={{position:'absolute', top:146,left:31,}} />
      
      <View style={styles.slider}>
        <Feather name="slider" size={34} height={34} color="white" style={{position:'absolute', top:142,left:331,}} />
      </View>
    </View>
  )
}
 
const styles=StyleSheet.create({ 
   Secondsection:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:30,
    marginHorizontal:20,
    height:'auto',
   },
   SecondSectionTextInput:{
     width:280,
     height:48,
     marginTop:134,
     marginLeft:20,
     border:1,
     backgroundColor:'white',
   },
   slider:{
    width:50,
    height:48,
    marginTop:135,
    marginLeft:323,
   }
})


export default SecondSection