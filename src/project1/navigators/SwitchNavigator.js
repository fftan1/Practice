import { createSwitchNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import Login from '../screens/Login';
import TestScreen from "../screens/TestScreen";

// const switchNav = createSwitchNavigator({
//   Login: {
//     screen: Login,
//   },

//   TestScreen: {
//     screen: TestScreen,
//   }
// });

const stackNav = createStackNavigator({
  Login: {
    screen: Login,
  },

  TestScreen: {
    screen: TestScreen,
  }
});

const containerNav = createAppContainer(stackNav);

export default containerNav;