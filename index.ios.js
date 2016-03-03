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
      },
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      }
    }
  },

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      const longitude = position.coords.longitude
      const latitude = position.coords.latitude
      this.setState({ position, region: { longitude, latitude } })
    }, (error) => {
      alert(error.message)
    }, {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 1000
    })

    this.watchID = navigator.geolocation.watchPosition((position) => {
      this.setState({ position })
    })
  },

  componentWillUnmount: function() {
    navigator.geolocation.clearWatch(this.watchID);
  },

  distanceFromHome() {
    const homePosition = {
      latitude: 40.0274,
      longitude: -105.2519
    } // Boulder, CO

    const currentPosition = this.state.position.coords

    return distance(homePosition.latitude, homePosition.longitude, currentPosition.latitude, currentPosition.longitude)
  },

  render() {
    const { height, width } = Dimensions.get('window')

    return (
      <View>
        <MapView
          style={{ height, width }}
          region={this.state.region}
          showsUserLocation={true}
          />
        <View style={[styles.overlay, { width }]}>
          <Text style={styles.overlayText}>
            {this.distanceFromHome()} miles from home.
          </Text>
        </View>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    position: 'absolute',
    bottom: 25,
    padding: 10,
  },
  overlayText: {
    fontSize: 20,
    color: '#eee',
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('FirstApp', () => FirstApp);
