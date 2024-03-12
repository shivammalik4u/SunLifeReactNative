import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
// import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';




const WelnessTools = () => {
    const data = [
        {
            icon: 'asterisk',
            title: 'Fitness Score'
        },
        {
            icon: 'user-md',
            title: 'Facial Analytics'
        },
        {
            icon: 'medkit',
            title: 'Covid 19 Self - Assessment'
        },
        {
            icon: 'empire',
            title: 'Cronic disease'
        },
        {
            icon: 'keyboard-o',
            title: 'BMI Calculator'
        },
    ]
    const navigation = useNavigation();
    return (
        <ScrollView nestedScrollEnabled={true}>
            <FlatList
                data={data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={styles.container}>
                        <View style={styles.textContainer}>
                            <View style={{alignSelf:'center', marginTop:10}}>
                                {/* <Ionicons name={item.icon} size={35} color={Colors.PRIMARY_LIGHT} /> */}
                                <Icon name={item.icon} size={35} color={Colors.PRIMARY_LIGHT}  />

                            </View>
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        marginRight: 10,
        marginBottom: 150
    },
    imageBackground: {
        height: 100,
        width: 100,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        height: 100,
        width: 100,
        backgroundColor: Colors.LIGHT_GREY, // Adjust the opacity as needed
        borderRadius: 10,
        padding: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        borderColor:Colors.PRIMARY,
        borderWidth:0.3
    },
    title: {
        fontSize: 12,
        color: Colors.BLACK,
        textAlign: 'center',
    },
})

export default WelnessTools