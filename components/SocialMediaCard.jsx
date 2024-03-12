import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const SocialMediaCard = ({ socialPost }) => {
  const navigation = useNavigation();

  return (
    <ScrollView nestedScrollEnabled={true}>
      <FlatList
        data={socialPost}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.container}>
            <ImageBackground
              source={item.Image}
              style={styles.imageBackground}>
              <View style={styles.textContainer}>
                <View style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: 10,
                  padding: 5, height: 100,
                  width: 350, display:'flex', justifyContent:'space-around'
                }}>
                  <Text style={styles.title}>{item.Title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                </View>
              </View>
            </ImageBackground>
            {/* <View style={{borderRadius: 99, backgroundColor: Colors.WHITE, marginTop:10, alignItems:'center', padding: 10, width: 150}}>
              <Text>Likes and comments</Text>
            </View> */}
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    // height: 420,
    // backgroundColor: Colors.LIGHT_GREY
  },
  imageBackground: {
    height: 350,
    width: 350,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    height: 350,
    width: 350,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'white',
    marginTop: 0,
    textAlign: 'center',
  },
  description: {
    fontSize: 13,
    fontWeight: '200',
    color: Colors.WHITE,
    textAlign: 'center',
  },
})

export default SocialMediaCard