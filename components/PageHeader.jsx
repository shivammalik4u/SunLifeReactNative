import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


const PageHeader = ({ title }) => {
    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: Colors.SECONDARY, height: 50 }}>

            <View style={{ marginLeft: 15, marginTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    {/* <Ionicons name="arrow-back" size={24} color="black" /> */}
                    {/* <Icon name="arrow-left" size={30} color={Colors.PRIMARY} /> */}
                    <Icon name="angle-left" size={30} color={Colors.PRIMARY} />



                </TouchableOpacity>
                <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 15, color: Colors.BLACK }}>{title}</Text>
            </View>
        </View>
    )
}

export default PageHeader