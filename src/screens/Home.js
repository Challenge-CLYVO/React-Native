import { View, Text, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Home</Text>

      <Button
        title="Cadastro Pet"
        onPress={() => navigation.navigate('CadastroPet')}
      />

      <Button
        title="Lista Pets"
        onPress={() => navigation.navigate('ListaPets')}
      />

      <Button
        title="Lembretes"
        onPress={() => navigation.navigate('Lembretes')}
      />

      <Button
        title="Perfil"
        onPress={() => navigation.navigate('Perfil')}
      />
    </View>
  );
}