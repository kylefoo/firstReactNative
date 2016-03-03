/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Dimensions,
  Image,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const FirstApp = React.createClass({
  getInitialState() {
    return {
      allowFire: false,
      fired: false
    }
  },

  fire() {
    if (!this.state.allowFire) return

    this.setState({ fired: true, allowFire: false })
  },

  renderFireControl() {
    if (this.state.fired) return null

    const buttonStyle = this.state.allowFire ? [styles.fireButton, styles.fireButtonActive] : [styles.fireButton]

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Launch Control
        </Text>

        <Switch
          onValueChange={(value) => this.setState({ allowFire: value })}
          value={this.state.allowFire} />

        <View style={styles.fireControl}>
          <TouchableOpacity style={buttonStyle} onPress={this.fire}>
            <Text style={styles.whiteText}>Fire!</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  },

  renderMissile() {
    if (!this.state.fired) return null

    var {height, width} = Dimensions.get('window')

    return (
      <Image
        style={{ height, width }}
        source={require('./resources/images/spacex-launch.jpg')}
      />
    )
  },

  render() {
    return (
      <View style={styles.container}>
        { this.renderFireControl() }
        { this.renderMissile() }
      </View>
    );
  }
})

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
    margin: 20,
  },
  instructions: {
    marginTop: 10,
    textAlign: 'center',
  },
  targetImage: {
    width: 150,
    height: 300,
    marginTop: 25,
  },
  whiteText: {
    color: '#eee',
  },
  fireControl: {
    margin: 25,
  },
  fireButton: {
    padding: 25,
    backgroundColor: 'grey',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 15,
  },
  fireButtonActive: {
    backgroundColor: '#c02f1d',
    borderColor: '#8E1A0B',
  }
});

AppRegistry.registerComponent('FirstApp', () => FirstApp);
