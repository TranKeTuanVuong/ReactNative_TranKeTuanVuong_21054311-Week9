import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import Store from './components/Store';
import HomeScreen from './components/HomeScreen';
import Man1Screen from './components/Man1Screen';
import Man2Screen from './components/Man2Screen';
import Man3Screen from './components/Man3Screen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="man1" component={Man1Screen} />
        <Stack.Screen name="man2" component={Man2Screen} />
        <Stack.Screen name="man3" component={Man3Screen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
export default App;


