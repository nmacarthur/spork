import React from "react";
import theme from "./theme";
import {
  Header,
  ParentComponent,
  Illustration,
  Container,
  ThoughtDook,
  ActionButton,
} from "./ui";

import { Row, IconButton, Label, Paragraph } from "./ui";

import Swiper from "react-native-swiper";
import universalHaptic from "./haptic";
import { View, Text, Dimensions, ScrollView, StatusBar } from "react-native";
import CBTView from "./CBTView";
import { Thought } from "./thoughts";
import i18n from "./i18n";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationAction,
} from "react-navigation";
import { Haptic, Constants } from "expo";
import { recordScreenCallOnFocus } from "./navigation";
import * as stats from "./stats";

const thought: Thought = {
  automaticThought: i18n.t("onboarding_screen.auto_thought_ex"),
  challenge: i18n.t("onboarding_screen.challenge_ex"),
  alternativeThought: i18n.t("onboarding_screen.alt_thought_ex"),
  cognitiveDistortions: [
    {
      label: i18n.t("onboarding_screen.cog_distortion.label"),
      slug: i18n.t("onboarding_screen.cog_distortion.slug"),
      selected: true,
    },
  ],
};

// Really simple hack to get fontsizes mostly working
const bigFont = (): number => {
  const height = Dimensions.get("screen").height;
  // size of iPhone SE
  if (height <= 568) {
    // argle bargle why are there so many screen sizes and no good
    // scaling support 😭
    return 32;
  }
  return 48;
};

const BigParagraph = ({ children, style }: ParentComponent) => (
  <Text
    style={{
      fontSize: 18,
      margin: 0,
      padding: 12,
      marginRight: 25,
      borderRadius: 8,
      color: theme.darkText,
      ...style,
    }}
  >
    {children}
  </Text>
);

const Exaggerated = ({ children, style }: ParentComponent) => {
  return (
    <Text
      style={{
        color: theme.pink,
        fontWeight: "900",
        marginBottom: 0,
        margin: 0,
        fontSize: bigFont(),
        ...style,
      }}
      allowFontScaling={false}
    >
      {children}
    </Text>
  );
};

const LeftPushedHeader = ({ children, style }: ParentComponent) => (
  <Text
    style={{
      // Small bump to make things appear more left-aligned
      paddingRight: 48,
      fontWeight: "900",
      marginBottom: 0,
      fontSize: bigFont(),
      flexWrap: "wrap",
      color: theme.darkText,
      ...style,
    }}
    allowFontScaling={false}
  >
    {children}
  </Text>
);

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
      source={require("../assets/locations/sw.jpeg")}
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
      {i18n.t("location1.p1")}
    </Paragraph>
    <Paragraph style={{
      padding: 0,
      marginTop: 16,
      marginBottom: 16,
      lineHeight: 24

    }}>
      {i18n.t("location1.p2")}
    </Paragraph>
    <Paragraph style={{
      padding: 0,
      marginTop: 16,
      marginBottom: 16,
      lineHeight: 24

    }}>
      {i18n.t("location1.p3")}
    </Paragraph>
    <Paragraph style={{
      padding: 0,
      marginTop: 16,
      marginBottom: 16,
      lineHeight: 24

    }}>
      {i18n.t("location1.p4")}
    </Paragraph>
   
    <ActionButton
      title={i18n.t("location1.button")}
      disabled={false}
      fillColor={theme.blue}
      width={150}
      onPress={() => console.log('oi')}
      />
  </Main>
)



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
              <Header style={{marginBottom: 0, paddingBottom: 0}} allowFontScaling={false}>{i18n.t("location1.title")}</Header>
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
