import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function CadastroPetScreen() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Pet</Text>

      <TextInput
        placeholder="Nome do pet"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      <TextInput
        placeholder="Idade"
        value={idade}
        onChangeText={setIdade}
        style={styles.input}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      <View style={styles.preview}>
        <Text style={styles.previewText}>
          {nome ? `🐾 ${nome} - ${idade || '?'} anos` : 'Preencha os dados'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f6ff', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },

  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12
  },

  button: {
    backgroundColor: '#4caf50',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20
  },

  buttonText: { color: '#fff', fontWeight: 'bold' },

  preview: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10
  },

  previewText: { fontSize: 16 }
});