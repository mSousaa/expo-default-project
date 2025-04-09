import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: '/api/placeholder/150/150' }}
            style={styles.logo}
          />
          <Text style={styles.appTitle}>Sistema de Gestão</Text>
        </View>

        <Text style={styles.welcomeText}>Bem-vindo de volta!</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Seu e-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Sua senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Não tem uma conta? </Text>
          <TouchableOpacity>
            <Text style={styles.signupLink}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loginContainer: {
    width: Platform.OS === 'web' ? 400 : '100%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  welcomeText: {
    fontSize: 18,
    color: '#555',
    marginBottom: 25,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#3498db',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    color: '#555',
    fontSize: 14,
  },
  signupLink: {
    color: '#3498db',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default LoginScreen;