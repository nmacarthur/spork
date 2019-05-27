import React from "react";

import {
  NavigationScreenProp,
  NavigationState,
  NavigationAction,
} from "react-navigation";

import { recordScreenCallOnFocus } from "./navigation";

import { LOCATION4_SCREEN } from "./screens";

import { Location } from './Location';


interface ScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationAction>;
}

export default class Location3Screen extends React.Component<ScreenProps> {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    recordScreenCallOnFocus(this.props.navigation, "intro");
  }

  nextScreen = () => {
    this.props.navigation.push(LOCATION4_SCREEN);
  }

  render() {
    return (
      <Location location={3} source={require("../assets/locations/3.jpg")} nextScreen={this.nextScreen}></Location>
    );
  }
}
