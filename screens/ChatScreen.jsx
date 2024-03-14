import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import Colors from '../utils/Colors'
import DetailsScreen from './DetailsScreen'
import marketing from '../data/marketing'
import MindWokouts from '../components/MindWorkouts'
import mindWorkout from '../data/mindWorkout'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'


const ChatScreen = () => {

    const item = [
        {
            Title: 'Benefit Navigation',
            description: `Start a chat to better understand your health navtgaton benefits`
        },
        {
            Title: 'Get a second option',
            description: 'Do you have questions about a new diagnosts or treatment plan? We can get answers'
        },
        {
            Title: 'Manage an Existing Condition',
            description: 'Are you seeking support managing an exrstlng condition? We can help.'
        },
        {
            Title: 'Be Proactive About Your Health',
            description: 'Tell us your goal and we can help find the best resources for you.'
        },
        {
            Title: 'Discuss another concern',
            description: 'Let us navvgate you through a health concern or question. such as finding a PCP'
        },
        
    ]


    onClick = (index) => {
        setActiveIndex(index)
    }

    const navigation = useNavigation();

    return (
        <View>
            <Header title={'Chat'} />
            <ScrollView style={{ marginBottom: 70 }}>

                <FlatList
                    data={item}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={()=> navigation.navigate('employee-form', {type: item.Title})} style={styles.card}>
                            <Text style={styles.heading}>{item.Title}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                            <Icon name="long-arrow-right" size={20} color={Colors.PRIMARY} />

                        </TouchableOpacity>
                    )}
                />



            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        display: 'flex',
        shadowOffset: {
            width: 0,
            height: 2,

        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 20,
        marginHorizontal: 10
    },
    heading: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom:5
    },
})

export default ChatScreen