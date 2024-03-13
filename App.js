import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadUsuario from "./src/pages/CadUsuario/CadUsuario";
import Home from "./src/pages/Home/Home";
import Login from "./src/pages/Login/Login";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CadUsuario" component={CadUsuario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
