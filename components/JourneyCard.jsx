import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors'
// import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';




const JourneyCard = () => {
    return (
        <View style={{ display: 'flex', flexDirection: 'column', gap:5 }}>

            <View style={styles.container}>
                <View style={styles.card}>
                    <View>
                        <Text style={{ fontSize: 15, fontWeight: '600', color: Colors.PRIMARY }}>7/33</Text>
                        <Text style={{ fontSize: 13, fontWeight: '600', color: Colors.PRIMARY }}>Active Days</Text>
                        <Text style={{ fontSize: 12, fontWeight: '300', color: Colors.GREY, marginTop: 5 }}>Updated 11/03/2024</Text>
                    </View>
                    <View style={{ alignSelf: 'flex-end' }}>
                        {/* <Ionicons name="arrow-forward" size={20} color={Colors.BLACK} /> */}
                        <Icon name="long-arrow-right" size={20} color={Colors.PRIMARY} />

                    </View>
                </View>
                <View style={styles.card}>
                    <View>
                        <Text style={{ fontSize: 15, fontWeight: '600', color: Colors.PRIMARY }}>1155</Text>
                        <Text style={{ fontSize: 15, fontWeight: '600', color: Colors.PRIMARY }}>Health Returns</Text>
                        <Text style={{ fontSize: 12, fontWeight: '300', color: Colors.GREY, marginTop: 5 }}>Updated 11/03/2024</Text>
                    </View>
                    <View style={{ alignSelf: 'flex-end' }}>
                        {/* <Ionicons name="arrow-forward" size={20} color={Colors.BLACK} /> */}
                        <Icon name="long-arrow-right" size={20} color={Colors.PRIMARY} />
                    </View>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.card}>
                    <View>
                        <Text style={{ fontSize: 15, fontWeight: '600', color: Colors.PRIMARY }}>64/99</Text>
                        <Text style={{ fontSize: 15, fontWeight: '600', color: Colors.PRIMARY }}>Lifestyle score</Text>
                        <Text style={{ fontSize: 12, fontWeight: '300', color: Colors.GREY, marginTop: 5 }}>Updated 11/03/2024</Text>
                    </View>
                    <View style={{ alignSelf: 'flex-end' }}>
                        {/* <Ionicons name="arrow-forward" size={20} color={Colors.BLACK} /> */}
                        <Icon name="long-arrow-right" size={20} color={Colors.PRIMARY} />

                    </View>
                </View>
                <View style={styles.card}>
                    <View>
                        <Text style={{ fontSize: 15, fontWeight: '600', color: Colors.PRIMARY }}>65%</Text>
                        <Text style={{ fontSize: 15, fontWeight: '600', color: Colors.PRIMARY }}>Wellbeing Score</Text>
                        <Text style={{ fontSize: 12, fontWeight: '300', color: Colors.GREY, marginTop: 5 }}>Updated 11/03/2024</Text>
                    </View>
                    <View style={{ alignSelf: 'flex-end' }}>
                        {/* <Ionicons name="arrow-forward" size={20} color={Colors.BLACK} /> */}
                        <Icon name="long-arrow-right" size={20} color={Colors.PRIMARY} />
                    </View>
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
        backgroundColor: Colors.SECONDARY
    },


})

export default JourneyCard