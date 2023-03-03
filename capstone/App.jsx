import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Camera from './screens/Camera';
import Setting from "./screens/Setting";
import Recipe from "./screens/recipe/Recipe";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = (props) => (
    <Tab.Navigator screenOptions={{headerShown: false}}
    initialRouteName={props.name}
    >
        <Tab.Screen name="Camera" component={Camera} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
)

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={TabNavigator} />
            <Stack.Screen name="Recipe" component={Recipe} />
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;