import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import Colors from '../utils/Colors';
import { useNavigation } from '@react-navigation/native';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };
  const navigation = useNavigation();
  return (
    // <ImageBackground source={require('../../assets/Images/LoginBackground2.jpg')} style={styles.backgroundImage}>
    <ScrollView>

      <View style={styles.container}>
        <Text style={{ fontSize:35, fontWeight: 'bold' }}>
          Welcome to <Text style={{ color: Colors.PRIMARY }}>Sun Life Health 360
          </Text>
        </Text>
        <View style={{ width: '100%', marginTop: 50 }}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Enter your password"
            secureTextEntry
          />
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={{ textAlign: 'center', color: Colors.WHITE }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('signup')} style={styles.button}>
            <Text style={{ textAlign: 'center', color: Colors.WHITE }}>Sign Up</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop:50
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    marginLeft: 3,
    fontWeight: 'bold',
    fontSize: 17
  },
  input: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 5,
    marginBottom: 15,
    paddingHorizontal: 20
  },
  button: {
    padding: 16,
    backgroundColor: Colors.PRIMARY,
    marginTop: 10,
    borderRadius: 99,
    paddingHorizontal: 100,
    height: 60,
    justifyContent: 'center'
  }
});

export default LoginForm;
