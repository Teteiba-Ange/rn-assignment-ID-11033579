import { View, Text,FlatList ,StyleSheet} from 'react-native'
import React from 'react';
const task=[
  {name:"Angela",key:'1'},
  {name:'Mobile Application development',key:'2'},
  { name:'push Ups',key:'3'},
  {name:'Software Engineering',key:'4'},
  {name:'Regression',key:'5'},
  {name:'Probability',key:'6'},
  { name:'Data Mining ',key:'7'},
  {name:'Data Structures and algorithm',key:'8'},
  {name:'E-Business',key:'9'},
  {name:'Official Statistics',key:'10'},
  { name:'Numerical And Computational Methods',key:'11'},
  {name:'System Administration',key:'12'},
  {name:'Abstract Algebra',key:'13'},
  {name:'Hackaton',key:'14'},
  { name:'Projects',key:'15'}
  ];
const Fourthsection=()=>{
 
   return(
     <View style={styles.Fourthsectioncontainer}>
    <View> <Text style={styles.FourthsectionBig}>Ongoing Task </Text></View>
 <FlatList 
 data={task}
  horizontal={false}
  renderItem={({item})=>(
    <View style={styles.FlatlistBox}>
    <Text style={styles.FlatlistBoxSection}>{item.name}</Text>
    </View>
  )}
  keyExtractor={(item)=>item.key.toString}
  />
  </View>
);}
const styles=StyleSheet.create({
  Fourthsectioncontainer:{
   flex:2,
  marginTop:40
  }, FourthsectionBig:{
    fontSize:20,
    fontWeight:700
  },
  FlatlistBox:{
           borderColor:'#E8D1BA',  
        borderWidth:1,
        height:80,
        width:354,
        borderRadius:15,
        marginHorizontal:20,
        marginVertical:20,
        marginRight:10,
        color:'blue'
    },FlatlistBoxSection:{
       fontSize:20,
    fontWeight:700,
        fontStyle:'bold',
    }
})
export default Fourthsection
