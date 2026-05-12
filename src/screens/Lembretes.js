import { View, Text, StyleSheet } from 'react-native';

export default function LembretesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lembretes</Text>

      <View style={styles.card}>
        <Text>Vacina - 10/05</Text>
      </View>

      <View style={styles.card}>
        <Text>Consulta - 20/05</Text>
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
    borderRadius: 10,
    marginBottom: 10
  }
});