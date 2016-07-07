/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */'use strict';
import React, {
  AppRegistry,
  Component,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Switch,
  TouchableHighlight
} from 'react-native';

const FirstApp = React.createClass({
  getInitialState() {
    return {
      SwitchRegressionIsOn: false,
      pressing: false,
   };
  },
  _onPressIn: function() {
    if (!this.state.SwitchRegressionIsOn) return
    this.setState({pressing: true});
  },
  _onPressOut: function() {
    this.setState({pressing: false});
  },
  renderConsole(){
    if (this.state.pressing) return null
    return (
      <View>
        <Switch
            onValueChange={(value) => this.setState({SwitchRegressionIsOn: value})}
            style={{marginBottom: 10}}
            value={this.state.SwitchRegressionIsOn} />
        <Text style={styles.textBlack}>{this.state.SwitchRegressionIsOn ? 'Unlocked' : 'Locked'}</Text>
        <TouchableHighlight style={styles.touchable} onPressIn={this._onPressIn} onPressOut={this._onPressOut}>
          <View style={styles.button}>
            <Text style={styles.welcome}>{this.state.pressing ? 'EEK!' : 'PUSH ME'}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  },
  fireMissile() {
    if (!this.state.pressing) return null
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
        <StatusBar
           backgroundColor="blue"
           barStyle="light-content"
        />
        { this.renderConsole() }
        { this.fireMissile() }
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
  textWhite: {
    color: '#000',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: '#FF0000',
    justifyContent: 'center',
  },
  touchable: {
    borderRadius: 100,
  },
  targetImage: {
    width: 250,
    height: 250,
    borderRadius: 120,
    marginTop: 25,
  },
});

AppRegistry.registerComponent('FirstApp', () => FirstApp);
