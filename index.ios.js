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
  MapView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

function distance(lat1, lon1, lat2, lon2) {
	var radlat1 = Math.PI * lat1/180
	var radlat2 = Math.PI * lat2/180
	var theta = lon1-lon2
	var radtheta = Math.PI * theta/180
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist)
	dist = dist * 180/Math.PI
	dist = dist * 60 * 1.1515
	return dist.toFixed(2)
}

const FirstApp = React.createClass({
  getInitialState() {
    return {
      position: {
        coords: {
          latitude: 0,
          longitude: 0
        }
      }
    }
  },

  componentWillUnmount: function() {
    navigator.geolocation.clearWatch(this.watchID);
  },

  distanceFromHome() {
    // These are the coords for Boulder, CO.
    // Replace with your own hometown coords!
    const homePosition = {
      latitude: 40.0274,
      longitude: -105.2519
    }

    const currentPosition = this.state.position.coords

    return distance(homePosition.latitude, homePosition.longitude, currentPosition.latitude, currentPosition.longitude)
  },

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Geolocation is cool.
        </Text>
        <Text style={styles.instructions}>
          Make an app that shows this device's location{'\n'}
          on a map, and displays in realtime its{'\n'}
          distance from your home city.
        </Text>
        <Text style={styles.instructions}>
          Feel free to use the provided `distanceFromHome`{'\n'}
          method, but note that it expects `this.state.position`{'\n'}
          to be a position object from the Geolocation API.
        </Text>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
  },
});

AppRegistry.registerComponent('FirstApp', () => FirstApp);
