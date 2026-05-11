import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./src/screens/Home";
import CadastroPet from "./src/screens/CadastroPet";
import ListaPets from "./src/screens/ListaPets";
import Lembretes from "./src/screens/Lembretes";
import Perfil from "./src/screens/Perfil";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CadastroPet" component={CadastroPet} />
        <Stack.Screen name="ListaPets" component={ListaPets} />
        <Stack.Screen name="Lembretes" component={Lembretes} />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}