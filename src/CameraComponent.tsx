import React from 'react';
import { Text, View, TouchableOpacity, CameraRoll } from 'react-native';
import { Camera, Permissions, ImageManipulator } from 'expo';
import { Ionicons } from '@expo/vector-icons';

export default class CameraComponent extends React.Component {

    state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    };

    constructor (props){
        super(props);
        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back,
        }
        this.closeCamera = props.closeCamera;
        this.passPhoto = props.passPhoto;
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }
        async snapPhoto() {
        console.log('Button Pressed');
        if (this.camera) {
            const options = { quality: 1, base64: true, fixOrientation: true,
            exif: true};
            let photo = await this.camera.takePictureAsync(options);
            photo = await ImageManipulator.manipulateAsync(photo.uri, [{
                rotate: 0
            }, {
                resize: {
                    width: photo.width,
                    height: photo.height
                }
            }], {
                compress: 1
            });
            this.closeCamera();
            await CameraRoll.saveToCameraRoll(photo.uri, 'photo');
            this.passPhoto(photo.uri);
            }
        }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
            <View style={{ flex: 1 }}>
                <Camera style={{ flex: 1 }} type={this.state.type} ref={ (ref) => {this.camera = ref} } >
                <View
                    style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                    }}>
                    <TouchableOpacity
                    style={{
                        flex: 0.2,
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                    }}
                    onPress={() => {
                        this.setState({
                        type: this.state.type === Camera.Constants.Type.back
                            ? Camera.Constants.Type.front
                            : Camera.Constants.Type.back,
                        });
                    }}>
                    <Ionicons name={"ios-reverse-camera"} size={40} color={"white"} style={{margin: 16}} />
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={{
                        flex: 0.1,
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'flex-end'
                    }}
                    onPress={this.snapPhoto.bind(this)}>
                    <View style={{ width: 60, height: 60, borderColor: '#fff', borderWidth: 5, borderRadius: 200, marginBottom: 10, color: 'white' }}>
                    </View>
                    </TouchableOpacity>
                </View>
                </Camera>
            </View>
            );
        }
    }
}