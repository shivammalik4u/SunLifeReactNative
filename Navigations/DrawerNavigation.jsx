import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen';
import EmployeeForm from '../components/EmployeeForm';
import TabsNavigation from './TabsNavigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../utils/Colors';
import MoveScreen from '../screens/MoveScreen';
import HomeNavigation from './HomeNavigation';
import MindScreen from '../screens/MindScreen';
import ChatScreen from '../screens/ChatScreen';
import BrowseScreen from '../screens/BrowseScreen';
import LoginScreen from '../screens/LoginScreen';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {


    return (
        <Drawer.Navigator screenOptions={{
            style: {
                backgroundColor: 'lightgray',
                width: 240,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
            },

        }}>
            <Drawer.Screen
                name="Home"
                component={HomeNavigation}
                options={{
                    headerShown: false,
                    drawerIcon: () => (

                        <Icon name="home" size={17} color={Colors.PRIMARY} />
                    )
                }
                }
            />
            <Drawer.Screen
                name="Move"
                component={MoveScreen}
                options={{
                    headerShown: false,
                    drawerIcon: () => (

                        <Icon name="street-view" size={17} color={Colors.PRIMARY} />
                    )
                }
                }
            />
            <Drawer.Screen
                name="Mind"
                component={MindScreen}
                options={{
                    headerShown: false,
                    drawerIcon: () => (

                        <Icon name="brain" size={17} color={Colors.PRIMARY} />
                    )
                }
                }
            />
            <Drawer.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    headerShown: false,
                    drawerIcon: () => (

                        <Icon name="comment-dots" size={17} color={Colors.PRIMARY} />
                    )
                }
                }
            />
            <Drawer.Screen
                name="Browse"
                component={BrowseScreen}
                options={{
                    headerShown: false,
                    drawerIcon: () => (

                        <Icon name="book-reader" size={17} color={Colors.PRIMARY} />
                    )
                }
                }
            />
            <Drawer.Screen
                name="Login Screen"
                component={LoginScreen}
                options={{
                    headerShown: false,
                    drawerIcon: () => (

                        <Icon name="plus" size={17} color={Colors.PRIMARY} />
                    )
                }
                }
            />



            {/* <Drawer.Screen name="Employee Form" component={EmployeeForm} /> */}


        </Drawer.Navigator>


    )
}

export default DrawerNavigation