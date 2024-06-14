import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     
      <Text>Username</Text>
      <TextInput placeholder="Username" ></TextInput>
      <Text>Password</Text>
      <TextInput placeholder="password" secureTextEntry={true}/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"column"
  },
});
