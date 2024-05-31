import { View, Text, Style,StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const FirstSection = () => {
  return (
    <View style={StyleSheet.container1}>
        <View>
        <Text style={styles.FirstSectionTextONE}>Hello,Dev</Text>
        <Text style={styles.FirstSectionTextTwo}>14 task today</Text>
        </View>
      <View style={styles.ImageBorder}>
        <Image source={require('../assets/Profile Image.png')}/>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
    container1:{
        flex:1,
        backgroundColor:'blue',
        width:354,
        height:52,
        border:20,
        marginTop:52,
        marginLeft:20,
        marginRight:20,
        marginHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    FirstSectionTextONE:{
      fontWeight:700,
      height:37,
      lineHeight:38.4,
      fontSize:32,
    },
    FirstSectionTextTwo:{
        width:77,
        height:13,
        marginTop:39,
        fontWeight:500,
        fontSize:12,
        color:'#000000',
        lineHeight:14.4,
    },
    ImageBorder:{
        borderRadius:50,
        backgroundColor:'white'
    }
})

export default FirstSection
