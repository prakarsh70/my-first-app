import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';
class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Login screen</Text>
        <Button
          title="Home page"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // paddingTop: Constants.statusBarHeight,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
