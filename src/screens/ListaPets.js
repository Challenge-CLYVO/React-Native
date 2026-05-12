import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function ListaPetsScreen() {
  const pets = [
    { id: '1', nome: 'Rex' },
    { id: '2', nome: 'Luna' }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Pets</Text>

      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.text}> {item.nome}</Text>
          </View>
        )}
      />
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
  },

  text: { fontSize: 16 }
});