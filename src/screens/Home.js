import { View, Text, Button } from "react-native";

export default function Home({navigation}){
    return(
        <View>
            <Text>Pet Care</Text>
            <Button title="Cadastrar Pet" onPress={() => navigation.navigate('Cadastro')} />
            <Button title="Lista de Pets" onPress={() => navigation.navigate('Lista')} />
            <Button title="Lembretes" onPress={() => navigation.navigate('Lembretes')} />
            <Button title="Perfil" onPress={() => navigation.navigate('Perfil')} />
        </View>
    )
}