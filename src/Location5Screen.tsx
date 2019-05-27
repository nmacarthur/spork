import React from "react";

import {
  NavigationScreenProp,
  NavigationState,
  NavigationAction,
} from "react-navigation";

import { recordScreenCallOnFocus } from "./navigation";

import { LOCATION6_SCREEN } from "./screens";

import { Location } from './Location';


interface ScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationAction>;
}

export default class Location5Screen extends React.Component<ScreenProps> {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    recordScreenCallOnFocus(this.props.navigation, "intro");
  }

  nextScreen = () => {
    this.props.navigation.push(LOCATION6_SCREEN);
  }

  render() {
    return (
      <Location location={5} source={require("../assets/locations/5.jpg")} nextScreen={this.nextScreen}></Location>
    );
  }
}
