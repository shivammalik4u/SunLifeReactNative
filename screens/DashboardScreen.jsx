import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Svg, Circle, G, Text as SvgText } from 'react-native-svg';
import Colors from '../utils/Colors';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
// import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';



import { BarChart } from "react-native-gifted-charts";
import { ScrollView } from 'react-native-gesture-handler';

const DashboardScreen = () => {

    const ww = useWindowDimensions().width;

    const burnedCalories = 1600;
    const maxCalories = 2000;
    const percentage = (burnedCalories / maxCalories) * 100;



    const [selectedOption, setSelectedOption] = useState('day');

    // Sample data for daily scores and weekly scores
    const barData = [
        { value: 250, label: 'M', frontColor: Colors.PRIMARY },
        { value: 1100, label: 'T', frontColor: Colors.PRIMARY },
        { value: 999, label: 'W', frontColor: Colors.PRIMARY },
        { value: 726, label: 'T', frontColor: Colors.PRIMARY },
        { value: 1600, label: 'F', frontColor: Colors.PRIMARY },
        { value: 2000, label: 'S', frontColor: Colors.PRIMARY },
        { value: 1300, label: 'S', frontColor: Colors.PRIMARY },
    ];

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <View style={styles.container}>
            {/* Daily/Weekly selector */}
            <View style={styles.selectorContainer}>
                <TouchableOpacity
                    style={[styles.selectorButton, selectedOption === 'day' && styles.selected]}
                    onPress={() => handleOptionChange('day')}
                >
                    <Text style={styles.selectorButtonText}>Today</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.selectorButton, selectedOption === 'week' && styles.selected]}
                    onPress={() => handleOptionChange('week')}
                >
                    <Text style={styles.selectorButtonText}>This Week</Text>
                </TouchableOpacity>
            </View>

            {/* Daily scores in clock-type format */}
            {selectedOption === 'day' && (
                // <AnimatedCircularProgress
                //     size={200}
                //     width={7}
                //     fill= {3000}
                //     tintColor="#00e0ff"
                //     backgroundColor="#3d5875">
                //     {
                //         (fill) => (
                //             <Text>
                //                 3000
                //             </Text>
                //         )
                //     }
                // </AnimatedCircularProgress>



                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', gap: 2, }}>

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10, width:'100%' }}>

                        <View style={{ borderRadius: 99, borderColor: Colors.PRIMARY, borderWidth: 2, padding: 20, width: 105, height: 105 }}>
                            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', gap: 2, }}>
                                {/* <Ionicons name="heart" size={24} color={Colors.PRIMARY_LIGHT} /> */}
                                <Icon name="heart" size={20} color={Colors.PRIMARY} />

                                <Text style={{ fontWeight: 'normal',  color: Colors.PRIMARY, fontSize: 13, textAlign:'center'  }}>
                                    Heart Rate
                                </Text>
                                <Text style={{ fontWeight: 'bold', color: Colors.PRIMARY, fontSize: 15 }}>
                                    72
                                </Text>
                            </View>
                        </View>
                        <View style={{ borderRadius: 99, borderColor: Colors.PRIMARY, borderWidth: 2, padding: 20, width: 105, height: 105 }}>
                            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', gap: 2, }}>
                                {/* <Ionicons name="footsteps" size={24} color={Colors.PRIMARY_LIGHT} /> */}
                                <Icon name="street-view" size={20} color={Colors.PRIMARY} />
                                <Text style={{ fontWeight: 'normal',  color: Colors.PRIMARY, fontSize: 13, textAlign:'center'  }}>
                                    Footsteps
                                </Text>
                                <Text style={{ fontWeight: 'bold', color: Colors.PRIMARY, fontSize: 15 }}>
                                    5758
                                </Text>
                            </View>
                        </View>


                    </View>

                    <AnimatedCircularProgress
                        size={223}
                        width={12}
                        fill={75}
                        tintColor={Colors.PRIMARY}
                        backgroundColor='#d3d3d3'
                        padding={10}
                        initialRotation={270}
                        rotation={180}
                        // style={styles.circularProgress}
                        renderCap={({ center }) => <Circle cx={center.x} cy={center.y} r="12" fill={Colors.PRIMARY} stroke={Colors.BLACK} strokeWidth="3" />}
                    >
                        {
                            (fill) => (
                                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    {/* <Text style={{ fontWeight: 'bold',  color: Colors.PRIMARY, fontSize: 13, textAlign:'center'  }}>
                                    {burnedCalories} Calaries Burned
                                </Text> */}
                                    <Text style={{ fontWeight: 'bold',  color: Colors.PRIMARY, fontSize: 13, textAlign:'center'  }}>
                                        {/* {burnedCalories} Calaries Burned */}
                                        Overall Health Score
                                    </Text>
                                    {/* <Text>
                                        ----------
                                    </Text> */}
                                    <Text style={{ fontWeight: 'bold', color: Colors.PRIMARY, fontSize: 50 }}>
                                        {/* {burnedCalories} Calaries Burned */}
                                        75%
                                    </Text>

                                    {/* <Text>
                                </Text> */}
                                    {/* <Text>
                                    ----------
                                </Text> */}
                                    {/* <Text style={{ fontWeight: 'bold',  color: Colors.PRIMARY, fontSize: 13, textAlign:'center'  }}>
                                    {maxCalories} Calaries
                                </Text> */}
                                </View>
                            )
                        }
                    </AnimatedCircularProgress>


                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10, width:'100%' }}>

                       
                        <View style={{ borderRadius: 99, borderColor: Colors.PRIMARY, borderWidth: 2, padding: 20, width: 105, height: 105 }}>
                            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', gap: 2, }}>
                                {/* <Ionicons name="bonfire" size={24} color={Colors.PRIMARY_LIGHT} /> */}
                                <Icon name="certificate" size={20} color={Colors.PRIMARY} />
                                <Text style={{ fontWeight: 'normal',  color: Colors.PRIMARY, fontSize: 13, textAlign:'center' , textAlign:'center' }}>
                                    Calories
                                </Text>
                                <Text style={{ fontWeight: 'bold', color: Colors.PRIMARY, fontSize: 15 }}>
                                    1282
                                </Text>
                            </View>
                        </View>
                        <View style={{ borderRadius: 99, borderColor: Colors.PRIMARY, borderWidth: 2, padding: 20, width: 105, height: 105 }}>
                            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', gap: 2, }}>
                                {/* <Ionicons name="git-network" size={24} color={Colors.PRIMARY_LIGHT} /> */}
                                <Icon name="tachometer" size={20} color={Colors.PRIMARY} />
                                <Text style={{ fontWeight: 'normal',  color: Colors.PRIMARY, fontSize: 13, textAlign:'center'  }}>
                                    BP
                                </Text>
                                <Text style={{ fontWeight: 'bold', color: Colors.PRIMARY, fontSize: 15 }}>
                                    90/120
                                </Text>
                            </View>
                        </View>

                    </View>


                </View>

            )}

            {/* Weekly bar graph */}
            {selectedOption === 'week' && (
                <View>
                    {/* style={{borderColor:Colors.PRIMARY, borderWidth:2}} */}
                    <BarChart
                        barWidth={40}
                        noOfSections={3}
                        barBorderRadius={4}
                        frontColor="lightgray"
                        data={barData}
                        yAxisThickness={0}
                        xAxisThickness={0}
                        maxValue={2000}
                        barStyle={{ borderColo: Colors.PRIMARY }}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    selectorContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    selectorButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginRight: 10,
        backgroundColor: Colors.PRIMARY_LIGHT,
    },
    selected: {
        backgroundColor: Colors.PRIMARY,
    },
    selectorButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    graphContainer: {
        width: '80%',
        aspectRatio: 2,
        flexDirection: 'row',
        marginBottom: 20,
    },
    // circularProgress: {
    //     borderWidth: 2,
    //     borderRadius: 200, // Assuming the container is a circle
    //     borderColor: Colors.BORDER_COLOR, // Set your border color
    // },
});

export default DashboardScreen;
