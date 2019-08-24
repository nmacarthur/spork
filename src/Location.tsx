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

import { View, ScrollView, StatusBar, ImageSourcePropType, Linking, Platform } from "react-native";

import i18n from "./i18n";

import { Constants } from "expo";

import CameraComponent from './CameraComponent';

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

const ImageView = ({ closeCamera, passPhoto }: any) => {
    return (<View style={{width: '100%', height: '100%'}}>
        <CameraComponent closeCamera={closeCamera} passPhoto={passPhoto}></CameraComponent>
    </View>
    )};

export class Location extends React.Component<LocationComponent> {

    constructor(props) {
        super(props);
        this.state = {
            cameraOpen: false,
            photo: ''
        }
        this.location = props.location;
        this.source = props.source;
        this.nextScreen = props.nextScreen;
        this.closeCamera.bind(this);
        this.passPhoto.bind(this);

    }

    openCamera = () => {
        this.setState({cameraOpen: true});
    }

    closeCamera = () => {
        this.setState({cameraOpen: false});
    }

    passPhoto = (photo) => {
        console.log(photo)
        this.setState({photo: photo});
    }

render() {
    let image;

    if (this.state.photo) {
        image =
        (<Container>
        <Row>
        <View style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
            width: '100%',
            marginTop: 32
            }}>
           <Illustration
                source={{uri: this.state.photo}}
                style={{
                    height: 280,
                    width: '100%',
                    alignSelf: "center",
                    borderRadius: 8
                }}
                />
            </View>
        </Row>
    </Container>);
      } else {
        image = (<View />);
      }

    if ( this.state.cameraOpen ) {
        return(
            <ImageView closeCamera={() => {this.closeCamera()}} passPhoto={(photo) => {this.passPhoto(photo)}}/>
        )
    } else {
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
            <Header style={{marginBottom: 0, paddingBottom: 0}} allowFontScaling={false}>{i18n.t(`locations.${this.location}.title`)}</Header>
        </Row>
        </Container>
        <Row>
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
            width: '100%'
            }}>
            <Illustration
                source={this.source}
                style={{
                    height: 280,
                    width: '100%',
                    alignSelf: "center"
                }}
                />
                </View>
            </Row>
    
        <Container style={{paddingBottom: 64}}>
        <Row style={{ paddingTop: 36}}>
            <ActionButton
                title="Take Photo"
                disabled={false}
                fillColor={theme.blue}
                width={150}
                onPress={this.openCamera}
            />
             <ActionButton
                title="Get Directions"
                disabled={false}
                fillColor={theme.red}
                width={150}
                onPress={() => {
                    const loc = i18n.t(`locations.${this.location}.title`);
                    const city = 'Prague';
                    const daddr = encodeURIComponent(`${loc}, ${city}`);
                    if (Platform.OS === 'ios') {
                        Linking.openURL(`http://maps.apple.com/?daddr=${daddr}`);
                      } else {
                        Linking.openURL(`http://maps.google.com/?daddr=${daddr}`);
                      }
                }}
            />
        </Row>
        <Row>
    
        {image}
        </Row>
        <Row>
        <Data location={this.location}/>
        </Row>
        <Row style={{paddingBottom: 48}}>
        <ActionButton
            title={i18n.t("locations.1.button")}
            disabled={false}
            fillColor={theme.darkText}
            width={150}
            onPress={this.nextScreen}
            />
        </Row>
        </Container>
    </ScrollView>
    </View>
)}
}
};
