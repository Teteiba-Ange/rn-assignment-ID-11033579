import { View, Text,FlatList ,StyleSheet} from 'react-native'
import React ,{useState}from 'react'

const FourthSection = () => {
    const [task,setTask]=useState([
        {name:'Mobile App Development',key:'1'},
        {name:'Web Development',key:'2'},
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
    ])
    return (
    <View Style={styles.FourthSectionContainer}>
        <Text style={{fontSize:20,fontWeight:700,lineHeight:24,}}>Ongoing Task</Text>
        <Flatlist 
        data ={task}
          render Item={(Item)=>(
            <View style={styles.FlatListBox}>
                <Text>{Item.name}</Text>
                </View>   
          )}
      
        />
    </View>
  )
}

export default FourthSection
const style=StyleSheet.create({
    FourthSectionContainer:{
        marginTop:40
       } ,
    FlatListBox:{
        borderColor:'#E8D1BA',  
        borderWidth:1,
        height:128,
        width:354,
        borderRadius:15,
        marginHorizontal:20,
        marginVertical:20
    }

})