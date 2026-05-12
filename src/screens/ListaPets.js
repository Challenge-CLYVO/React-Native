import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function ListaPetsScreen() {
  const pets = [
    { id: '1', nome: 'Rex' },
    { id: '2', nome: 'Luna' }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🐾 Meus Pets</Text>

      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>🐶</Text>
            </View>

            <View>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.subtext}>Pet cadastrado</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6fb',
    padding: 20
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 14,
    marginBottom: 12,
    elevation: 2
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4a90e2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },

  avatarText: {
    fontSize: 20,
    color: '#fff'
  },

  nome: {
    fontSize: 18,
    fontWeight: '600'
  },

  subtext: {
    color: '#777',
    fontSize: 13
  }
});