import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors'
import fitnessDevices from '../data/fitnessDevices'
import { FlatList } from 'react-native-gesture-handler'

const ConnectFitnessTracker = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: Colors.PRIMARY }}>Connect your fitness tracker</Text>
            <Text style={{ fontWeight: '300', color: Colors.GREY }}>To keep track of your health</Text>
            <View style={{ marginTop: 10, marginLeft: 10 }}>
                <FlatList
                    data={fitnessDevices}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity key={index} style={{ margin:5, marginRight:15, alignItems: 'center', marginTop:10 }}>
                            <Image source={item.Logo} style={{ height: 40, width: 40, objectFit: 'contain', borderRadius: 99 }} />
                            <Text style={{ textAlign: 'center', marginTop: 0 }}>{item.Name}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderColor: Colors.PRIMARY,
        borderWidth: 0.3,
        backgroundColor: Colors.LIGHT_GREY,
        marginTop: 30,
        height: 150,
        padding: 10,
        width:'98%',
        alignSelf:'center'
    }
})

export default ConnectFitnessTracker