import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from "react-native"
import HomeScreen from './screens/HomeScreen'
import TaskFormScreen from './screens/TaskFormScreen'


const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={({ navigation }) => ({
            title: "Tasks App",
            headerStyle: { 
              backgroundColor: "#222f3e",
            },
            headerTitleStyle: {
              color: "white"
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('TaskFormScreen')}>
                <Text style={{color: "white", fontSize: 15}}>Crear Tareas</Text>
              </TouchableOpacity>
            )
          })}
        />
        <Stack.Screen 
          name="TaskFormScreen" 
          component={TaskFormScreen} 
          options={{
            title: "Crear nueva tareas",
            headerStyle: {
              backgroundColor: "#222f3e",
            },
            headerTitleStyle: { color: "#fff"},
            headerTintColor: "#fff"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App