/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

class FirstApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Next challenge!
        </Text>
        <Text style={styles.instructions}>
          Try to build a replica of the screen{'\n'}
          shown in the challenge directions.
        </Text>
        <Text style={styles.instructions}>
          (The one below.)
        </Text>
        <Image
          style={styles.targetImage}
          source={require('./resources/images/challenge-3-target.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    marginTop: 10,
    textAlign: 'center',
  },
  targetImage: {
    width: 150,
    height: 300,
    marginTop: 25,
  }
});

AppRegistry.registerComponent('FirstApp', () => FirstApp);
