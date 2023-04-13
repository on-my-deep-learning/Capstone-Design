import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import Setting from './screens/Setting';
import Recipe from './screens/recipe/Recipe';
import Invite from './screens/except/Invite';
import Foodresult from './screens/except/Foodresult';
import Detail from './screens/recipe/Detail';
import Signup from './screens/login/Signup';
import Login from './screens/login/Login';
import Delivery from './screens/delivery/Delivery';
import Recommend from './screens/ai/Recommend';
import Menu from './screens/delivery/Menu';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="건강하게먹어요!">
        <Stack.Screen name="건강하게먹어요!" component={Setting} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Recipe" component={Recipe} />
        <Stack.Screen name="Invite" component={Invite} />
        <Stack.Screen name="Foodresult" component={Foodresult} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Delivery" component={Delivery} />
        <Stack.Screen name="Recommend" component={Recommend} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
