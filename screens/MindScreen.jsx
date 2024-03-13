import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import Colors from '../utils/Colors'
import DetailsScreen from './DetailsScreen'
import marketing from '../data/marketing'
import MindWokouts from '../components/MindWorkouts'
import mindWorkout from '../data/mindWorkout'

const MindScreen = () => {



    const [activeIndex, setActiveIndex] = useState(0);

    const detail = {
        Headline: 'Self Care Tool kit',
        Title: 'Welcome to self care Tool Kits',
        Image: require('../assets/Images/safecare.jpg'),
        description: `Take charge of your mental health, at your own pace. Self-care toolkits are interactive exercises filled with
approaches that have been proven to be effective in managing mental health issues.
The self-care toolkits in Sun Life Health 360 were developed by internationally recognized mental health
experts with decades of experience helping patients around the world. in collaboration with Dialogue.

     Sun Life Health 360 is powered by Dialogue.
     You have access to the following toolkits:
            Anxiety & Worry
            Depression
            Social Anxiety
            Divorce & Separation
            Loss & Bereavement
Before you get started. please take a few minutes to check in with how you are feeling by completing a
brief symptom quiz. You'll be able to see your score and access all the toolkit modules freely after`
    }

    const data = [
        {
            title: 'Toolkits'
        },
        {
            title: 'Mind Workouts'
        },
    ]



    return (
        <View>
            <Header title={'Mind'} />
            <View>

                <FlatList
                    data={data}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity style={[styles.container, activeIndex == index && { borderColor: Colors.PRIMARY, borderWidth: 2 }]} onPress={() => setActiveIndex(index)}>
                            <Text style={{ color: Colors.BLACK }}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <ScrollView style={{ marginBottom: 70 }}>

                {activeIndex == 0 && <DetailsScreen item={detail} />}
                {activeIndex == 1 && <MindWokouts item={mindWorkout} />}
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // backgroundColor: Colors.PRIMARY,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40
    }
})

export default MindScreen