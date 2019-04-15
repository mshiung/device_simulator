import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

const splashscreen = require("./assets/unifai-tm-logo_white_small.png");

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  logo: { 
    width: 200,
    height: 100,
  },
});

export default class SplashPage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.logo}
          source={splashscreen}/>
      </View>
    );
  }
}
