import React from "react";
import theme from "./theme";
import {
  Header,
  ParentComponent,
  Illustration,
  Container
} from "./ui";

import { Row, Paragraph } from "./ui";

import { View, ScrollView, StatusBar } from "react-native";
import i18n from "./i18n";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationAction,
} from "react-navigation";
import { Constants } from "expo";
import { recordScreenCallOnFocus } from "./navigation";


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


const Data = ({ children, style }: ParentComponent) => (
  <Main style={{...style}}>
    <Illustration
      source={require("../assets/locations/2.jpg")}
      style={{
        width: '100%',
        height: 180 * 0.75,
        alignSelf: "center",
        marginTop: 32,
        marginBottom: 32,
        borderRadius: 4,
      }}
    />
    <Paragraph style={{
      padding: 0,
      marginTop: 16,
      marginBottom: 16,
      lineHeight: 24
    }}>
      {i18n.t("locations.3.p1")}
    </Paragraph>
    <Paragraph style={{
      padding: 0,
      marginTop: 16,
      marginBottom: 16,
      lineHeight: 24

    }}>
      {i18n.t("locations.3.p2")}
    </Paragraph>
    <Paragraph style={{
      padding: 0,
      marginTop: 16,
      marginBottom: 16,
      lineHeight: 24

    }}>
      {i18n.t("locations.3.p3")}
    </Paragraph>
    <Paragraph style={{
      padding: 0,
      marginTop: 16,
      marginBottom: 16,
      lineHeight: 24

    }}>
      {i18n.t("locations.3.p4")}
    </Paragraph>
    <Paragraph style={{
      padding: 0,
      marginTop: 16,
      marginBottom: 16,
      lineHeight: 24

    }}>
      {i18n.t("locations.3.p5")}
    </Paragraph>
    <Paragraph style={{
      padding: 0,
      marginTop: 16,
      marginBottom: 16,
      lineHeight: 24

    }}>
      {i18n.t("locations.3.p6")}
    </Paragraph>
    <Paragraph style={{
      padding: 0,
      marginTop: 16,
      marginBottom: 16,
      lineHeight: 24

    }}>
      {i18n.t("locations.3.p7")}
    </Paragraph>
  </Main>
)



interface ScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationAction>;
}

export default class Location2Screen extends React.Component<ScreenProps> {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    recordScreenCallOnFocus(this.props.navigation, "intro");
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
            <Row>
              <Header style={{marginBottom: 0, paddingBottom: 0}} allowFontScaling={false}>{i18n.t("locations.3.title")}</Header>
            </Row>
            <Row>
              <Data style={{paddingBottom: 48}}/>
            </Row>

          </Container>
        </ScrollView>
      </View>
    );
  }
}
