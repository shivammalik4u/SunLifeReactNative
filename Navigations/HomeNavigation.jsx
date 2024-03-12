import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TabsNavigation from './TabsNavigation';
import WellnessScreen from '../screens/WellnessScreen';
import LoginForm from '../components/LoginForm';
import SignUp from '../components/SignUp';
import BookingScreen from '../screens/BookingScreen';
import MarketingScreen from '../screens/MarketingScreen';
import Notification from '../screens/Notification';
import DashboardScreen from '../screens/DashboardScreen';
import EmployeeForm from '../components/EmployeeForm';
const Stack = createStackNavigator();


const HomeNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='home' component={TabsNavigation} />
            <Stack.Screen name='login-form' component={LoginForm} />
            <Stack.Screen name='signup' component={SignUp} />
            <Stack.Screen name='booking-screen' component={BookingScreen} />
            <Stack.Screen name='marketing-screen' component={MarketingScreen} />
            <Stack.Screen name='notification' component={Notification} />
            <Stack.Screen name='dashboard-screen' component={DashboardScreen} />
            <Stack.Screen name='employee-form' component={EmployeeForm} />
        </Stack.Navigator>
    )
}

export default HomeNavigation