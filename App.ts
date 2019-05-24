import { createStackNavigator, createAppContainer } from "react-navigation";
import {
  HOME_SCREEN,
  LOCATION1_SCREEN,
  LOCATION2_SCREEN,
  LOCATION3_SCREEN
} from "./src/screens";

import HomeScreen from './src/HomeScreen';
import Location1Screen from './src/Location1Screen';
import Location2Screen from './src/Location2Screen';
import Location3Screen from './src/Location3Screen';

import withErrorBoundary from "./src/withErrorBoundary";

const App = createStackNavigator(
  {
    [HOME_SCREEN]: HomeScreen,
    [LOCATION1_SCREEN]: Location1Screen,
    [LOCATION2_SCREEN]: Location2Screen,
    [LOCATION3_SCREEN]: Location3Screen,
  },
  {
    initialRouteName: HOME_SCREEN  }
);

export default withErrorBoundary(createAppContainer(App));
