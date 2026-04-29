import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/home";
import CadastroPet from "./src/screens/CadastroPet";
import Lembretes from "./src/screens/Lembretes";
import ListaPets from "./src/screens/ListaPets";
import Perfil from "./src/screens/Perfil";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Home name="Home" component={Home}/>
        <Stack.Home name="CadastroPet" component={CadastroPet}/>
        <Stack.Home name="Lembretes" component={Lembretes}/>
        <Stack.Home name="ListaPets" component={ListaPets}/>
        <Stack.Home name="Perfil" component={Perfil}/>
      </Stack.Navigator>
    </NavigationContainer>
  );

};

