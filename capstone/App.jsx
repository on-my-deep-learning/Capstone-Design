import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import Setting from './screens/Setting';
import Signup from './screens/login/Signup';
import Login from './screens/login/Login';
import Delivery from './screens/delivery/Delivery';
import Recommend from './screens/ai/Recommend';
import Menu from './screens/delivery/Menu';
import Restaurant from './screens/delivery/Restaurant';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="건강하게먹어요!">
        <Stack.Screen name="건강하게먹어요!" component={Setting} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Delivery" component={Delivery} />
        <Stack.Screen name="Recommend" component={Recommend} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
