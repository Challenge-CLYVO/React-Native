import { View, Text, StyleSheet } from 'react-native';

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>

      <View style={styles.card}>
        <Text>Nome: Lucas Rafael Solimene / RM: 565194</Text>
        <Text>Nome: Samyr Couto Oliveira / RM: 565562</Text>
        <Text>Nome: Henrique Teixeira Cesar / RM: 563088</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f6ff', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10
  }
});