import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors'
// import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';




const JourneyCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View>
                    <Text style={{ fontSize: 15, fontWeight: '600', color: Colors.PRIMARY }}>You are missing 100% returns</Text>
                    <Text style={{ fontSize: 12, fontWeight: '300', color: Colors.GREY, marginTop: 5 }}>Explore Health returns from ABHI</Text>
                </View>
                <View style={{ alignSelf: 'flex-end' }}>
                    {/* <Ionicons name="arrow-forward" size={20} color={Colors.BLACK} /> */}
                    <Icon name="long-arrow-right" size={20} color={Colors.PRIMARY}  />

                </View>
            </View>
            <View style={styles.card}>
                <View>
                    <Text style={{ fontSize: 15, fontWeight: '600', color: Colors.PRIMARY }}>Health Assessment</Text>
                    <Text style={{ fontSize: 12, fontWeight: '300', color: Colors.GREY, marginTop: 5 }}>To understand your lifestyle better</Text>
                </View>
                <View style={{ alignSelf: 'flex-end' }}>
                    {/* <Ionicons name="arrow-forward" size={20} color={Colors.BLACK} /> */}
                    <Icon name="long-arrow-right" size={20} color={Colors.PRIMARY}  />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        height: 100,
        width: '48%',
        borderRadius: 10,
        borderColor: Colors.PRIMARY,
        borderWidth: 0.3,
        padding: 10,
        justifyContent: 'space-between',
        backgroundColor: Colors.LIGHT_GREY
    },


})

export default JourneyCard