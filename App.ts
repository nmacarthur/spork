import { createStackNavigator, createAppContainer } from "react-navigation";

import {
  HOME_SCREEN,
  LOCATION1_SCREEN,
  LOCATION2_SCREEN,
  LOCATION3_SCREEN,
  LOCATION4_SCREEN,
  LOCATION5_SCREEN,
  LOCATION6_SCREEN,
  CAMERA_SCREEN
} from "./src/screens";

import HomeScreen from './src/HomeScreen';
import Location1Screen from './src/Location1Screen';
import Location2Screen from './src/Location2Screen';
import Location3Screen from './src/Location3Screen';
import Location4Screen from './src/Location4Screen';
import Location5Screen from './src/Location5Screen';
import Location6Screen from './src/Location6Screen';

import withErrorBoundary from "./src/withErrorBoundary";
import CameraComponent from './src/CameraComponent';

const AppNavigator = createStackNavigator(
  {
    [HOME_SCREEN]: HomeScreen,
    [LOCATION1_SCREEN]: Location1Screen,
    [LOCATION2_SCREEN]: Location2Screen,
    [LOCATION3_SCREEN]: Location3Screen,
    [LOCATION4_SCREEN]: Location4Screen,
    [LOCATION5_SCREEN]: Location5Screen,
    [LOCATION6_SCREEN]: Location6Screen,
    [CAMERA_SCREEN]: CameraComponent
  },
  {
    initialRouteName: HOME_SCREEN  }
);

const AppContainer = createAppContainer(AppNavigator);


export default withErrorBoundary(AppContainer);
