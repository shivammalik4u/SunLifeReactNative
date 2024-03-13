// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Colors from './utils/Colors';
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import Header from './components/Header';
import TabsNavigation from './Navigations/TabsNavigation';
import HomeNavigation from './Navigations/HomeNavigation';
import HomeScreen from './screens/HomeScreen';
import DrawerNavigation from './Navigations/DrawerNavigation';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';



export default function App() {
  return (
    // <GestureHandlerRootView>
      <SafeAreaView style={styles.container}>

        <NavigationContainer>
          <DrawerNavigation/>
          {/* <HomeNavigation /> */}
          {/* <TabsNavigation/> */}
        </NavigationContainer>
      </SafeAreaView>
    // </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SECONDARY,
  },
});
