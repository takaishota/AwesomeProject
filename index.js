// @flow

import { AppRegistry } from "react-native";
import setup from "./js/setup";

console.ignoredYellowBox = ['Remote debugger'];
AppRegistry.registerComponent("AwesomeProject", setup);
