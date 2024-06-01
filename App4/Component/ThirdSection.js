import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
const ThirdSection = () => {
  return (
    <View Style={styles.ThirdContainer}>
        <Text style={{fontSize:20,fontWeight:700,lineHeight:24,}}>Categories</Text>
      <View style={styles.SectionboxContainer}>
     
      <View style={styles.Sectionbox}>
        <Text style={{fontSize:16,fontweight:700,lineHeight:19.2,}}>Exercise</Text>
        <Text style={{fontSize:12,fontweight:400,lineHeight:14.4,marginBottom:5}}>12 task</Text>
        <Image source={require('../assets/Exercise.png')}/>
      </View>
      <View style={styles.Sectionbox}>
        <Text style={{fontSize:16,fontweight:700,lineHeight:19.2,}}>Study</Text>
        <Text style={{fontSize:12,fontweight:400,lineHeight:14.4,marginBottom:5}}>12 task</Text>
        <Image source={require('../assets/Study.png')}/>
      </View>
      <View style={styles.Sectionbox}>
        <Text style={{fontSize:16,fontweight:700,lineHeight:19.2,}}>Code</Text>
        <Image source={require('../assets/Code.png')}/>
      </View>
      <View style={styles.Sectionbox} >
       <Text style={{fontSize:16,fontweight:700,lineHeight:19.2,}}>Cook</Text>
       <Image source={require('../assets/cook.png')}/>
        </View>
      <View style={styles.Sectionbox} >
       <Text style={{fontSize:16,fontweight:700,lineHeight:19.2,}}>Dance</Text>
        <Image source={require('../assets/Dance.png')}/>
       </View>
      <View style={styles.Sectionbox} >
       <Text style={{fontSize:16,fontweight:700,lineHeight:19.2,}}>Eat</Text>
       <Image source={require('../assets/Eat.png')}/>
       </View>
      <View style={styles.Sectionbox} >
       <Text style={{fontSize:16,fontweight:700,lineHeight:19.2,}}>Sleep</Text>
       <Image source={require('../assets/Sleep.png')}/>
       </View>
      <View style={styles.Sectionbox} >
       <Text style={{fontSize:16,fontweight:700,lineHeight:19.2,}}>Drive</Text>
       <Image source={require('../assets/Drive.png')}/>
       </View>
      <View style={styles.Sectionbox} >
       <Text style={{fontSize:16,fontweight:700,lineHeight:19.2,}}>Swim</Text>
       <Image source={require('../assets/Swim.png')}/>
      </View>
    </View>
    </View>
  )
}

export default ThirdSection
const styles=StyleSheet.create({
    ThirdContainer:{
       marginHorizontal:20,
        marginTop:30
    },
    SectionboxContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    Sectionbox:{
        width:175,
        height:192,
        backgroundColor:'white',
        borderRadius:15,
        marginHorizontal:10,
        marginTop:10,
        padding:16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        position
    }
})