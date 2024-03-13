import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
// import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../utils/Colors';
import SectionHeading from '../components/SectionHeading'
import Icon from 'react-native-vector-icons/FontAwesome';



import PageHeader from '../components/PageHeader';



const DetailsScreen = ({ item }) => {
    // const { params } = useRoute();
    // const [item, setItem] = useState();
    // const navigation = useNavigation();
    // useEffect(() => {
    //     setItem(params.item)
    // }, [params]);



    return item && (
        <ScrollView>


            <View style={styles.container}>
                {item.Headline ? <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 3, textAlign: 'center', marginBottom: 10, color: Colors.BLACK }}>{item.Headline}</Text> : <></>}
                <View style={{ padding: 2, borderColor: Colors.PRIMARY, borderWidth: 1, height: '270', width: '100%', borderRadius: 10, backgroundColor: Colors.WHITE }}>
                    <Image source={item.Image} style={{ width: '100%', height: 250, borderRadius: 10, alignSelf: 'center' }}></Image>
                </View>


                <View style={{ display: 'flex', gap: 3, padding: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 3, marginBottom: 2, color: Colors.BLACK }}>{item.Title}</Text>

                    <SectionHeading heading='Description' />
                    <Text numberOfLines={20} ellipsizeMode='tail' style={{ marginTop: -10, marginBottom: 10, marginLeft: 6 }}>{item.description}</Text>
                </View>
                <TouchableOpacity onPress={() => console.log('Check now')} style={styles.button}>
                    {/* <Ionicons name="link" size={20} color={Colors.WHITE} /> */}


                    {/* <Icon name="link" size={20} color={Colors.PRIMARY} /> */}

                    <Text style={{ textAlign: 'center', color: Colors.WHITE }}>Check Now</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>


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

export default DetailsScreen;