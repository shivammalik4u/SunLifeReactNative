import { View, Text, Image, Button, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Image source={require('../assets/Images/3.jpg')} style={{ width: '100%', height: 350, objectFit: 'cover' }} />
      <View style={{ padding: 10, alignItems: '' }}>
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <Text style={{ fontSize: 40, fontWeight: 'bold' }}>
            Welcome to <Text style={{ color: Colors.PRIMARY }}>Sun Life Health 360
            </Text>
          </Text>
          <Text>Track your Health in easy way</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('login-form')} style={styles.button}>
          <Text style={{ textAlign: 'center', color: Colors.WHITE }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('signup')} style={styles.button}>
          <Text style={{ textAlign: 'center', color: Colors.WHITE }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    backgroundColor: Colors.PRIMARY,
    marginTop: 10,
    borderRadius: 99
  }
})

export default LoginScreen;