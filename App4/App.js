import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirstSection from './Component/FirstSection';
import SecondSection from './Component/SecondSection';
import ThirdSection from './Component/ThirdSection';
import FourthSection from './Component/FourthSection';


export default  function App() {
  return (
    <View style={styles.container}>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
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
