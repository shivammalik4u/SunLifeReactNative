import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import Colors from '../utils/Colors'
// import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import PageHeader from '../components/PageHeader'




const Notification = () => {


    const notifications = [
        {
            id: 1,
            name: 'Service Request Closed',
            description: 'Your service request no 98765 for Provider List was closed successfully'
        },
        {
            id: 2,
            name: 'Daily habits target achieved:',
            description: 'You achieved the target for 10K steps for 13th March successfully. Now, take that to the next level by upgrading your target'
        },
        {
            id: 3,
            name: 'Wellness rewards',
            description: 'Congratulations! You have been awarded with a discount of 5% for the next service on account of consistent performance in your Wellness score. Please get in touch with your health advisor to know more'
        },
        {
            id: 4,
            name: 'Daily recommendations',
            description: 'Here’s a curated list of content which we think you would like based on your past history.'
        },
    ]

    const navigation = useNavigation();


    return (
        <SafeAreaView>
            <ScrollView>
                {/* <View style={{ marginLeft: 15, marginTop: 10, display: 'flex', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 15 }}>Notifications</Text>
                </View> */}

                <PageHeader title={'Notification'} />

                <View style={{ margin: 10 }}>
                    <FlatList
                        data={notifications}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => console.log('one notification is pressed')} style={{ borderRadius: 10, borderColor: Colors.PRIMARY, borderWidth: 1.5, padding: 20, marginTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                                <Image source={require('../assets/Images/2.jpg')} style={{ height: 40, width: 40, borderRadius: 99 }} />
                                {/* <Ionicons name={`${item.icon}`} size={24} color={Colors.PRIMARY} /> */}
                                <View>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
                                    <Text style={{ fontWeight: 'normal', fontSize: 13 }}>{item.description}</Text>

                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Notification