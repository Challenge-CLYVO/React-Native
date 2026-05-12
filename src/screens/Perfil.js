import { View, Text, StyleSheet } from 'react-native';

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Equipe</Text>

      <View style={styles.card}>
        <Text style={styles.name}>Lucas Rafael Solimene</Text>
        <Text>RM: 565194</Text>

        <Text style={styles.name}>Samyr Couto Oliveira</Text>
        <Text>RM: 565562</Text>

        <Text style={styles.name}>Henrique Teixeira Cesar</Text>
        <Text>RM: 563088</Text>
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
    elevation: 2
  },

  name: {
    fontWeight: 'bold',
    marginTop: 10
  }
});