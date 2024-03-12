import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import Colors from '../utils/Colors'
import InformationCard from '../components/InformationCard'
import informationCard from '../data/informaionCard'

const CommunityScreen = () => {

  const [activeIndex, setActiveIndex] = useState();


  const data = [
    {
      title: 'Feed'
    },
    {
      title: 'Challenges'
    },
    {
      title: 'LeaderBoard'
    },
    {
      title: 'Following'
    }

  ]

  return (
    <View>
      <Header title={'Community Screen'} />
      <View>

        <FlatList
          data={data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TouchableOpacity style={[styles.container, activeIndex == index && { borderColor: Colors.WHITE, borderWidth: 2 }]} onPress={() => setActiveIndex(index)}>
              <Text style={{ color: Colors.WHITE }}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={{ marginBottom: 70 }}>
        <View style={{ marginLeft: 20, marginTop: 20 }}>
          <Text style={{ color: Colors.BLACK, fontWeight: 'bold', fontSize: 17 }}>Hello</Text>
        </View>
        <FlatList
          data={informationCard}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <InformationCard key={index} information={item} />
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40
  }
})

export default CommunityScreen;