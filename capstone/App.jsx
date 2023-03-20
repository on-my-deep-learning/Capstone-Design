import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Camera from './screens/Camera';
import Setting from './screens/Setting';
import Recipe from './screens/recipe/Recipe';
import Invite from './screens/friends/Invite';
import Foodresult from './screens/result/Foodresult';
import Detail from './screens/recipe/Detail';
import Signup from './screens/login/Signup';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = props => (
  <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName={'Home'}>
    <Tab.Screen name="Camera" component={Camera} />
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Setting" component={Setting} />
  </Tab.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="Recipe" component={Recipe} />
        <Stack.Screen name="Invite" component={Invite} />
        <Stack.Screen name="Foodresult" component={Foodresult} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
