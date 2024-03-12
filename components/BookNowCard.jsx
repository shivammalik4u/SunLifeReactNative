import { View, Text,Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';


const BookNowCard = ({bookNow}) => {
    const navigation = useNavigation();
    return (
        <ScrollView nestedScrollEnabled={true}>
            <FlatList
                data={bookNow}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                    onPress={()=> navigation.navigate('booking-screen', {details: item})}
                        style={styles.container}>
                        <ImageBackground
                            source={item.Image}
                            style={styles.imageBackground}>
                            <View style={styles.textContainer}>
                                <Text style={styles.title}>{item.Title}</Text>
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
        marginBottom: 10
    },
    imageBackground: {
        height: 150,
        width: 150,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
      },
      textContainer: {
        height: 150,
        width: 150,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
        borderRadius: 10,
        padding: 5,
        display: 'flex',
        flexDirection:'column',
        justifyContent:'flex-end'
      },
      title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        textAlign:'center',
      },
})

export default BookNowCard