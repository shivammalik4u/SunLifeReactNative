import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import TabsNavigation from '../Navigations/TabsNavigation'
import SectionHeading from '../components/SectionHeading'
import ForYou from '../components/ForYou'
import forYou from '../data/forYou'
import JourneyCard from '../components/JourneyCard'
import ConnectFitnessTracker from '../components/ConnectFitnessTracker'
import MarketingCards from '../components/MarketingCards'
import marketing from '../data/marketing'
import BookNowCard from '../components/BookNowCard'
import bookNow from '../data/bookNow'
import WellnessScreen from './WellnessScreen'
import WelnessTools from '../components/WellnessTools'
import SocialMediaCard from '../components/SocialMediaCard'
import socialPost from '../data/socialPost'
import Colors from '../utils/Colors'
import DashboardScreen from './DashboardScreen'
// import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import DailyHabitsCalander from '../components/DailyHabitsCalander'

import { HabitScreen, AllHabits } from './HabitScreen'



const HomeScreen = () => {
  return (
    <View>
      <Header title={'Hi User!'} />
      <ScrollView style={{ padding: 7, backgroundColor: Colors.WHITE }} nestedScrollEnabled={true}>
        <View style={styles.input}>
          {/* <Ionicons name="search" size={20} color={Colors.GRAY} /> */}
          <Icon name="search" size={20} color={Colors.PRIMARY} />
          <TextInput placeholder='Search' style={{ width: '100%' }} />
        </View>
        {/* <SectionHeading heading={'Dashboard'} />
        <DashboardScreen /> */}

        <SectionHeading heading={'Next up for you'} seeAll={false} />
        <ForYou forYou={forYou} />
        <SectionHeading heading={'Next up for you'} seeAll={false} />
        <JourneyCard />
        <DailyHabitsCalander />
        <ConnectFitnessTracker />
        <SectionHeading heading={'Get more, Healthier'} seeAll={true} />
        <BookNowCard bookNow={bookNow} />
        <SectionHeading heading={'Marketing Banners'} seeAll={true} />
        <MarketingCards marketing={marketing} />
        <SectionHeading heading={'Health Shorts'} seeAll={true} />
        <SocialMediaCard socialPost={socialPost} />
        <SectionHeading heading={'Your Welness Tools'} seeAll={false} />
        <WelnessTools />

      </ScrollView>
    </View>
  )
}



const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.WHITE,
    height: 45,
    padding: 5,
    borderRadius: 99,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
    borderWidth: 0.4,
    borderColor: Colors.PRIMARY,
    marginHorizontal: 10
  },
  iconContainer: {
    position: 'relative',
    marginRight: 3,
  },
  badge: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    paddingHorizontal: 5,
    paddingVertical: 3,
    position: 'absolute',
    top: -7,
    right: 0
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
  },
})

export default HomeScreen