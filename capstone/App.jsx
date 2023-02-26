import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home'
import Camera from './screens/Camera'
import Setting from "./screens/Setting";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
        {/* <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator> */}
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Camera" component={Camera} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Setting" component={Setting} />
        </Tab.Navigator>
    </NavigationContainer>
    
  );
}

export default App;