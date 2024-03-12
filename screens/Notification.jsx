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
            name: 'First',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi, perferendis ut omnis placeat quibusdam laborum. Quidem, illo animi est magni voluptas voluptates ducimus, enim assumenda, a porro quisquam numquam eius fugiat debitis velit atque explicabo? Quam nostrum nam, error, autem nesciunt, cum voluptatibus ab ducimus ut ea omnis mollitia.'
        },
        {
            id: 2,
            name: 'Second',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi, perferendis ut omnis placeat quibusdam laborum. Quidem, illo animi est magni voluptas voluptates ducimus, enim assumenda, a porro quisquam numquam eius fugiat debitis velit atque explicabo? Quam nostrum nam, error, autem nesciunt, cum voluptatibus ab ducimus ut ea omnis mollitia.'
        },
        {
            id: 3,
            name: 'Third',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi, perferendis ut omnis placeat quibusdam laborum. Quidem, illo animi est magni voluptas voluptates ducimus, enim assumenda, a porro quisquam numquam eius fugiat debitis velit atque explicabo? Quam nostrum nam, error, autem nesciunt, cum voluptatibus ab ducimus ut ea omnis mollitia.'
        },
        {
            id: 4,
            name: 'Fourth',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi, perferendis ut omnis placeat quibusdam laborum. Quidem, illo animi est magni voluptas voluptates ducimus, enim assumenda, a porro quisquam numquam eius fugiat debitis velit atque explicabo? Quam nostrum nam, error, autem nesciunt, cum voluptatibus ab ducimus ut ea omnis mollitia.'
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