import React from "react";

import {
  NavigationScreenProp,
  NavigationState,
  NavigationAction,
} from "react-navigation";

import { recordScreenCallOnFocus } from "./navigation";

import { LOCATION2_SCREEN } from "./screens";

import { Location } from './Location';


interface ScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationAction>;
}

export default class Location1Screen extends React.Component<ScreenProps> {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    recordScreenCallOnFocus(this.props.navigation, "intro");
  }

  nextScreen = () => {
    this.props.navigation.push(LOCATION2_SCREEN);
  }

  render() {
    return (
      <Location location={1} source={require("../assets/locations/1.jpg")} nextScreen={this.nextScreen}></Location>
    );
  }
}
