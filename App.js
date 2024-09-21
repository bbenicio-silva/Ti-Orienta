import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

const UserProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEditing, setIsEditing] = useState(false); // Controla o modo de edição

  // Função para alternar entre edição e exibição
  const handleEdit = () => {
    if (isEditing) {
      Alert.alert('Sucesso', 'Dados salvos com sucesso!');
    }
    setIsEditing(!isEditing); // Alterna entre editar e salvar
  };

  // Função para "Voltar"
  const handleBack = () => {
    Alert.alert('Voltar?', 'Sua alteração não será salva');
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho com a borda e o título "Perfil" */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Perfil</Text>
      </View>

      {/* Nome do usuário */}
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
        editable={isEditing} // Bloqueia a edição quando não está no modo "Editar"
      />

      {/* Email do usuário */}
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        editable={isEditing} // Bloqueia a edição quando não está no modo "Editar"
      />

      {/* Botão de Editar/Salvar */}
      <TouchableOpacity style={styles.button} onPress={handleEdit}>
        <Text style={styles.buttonText}>
          {isEditing ? 'Salvar' : 'Editar'}
        </Text>
      </TouchableOpacity>

      {/* Botão de Voltar */}
      <TouchableOpacity style={styles.button} onPress={handleBack}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  header: {
    width: '100%',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#2c8dc0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default UserProfile;