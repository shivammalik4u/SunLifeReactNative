import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import browse from '../data/browse'
import Colors from '../utils/Colors'
import Header from '../components/Header'

const { width: screenWidth } = Dimensions.get('window');


const BrowseScreen = () => {

    return (
        <>
        <Header title={'Browse'}/>
            <ScrollView>
                <FlatList
                    data={browse}
                    //   horizontal={true}
                    //   showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => console.log('clicked')}
                            style={styles.container}>
                            <ImageBackground
                                source={item.Image}
                                style={styles.imageBackground}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.title}>{item.Title}</Text>
                                    <Text style={styles.description}>{item.description}</Text>
                                    <View style={{ backgroundColor: Colors.WHITE, padding: 6, alignSelf: 'center', marginTop: 30, borderRadius: 10 }}>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold', paddingHorizontal: 20 }}>See more</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    )}
                />
            </ScrollView >
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 0,
        marginTop: 20,
        alignSelf: 'center'
    },
    imageBackground: {
        height: 200,
        width: screenWidth*0.95,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        height: 200,
        width: screenWidth*0.95,
        backgroundColor: 'rgba(0, 0, 0, 0.2)', // Adjust the opacity as needed
        borderRadius: 10,
        padding: 20,
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white',
        marginTop: 20,
        textAlign: 'center'
    },
    description: {
        fontSize: 13,
        fontWeight: '200',
        color: Colors.WHITE,
    },
})

export default BrowseScreen