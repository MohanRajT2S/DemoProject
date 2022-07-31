import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreen from './AppModules/AuthScreen';
import HomeScreen from './AppModules/HomeScreen';
import PokeymonDetailsScreen from "./AppModules/PokeymonDetailsScreen";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        options={{title: 'Welcome'}}
      />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name={'PokemonDetails'} component={PokeymonDetailsScreen}/>
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
