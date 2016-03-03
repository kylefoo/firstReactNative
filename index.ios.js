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
          Try this:
        </Text>
        <Image
          style={styles.image}
          source={{uri: 'https://s3.amazonaws.com/vigesharing-is-vigecaring/lkurtz/rn-workshop-mind-blown.gif'}}
        />
        <View style={styles.textContainer}>
          <Text style={styles.nestedText}>
            I'm on the <Text style={styles.blueText}>left</Text>.
          </Text>
          <Text style={styles.nestedText}>
            I'm on the <Text style={styles.orangeText}>right</Text>.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ddd',
  },
  textContainer: {
    flexDirection: 'row',
  },
  nestedText: {
    color: '#ddd',
    padding: 25,
  },
  image: {
    height: 200,
    margin: 25,
    width: 200,
    borderWidth: 5,
    borderColor: '#222',
    borderRadius: 100,
  },
  blueText: {
    color: '#2095b7',
  },
  orangeText: {
    color: '#ef6c2e',
  }
});

AppRegistry.registerComponent('FirstApp', () => FirstApp);
