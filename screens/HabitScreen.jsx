import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
// import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../utils/Colors';
import SectionHeading from '../components/SectionHeading'


import { Calendar } from 'react-native-calendars';
import PageHeader from '../components/PageHeader';
import Icon from 'react-native-vector-icons/FontAwesome';
import habits from '../data/habits';






const AllHabits = () => {
    const navigation = useNavigation();
    return (
        <View>
            <SectionHeading heading={'My Habits'} />
            <FlatList
                data={habits}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <TouchableOpacity key={index} style={{
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
                    }}
                        onPress={() => navigation.navigate('habit-screen', { item: item })}>
                        {/* <Ionicons name={item.icon} size={20} color={Colors.GREY} /> */}
                        <Icon name={item.icon} size={15} color={Colors.PRIMARY} />

                        <Text style={{ textAlign: 'center', marginTop: 0 }}>{item.Title}</Text>

                    </TouchableOpacity>
                )}
            />
        </View>
    )
}


const HabitScreen = () => {
    const { params } = useRoute();

    const [item, setItem] = useState();



    const navigation = useNavigation();

    useEffect(() => {
        setItem(params.item)
    }, [params]);


    const [selectedDate, setSelectedDate] = useState('');

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
    };



    return item && (
        <SafeAreaView>
            <ScrollView>

                {/* <View style={{ marginLeft: 15, marginTop: 10, display: 'flex', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 15 }}>{item.Title}</Text>
                </View> */}

                <PageHeader title={item.Title} />

                <View style={styles.container}>
                    <View style={{ padding: 2, borderColor: Colors.PRIMARY, borderWidth: 1, height: '270', width: '100%', borderRadius: 10, backgroundColor: Colors.WHITE }}>
                        <Image source={item.Image} style={{ width: '100%', height: 250, borderRadius: 10, alignSelf: 'center' }}></Image>
                    </View>




                    <View style={{ display: 'flex', gap: 3, padding: 5 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 3 }}>{item.Name}</Text>

                       
                        <SectionHeading heading='Description' />
                        <Text numberOfLines={20} ellipsizeMode='tail' style={{ marginTop: -10, marginBottom: 10, marginLeft: 6 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem doloribus consectetur, cum, rem repudiandae sit inventore repellendus nam ut, saepe aperiam ratione veritatis placeat nesciunt accusamus iure velit maxime? Dolorum, error quo fugiat ratione reiciendis aut quae labore quas excepturi doloremque dolores. Quos nesciunt quaerat quisquam ratione! Nulla tempora repudiandae nostrum perferendis ab Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, nobis? Veniam amet saepe molestias consectetur modi magnam doloribus quae. Dicta voluptatibus, quis nesciunt ut, ab magnam dolore accusamus officiis cumque, ad itaque animi facilis quibusdam provident aut sit odio numquam ipsam quisquam assumenda! Fugit accusamus eum sed eveniet magnam laboriosam, recusandae sequi tempore? Quas quidem nihil provident hic adipisci at suscipit. Quae suscipit odit in a iusto eaque nisi temporibus illum est molestias ut alias corporis, perferendis sint nesciunt ea.</Text>
                    </View>
                    <TouchableOpacity onPress={() => console.log('Book now is pressed')} style={styles.button}>
                        {/* <Ionicons name="link" size={20} color={Colors.WHITE} /> */}
                        <Text style={{ textAlign: 'center', color: Colors.WHITE }}>Edit Habit</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        width: 'auto',
        marginTop: 6,
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    button: {
        padding: 16,
        backgroundColor: Colors.PRIMARY,
        // marginTop: 10,
        borderRadius: 99,
        margin: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    }
})

export { HabitScreen, AllHabits };