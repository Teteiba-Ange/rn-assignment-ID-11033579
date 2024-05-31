import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirstSection from './Component/FirstSection';
import SecondSection from './Component/SecondSection';


const App = () =>{
  return (
    <View style={styles.container}>
      <FirstSection/>
      <SecondSection/>
         </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
export default App