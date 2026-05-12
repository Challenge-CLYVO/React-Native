import { View,Text,StyleSheet,TextInput,TouchableOpacity,FlatList,Alert,KeyboardAvoidingView,Platform } from 'react-native';
import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { salvarLembretes, buscarLembretes } from '../services/lembretesStorage';

export default function LembretesScreen() {
  const [titulo, setTitulo] = useState('');
  const [data, setData] = useState('');
  const [lembretes, setLembretes] = useState([]);

  const carregarLembretes = async () => {
    const dados = await buscarLembretes();
    setLembretes(dados);
  };

  useFocusEffect(
    useCallback(() => {
      carregarLembretes();
    }, [])
  );

  const adicionarLembrete = async () => {
    try {
      if (!titulo || !data) {
        Alert.alert('Erro', 'Preencha todos os campos');
        return;
      }

      const novo = {
        id: Date.now().toString() + Math.random().toString(),
        titulo,
        data
      };

      const novaLista = [...lembretes, novo];

      setLembretes(novaLista);
      await salvarLembretes(novaLista);

      Alert.alert('Sucesso', 'Lembrete adicionado!');

      setTitulo('');
      setData('');
    } catch (e) {
      console.log('ERRO:', e);
    }
  };

  const removerLembrete = (id) => {
    Alert.alert('Remover', 'Deseja excluir?', [
      { text: 'Cancelar' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: async () => {
          const novaLista = lembretes.filter(l => l.id !== id);
          setLembretes(novaLista);
          await salvarLembretes(novaLista);
        }
      }
    ]);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        <Text style={styles.title}>⏰ Lembretes</Text>

        <View style={styles.formCard}>
          <TextInput
            placeholder="Título (ex: Vacina)"
            value={titulo}
            onChangeText={setTitulo}
            style={styles.input}
          />

          <TextInput
            placeholder="Data (ex: 10/05)"
            value={data}
            onChangeText={setData}
            style={styles.input}
          />

          <TouchableOpacity style={styles.button} onPress={adicionarLembrete}>
            <Text style={styles.buttonText}>Adicionar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={lembretes}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          initialNumToRender={5}

          ListEmptyComponent={
            <Text style={styles.empty}>
              Nenhum lembrete criado ⏰
            </Text>
          }

          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{item.titulo}</Text>
                <Text style={styles.date}>{item.data}</Text>
              </View>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => removerLembrete(item.id)}
              >
                <Text style={styles.deleteText}>🗑️</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </KeyboardAvoidingView>
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

  formCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3
  },

  input: {
    backgroundColor: '#f9fafc',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee'
  },

  button: {
    backgroundColor: '#4caf50',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 5
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2
  },

  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16
  },

  date: {
    color: '#666',
    marginTop: 2
  },

  deleteButton: {
    padding: 8
  },

  deleteText: {
    fontSize: 18
  },

  empty: {
    textAlign: 'center',
    color: '#777',
    marginTop: 20
  }
});