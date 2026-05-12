import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import { salvarPets, buscarPets } from './../services/petsStorage';

export default function CadastroPetScreen() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  const handleSalvar = async () => {
  try {
    console.log("CLICOU SALVAR");

    const pets = await buscarPets();
    console.log("PETS ATUAIS:", pets);

    const novoPet = {
      id: Date.now().toString(),
      nome,
      idade
    };

    const novaLista = [...pets, novoPet];

    await salvarPets(novaLista);

    console.log("SALVOU:", novaLista);

    Alert.alert('Sucesso', 'Pet salvo!');
  } catch (e) {
    console.log("ERRO:", e);
  }
};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🐶 Cadastro de Pet</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        placeholder="Digite o nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      <Text style={styles.label}>Idade</Text>
      <TextInput
        placeholder="Digite a idade"
        value={idade}
        onChangeText={setIdade}
        style={styles.input}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleSalvar}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.previewTitle}>Preview</Text>
        <Text style={styles.previewText}>
          {nome ? `🐾 ${nome} - ${idade || '?'} anos` : 'Preencha os dados'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f6fb', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },

  label: {
    marginBottom: 5,
    color: '#555'
  },

  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2
  },

  button: {
    backgroundColor: '#4caf50',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    elevation: 2
  },

  previewTitle: {
    fontWeight: 'bold',
    marginBottom: 5
  },

  previewText: {
    fontSize: 16
  }
});