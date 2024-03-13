import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors'
// import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';



const Header = ({ title }) => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.Header}>
      <Text style={{ color: Colors.TEXT, fontSize: 20 }}>{title}</Text>
      <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
        {/* <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="mic" size={20} color={Colors.TEXT} />
          <Icon name="microphone" size={20} color={Colors.PRIMARY} />
        </TouchableOpacity> */}



        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('notification')}>
          {/* <Ionicons name="notifications-outline" size={20} color={Colors.TEXT} /> */}
          <Icon name="bell" size={20} color={Colors.PRIMARY} />

          <View style={styles.badge}>
            <Text style={styles.badgeText}>5</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={openDrawer}>
          {/* <Ionicons name="notifications-outline" size={20} color={Colors.TEXT} /> */}
          <Icon name="navicon" size={20} color={Colors.PRIMARY} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: Colors.SECONDARY,
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20
  },
  iconContainer: {
    position: 'relative',
    marginRight: 3,
  },
  badge: {
    backgroundColor: Colors.TEXT,
    borderRadius: 99,
    paddingHorizontal: 5,
    paddingVertical: 3,
    position: 'absolute',
    top: -8,
    right: -4
  },
  badgeText: {
    color: 'white',
    fontSize: 7,
  },
})

export default Header