import { View, Text, StyleSheet } from 'react-native';

export default function LembretesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⏰ Lembretes</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>💉 Vacina</Text>
        <Text>10/05</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🩺 Consulta</Text>
        <Text>20/05</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f6fb', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2
  },

  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 5
  }
});