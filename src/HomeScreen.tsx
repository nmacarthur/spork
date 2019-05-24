import React from "react";
import theme from "./theme";
import {
  Header,
  ParentComponent,
  Container,
  ActionButton,
} from "./ui";

import PropTypes from "prop-types";


import { Row, Paragraph } from "./ui";

import { View, ScrollView, StatusBar, TouchableOpacity, ImageBackground, ImageSourcePropType } from "react-native";
import i18n from "./i18n";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationAction,
} from "react-navigation";
import { Constants } from "expo";
import { recordScreenCallOnFocus } from "./navigation";

import { LOCATION1_SCREEN, LOCATION2_SCREEN, LOCATION3_SCREEN } from "./screens";

const Main = ({ children, style }: ParentComponent) => (
  <Container
    style={{
      paddingTop: 16,
      paddingLeft: 8,
      paddingRight: 8,
      paddingBottom: 16,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      ...style,
    }}
  >
    {children}
  </Container>
);

const LocationBox = ({children, style, source, onPress, navigateTo}: {children: any, style?: any, source: ImageSourcePropType, onPress: PropTypes.func.isRequired, navigateTo: any}) => (
  <View style={{borderRadius: 4, height: 96,
    ...style}}>
    <TouchableOpacity style={{
      width: '100%',
      height: '100%'
      }} onPress={() => {onPress(navigateTo)}}>
      <ImageBackground source={source} style={{width: '100%', height: '100%', borderRadius: 10, overflow: 'hidden'}}>
        {children}
      </ImageBackground>
    </TouchableOpacity>
  </View>
)


interface ScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationAction>;
}
 
export default class HomeScreen extends React.Component<ScreenProps> {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    recordScreenCallOnFocus(this.props.navigation, "intro");
  }

  NavigateTo = (location) => {
    this.props.navigation.push(location);
  }

  render() {
    return (
      <View style={{ backgroundColor: theme.lightOffwhite }}>
        <ScrollView
          style={{
            backgroundColor: theme.lightOffwhite,
            marginTop: Constants.statusBarHeight,
            paddingTop: 24,
            height: "100%",
          }}
        >
          <Container>
            <StatusBar barStyle="dark-content" />
            <Row style={{marginBottom: 24}}>
              <Header style={{marginBottom: 0, paddingBottom: 0}} allowFontScaling={false}>Tour</Header>
            </Row>
            <Row style={{paddingBottom: 8}}>
            <LocationBox style={{width: '100%'}} source={require('../assets/locations/1.jpeg')} onPress={this.NavigateTo} navigateTo={LOCATION1_SCREEN}>
              <Paragraph style={{color: '#fff', fontSize: 30, fontWeight: 'bold', padding: 12 }}>{i18n.t("locations.1.title")}</Paragraph>
            </LocationBox>
            </Row>
            <Row style={{paddingBottom: 8, paddingTop: 8}}>
            <LocationBox style={{width: '100%'}} source={require('../assets/locations/2.jpg')} onPress={this.NavigateTo} navigateTo={LOCATION2_SCREEN} >
              <Paragraph style={{color: '#fff', fontSize: 30, fontWeight: 'bold', padding: 12 }}>{i18n.t("locations.2.title")}</Paragraph>
            </LocationBox>
            </Row>
            <Row style={{paddingBottom: 8, paddingTop: 8}}>
            <LocationBox style={{width: '100%'}} source={require('../assets/locations/1.jpeg')} onPress={this.NavigateTo} navigateTo={LOCATION3_SCREEN}>
              <Paragraph style={{color: '#fff', fontSize: 30, fontWeight: 'bold', padding: 12 }}>{i18n.t("locations.3.title")}</Paragraph>
            </LocationBox>
            </Row>
            <Row style={{paddingBottom: 8, paddingTop: 8}}>
            <LocationBox style={{width: '100%'}} source={require('../assets/locations/2.jpg')} onPress={this.NavigateTo} navigateTo={LOCATION1_SCREEN}>
              <Paragraph style={{color: '#fff', fontSize: 30, fontWeight: 'bold', padding: 12 }}>{i18n.t("locations.4.title")}</Paragraph>
            </LocationBox>
            </Row>
          </Container>
        </ScrollView>
      </View>
    );
  }
}
