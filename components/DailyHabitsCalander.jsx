import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors';
import { useState } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
// import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AllHabits } from '../screens/HabitScreen';


const dates = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 30, 31
];


const DailyHabitsCalander = () => {
    const [activeIndex, setActiveIndex] = useState();
    return (
        <ScrollView nestedScrollEnabled={true}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <Text style={{ fontWeight: 'normal', fontSize: 15, marginTop: 15, marginBottom: 10, marginLeft: 5, color: Colors.BLACK }}>Daily Habits</Text>
                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', gap:4,  }}>
                    <Icon name='plus' size={15} color={Colors.PRIMARY} />
                    <Text style={{ fontWeight: 'bold', fontSize: 13, marginRight: 5, color: Colors.PRIMARY }}>Add New Habit</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={dates}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <TouchableOpacity key={index} style={[styles.container, item <= 6 && { backgroundColor: Colors.SECONDARY }]}
                        onPress={() => item.Nav && navigation.navigate(item.Nav)}>
                        {/* <Ionicons name={item.icon} size={20} color={Colors.GREY} /> */}
                        <Icon name={item.icon} size={15} color={Colors.PRIMARY} />

                        <Text style={{ textAlign: 'center', marginTop: 0 }}>{item}</Text>

                    </TouchableOpacity>
                )}
            />
            <AllHabits/>
            <View>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: Colors.BLACK, marginTop: 15, textAlign: 'center' }}>Drink a glass of water with each meal and snack</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ textAlign: 'center', color: Colors.WHITE }}>Done Today</Text>
                </TouchableOpacity>
            </View>
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
        marginTop: 4,
        marginBottom: 4
    },
    button: {
        padding: 12,
        backgroundColor: Colors.PRIMARY,
        marginTop: 10,
        borderRadius: 99,
        paddingHorizontal: 100,
        height: 40,
        justifyContent: 'center'
    }
});

export default DailyHabitsCalander