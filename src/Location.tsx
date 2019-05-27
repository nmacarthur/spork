import React from "react";
import theme from "./theme";
import {
  Header,
  ParentComponent,
  Illustration,
  Container,
  ActionButton,
} from "./ui";

import { Row, Paragraph } from "./ui";

import { View, ScrollView, StatusBar, ImageSourcePropType } from "react-native";

import i18n from "./i18n";

import { Constants } from "expo";

const Data = ({ children, location, style }: any) => {
    const text = i18n.t(`locations.${location}.p`);
    return(
        <Container
            style={{
            paddingTop: 16,
            paddingLeft: 8,
            paddingRight: 8,
            paddingBottom: 8,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            ...style,
            }}
        >
        {text.map((a, index) => {
            return(<Paragraph key={index} style={{ padding: 0, marginTop: 16, marginBottom: 16, lineHeight: 24}}>{a}</Paragraph>)
        })}
        </Container>
)}

export interface LocationComponent {
    style?: object;
    location: any;
    source: ImageSourcePropType;
    nextScreen: any
}

export const Location = ({ style, source, location, nextScreen}: LocationComponent) => {
    return(
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
            <Header style={{marginBottom: 0, paddingBottom: 0}} allowFontScaling={false}>{i18n.t(`locations.${location}.title`)}</Header>
        </Row>
        </Container>
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
            width: '100%'
            }}>
        <Illustration
            source={source}
            style={{
                height: 280,
                width: '100%',
                alignSelf: "center"
            }}
            />
        </View>
        <Container style={{paddingBottom: 64}}>
        <Row>
        <Data location={location}/>
        </Row>
        <Row style={{paddingBottom: 48}}>
        <ActionButton
            title={i18n.t("locations.1.button")}
            disabled={false}
            fillColor={theme.darkText}
            width={150}
            onPress={nextScreen}
            />
        </Row>
        </Container>
    </ScrollView>
    </View>
)};
