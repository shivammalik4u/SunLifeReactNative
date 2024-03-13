import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import DashboardScreen from './DashboardScreen'
import SectionHeading from '../components/SectionHeading'
import Colors from '../utils/Colors'
import ConnectFitnessTracker from '../components/ConnectFitnessTracker'
import JourneyCard from '../components/JourneyCard'

const MoveScreen = () => {
    return (
        <ScrollView>
            <Header title={'Move'} />
            <ScrollView style={{ padding: 7, backgroundColor: Colors.WHITE }} nestedScrollEnabled={true}>
                <SectionHeading heading={'Dashboard'}/>

                <DashboardScreen />

                <SectionHeading heading={'For You'}/>
                <JourneyCard/>
                <ConnectFitnessTracker/>

            </ScrollView>
        </ScrollView>
    )
}

export default MoveScreen