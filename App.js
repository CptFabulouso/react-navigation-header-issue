import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Home = ({navigation}) => {
  return (
    <Button
      onPress={() => {
        navigation.navigate('Second');
      }}
      title="navigate"
    />
  );
};

const Second = () => {
  return null;
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerTitle: () => <Text>Custom header component</Text>}}
        />
        <Stack.Screen
          name="Second"
          component={Second}
          options={{headerTitle: () => <Text>Custom header component</Text>}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
