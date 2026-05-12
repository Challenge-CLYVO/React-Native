import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🐾 Pet Care</Text>
      <Text style={styles.subtitle}>Gerencie seus pets com facilidade</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastroPet')}>
        <Text style={styles.buttonText}>Cadastrar Pet</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ListaPets')}>
        <Text style={styles.buttonText}>Lista de Pets</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Lembretes')}>
        <Text style={styles.buttonText}>Lembretes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('Perfil')}>
        <Text style={styles.buttonOutlineText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6fb',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 30
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    elevation: 3
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600'
  },
  buttonOutline: {
    borderWidth: 2,
    borderColor: '#4a90e2',
    padding: 16,
    borderRadius: 14,
    marginTop: 10
  },
  buttonOutlineText: {
    textAlign: 'center',
    color: '#4a90e2',
    fontWeight: '600'
  }
});