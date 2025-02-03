import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerActiveTintColor: '#f4511e',
          drawerInactiveTintColor: 'gray',
        }}
      >
        <Drawer.Screen 
          name="Home" 
          component={Home} 
          options={{
            title: 'Home',
          }}
        />
        <Drawer.Screen 
          name="About" 
          component={About} 
          options={{
            title: 'About',
          }}
        />
        <Drawer.Screen 
          name="Contact" 
          component={Contact} 
          options={{
            title: 'Contact',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}