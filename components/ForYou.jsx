import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors';
import { useState } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
// import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


const ForYou = ({ forYou }) => {
    const [activeIndex, setActiveIndex] = useState();
    const navigation = useNavigation();

    return (
        <ScrollView nestedScrollEnabled={true}>
            <FlatList
                data={forYou}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <TouchableOpacity key={index} style={[styles.container, activeIndex == index && { backgroundColor: Colors.PRIMARY_LIGHT }]}
                        onPress={() => item.Nav && navigation.navigate(item.Nav)}>
                        {/* <Ionicons name={item.icon} size={20} color={Colors.GREY} /> */}
                        <Icon name={item.icon} size={15} color={Colors.PRIMARY}  />

                        <Text style={{ textAlign: 'center', marginTop: 0 }}>{item.Name}</Text>
                        {item.badge != "" ?

                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>{item.badge}</Text>
                            </View>
                            : <View></View>
                        }
                    </TouchableOpacity>
                )}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: Colors.WHITE,
        marginRight: 10,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: Colors.PRIMARY,
        display: 'flex',
        flexDirection: 'row',
        gap: 3,
        marginTop: 4
    },
    badge: {
        backgroundColor: Colors.BLACK,
        borderRadius: 99,
        paddingHorizontal: 5,
        paddingVertical: 3,
        position: 'absolute',
        top: -4,
        right: 10
    },
    badgeText: {
        color: 'white',
        fontSize: 7,
    },

});

export default ForYou