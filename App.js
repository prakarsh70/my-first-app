import * as React from 'react';
import { Text, View, } from 'react-native';
// import Constants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// You can import from local files
// import AssetExample from './components/AssetExample';

// import LoginScreen from './LoginScreen.js';
// import HomeScreen from './HomeScreen.js';

// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';

// export default function App() {
//   return (
    // <ScrollView>
    //   <View style={styles.container}>
    //     <Text style={styles.paragraph}>Welcome to my app</Text>
    //     <ScrollView horizontal>
    //       <Card style={styles.card}>
            // <AssetExample />
    //       </Card>
        // </ScrollView>
    //   </View>
    // </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 12,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   card: {
//     width : 400,
//   }
// });

// const MainNavigator = createStackNavigator({
//   Login: { screen: LoginScreen },
//   Home: { screen: HomeScreen },
// });
// export default createAppContainer(MainNavigator);

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}


