import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/home/home.jsx';
import CadDespesa from './src/screens/CadDespesa/cadDespesa.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator()
const optionheader = {
  headerShown:false
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name='home' component={Home} options={optionheader}/>
        <Stack.Screen name='despesas' component={CadDespesa} options={{title:'Despesa',headerTitleAlign:'center',headerShadowVisible:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
