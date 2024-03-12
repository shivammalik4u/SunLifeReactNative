import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors';

const SectionHeading = ({ heading, seeAll }) => {
    return (
        <View style={{display:'flex', flexDirection: 'row', justifyContent:'space-between', alignItems:'center' ,marginBottom: 10}}>
            <Text style={{ fontWeight: 'normal', fontSize: 15, marginTop: 15, marginBottom: 10,marginLeft: 5, color: Colors.BLACK }}>{heading}</Text>
            {seeAll && <Text style={{ fontWeight: 'bold', fontSize: 10, marginTop: 15, marginBottom: 10,marginRight: 5, color: Colors.PRIMARY, textDecorationLine:'underline' }}>See All</Text>}
        </View>
    )
}

export default SectionHeading;