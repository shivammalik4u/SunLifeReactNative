import { View, Text,Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const MarketingCards = ({marketing}) => {
    const navigation = useNavigation();

    return (
        <ScrollView nestedScrollEnabled={true}>
        <FlatList
          data={marketing}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TouchableOpacity
            onPress={()=> navigation.navigate('marketing-screen', {item: item})}
              style={styles.container}>
              <ImageBackground
                source={item.Image}
                style={styles.imageBackground}>
                <View style={styles.textContainer}>
                    {/* <View style={{backgroundColor: Colors.WHITE, padding:6, position:'relative',marginRight:3, borderRadius:10}}>
                        <Text style={{fontSize:15, fontWeight:'bold', paddingHorizontal:20}}>Brand Name</Text>
                    </View> */}
                  <Text style={styles.title}>{item.Title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                  <View style={{backgroundColor: Colors.WHITE, padding:6, alignSelf:'flex-start', marginTop:30, borderRadius:10}}>
                    <Text style={{fontSize:15, fontWeight:'bold', paddingHorizontal:20}}>Apply for it</Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
        marginTop:0
    },
    imageBackground: {
        height: 200,
        width: 280,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
      },
      textContainer: {
        height: 200,
        width: 280,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
        borderRadius: 10,
        padding: 20,
        alignItems:'flex-start'
      },
      title: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white',
        marginTop:20,
      },
      description: {
        fontSize: 13,
        fontWeight:'200',
        color: Colors.WHITE,
      },
})

export default MarketingCards