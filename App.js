import React, { Component } from "react";
import { Image } from "react-native";

const splashscreen = require("./assets/unifai-tm-logo_white_small.png");

export default class SplashPage extends Component {
  render() {
    // eslint-disable-line class-methods-use-this
    return (
      <Image source={{uri: 'asset:/app_icon.png'}} style={{width: 40, height: 40}} />
      <Image
        source={splashscreen}
        style={{ flex: 1, height: null, width: null }}
      />
    );
  }
}
