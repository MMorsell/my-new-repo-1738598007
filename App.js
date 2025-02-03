import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#800080', // Purple color
          },
          headerTintColor: '#fff', // White text color for contrast
        }}
      >
        <Drawer.Screen name="Hello Martin 2" component={Home} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Contact" component={Contact} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}