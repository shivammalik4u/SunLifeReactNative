import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
// import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../utils/Colors';
import SectionHeading from '../components/SectionHeading'


import { Calendar } from 'react-native-calendars';
import PageHeader from '../components/PageHeader';
import Icon from 'react-native-vector-icons/FontAwesome';




const BookingScreen = () => {
    const { params } = useRoute();

    const [item, setItem] = useState();


    const navigation = useNavigation();

    useEffect(() => {
        setItem(params.details)
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

                        <View style={{ marginTop: 3 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 7, alignItems: 'center' }}>
                                {/* <Ionicons name="person" size={16} color={Colors.PRIMARY} /> */}
                                {/* <Ionicons name="person-outline" size={20} color={Colors.PRIMARY} /> */}
                                <Icon name="user-md" size={20} color={Colors.PRIMARY} />

                                <Text style={{ fontSize: 15, color: Colors.GRAY }}>Advisor Name</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 7, alignItems: 'center' }}>
                                {/* <Ionicons name="stopwatch-outline" size={20} color={Colors.PRIMARY} /> */}
                                <Icon name="clock-o" size={20} color={Colors.PRIMARY} />
                                <Text style={{ fontSize: 15, color: Colors.GRAY }}>Timing 9:00AM to 5:00PM</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ display: 'flex', flexDirection: 'row', gap: 7, alignItems: 'center' }}>
                                    {/* <Ionicons name="book" size={16} color={Colors.PRIMARY} /> */}
                                    {/* <Ionicons name="medical" size={20} color={Colors.PRIMARY} /> */}
                                    <Icon name="plus-square" size={20} color={Colors.PRIMARY} />
                                    <Text style={{ fontSize: 15, color: Colors.GRAY }}>XYZ Specialist</Text>
                                </View>
                                <Text style={{ fontWeight: 'bold', color: Colors.PRIMARY }}>Price: $10/hour</Text>
                            </View>
                        </View>
                        <SectionHeading heading='Description' />
                        <Text numberOfLines={20} ellipsizeMode='tail' style={{ marginTop: -10, marginBottom: 10, marginLeft: 6 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem doloribus consectetur, cum, rem repudiandae sit inventore repellendus nam ut, saepe aperiam ratione veritatis placeat nesciunt accusamus iure velit maxime? Dolorum, error quo fugiat ratione reiciendis aut quae labore quas excepturi doloremque dolores. Quos nesciunt quaerat quisquam ratione! Nulla tempora repudiandae nostrum perferendis ab Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, nobis? Veniam amet saepe molestias consectetur modi magnam doloribus quae. Dicta voluptatibus, quis nesciunt ut, ab magnam dolore accusamus officiis cumque, ad itaque animi facilis quibusdam provident aut sit odio numquam ipsam quisquam assumenda! Fugit accusamus eum sed eveniet magnam laboriosam, recusandae sequi tempore? Quas quidem nihil provident hic adipisci at suscipit. Quae suscipit odit in a iusto eaque nisi temporibus illum est molestias ut alias corporis, perferendis sint nesciunt ea.</Text>
                    </View>
                    <TouchableOpacity onPress={() => console.log('Book now is pressed')} style={styles.button}>
                        {/* <Ionicons name="call" size={20} color={Colors.WHITE} /> */}
                        <Icon name="phone" size={20} color={Colors.WHITE} />
                        <Text style={{ textAlign: 'center', color: Colors.WHITE }}>Call Now</Text>
                    </TouchableOpacity>



                    <View style={{ padding: 2, borderColor: Colors.PRIMARY, borderWidth: 1, height: '270', width: '100%', borderRadius: 10, backgroundColor: Colors.WHITE, marginTop: 20 }}>
                        <Calendar
                            onDayPress={onDayPress}
                            style={styles.calendar}
                            markedDates={{ [selectedDate]: { selected: true, selectedColor: Colors.PRIMARY } }}
                        />
                        <TouchableOpacity onPress={() => console.log('Book now is pressed')} style={styles.button}>
                            <Text style={{ textAlign: 'center', color: Colors.WHITE }}>Book Now</Text>
                        </TouchableOpacity>
                    </View>



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
    calendar: {
        width: '100%',
        backgroundColor: Colors.LIGHT_GREY,
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

export default BookingScreen;