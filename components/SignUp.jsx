import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Colors from '../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';


const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleSignUp = () => {
        console.log('Email:', email);
        console.log('Password:', password);
    };
    const navigation = useNavigation();


    return (
        <ScrollView>

        {/* // <ImageBackground source={require('../../assets/Images/LoginBackground2.jpg')} style={styles.backgroundImage}> */}
        <View style={styles.container}>
            <Text style={{ fontSize: 40, fontWeight: 'bold' }}>
                Welcome to <Text style={{ color: Colors.PRIMARY }}>Sun Life Health 360
                </Text>
            </Text>
            <View style={{ width: '100%', marginTop: 50 }}>
                <Text style={styles.label}>Name:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder="Enter your name"
                    keyboardType='default'
                    autoCapitalize="none"
                />
                <Text style={styles.label}>Email:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Text style={styles.label}>Mobile:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setMobile}
                    value={mobile}
                    placeholder="Enter your mobile"
                    keyboardType="phone-pad"
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

                <Text style={styles.label}>Confirm Password:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                    placeholder="Confirm your password"
                    secureTextEntry
                />
                <TouchableOpacity onPress={handleSignUp} style={styles.button}>
                    <Text style={{ textAlign: 'center', color: Colors.WHITE }}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('login-form')} style={styles.button}>
                    <Text style={{ textAlign: 'center', color: Colors.WHITE }}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical:50
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

export default SignUp;
