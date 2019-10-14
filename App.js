import React, { Component } from 'react';
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMidleWare from 'redux-saga';

import LoginSaga from './src/navigation/modules/saga/LoginSaga';
import mainReducer from './src/navigation/modules/reducers';
import Login from './src/navigation/screens/Login';
import Home from './src/navigation/screens/Home';
import Screen2 from './src/navigation/screens/Screen2';
import Screen3 from './src/navigation/screens/profile/Screen3';
import Screen1 from './src/navigation/screens/Screen1';
import Screen4 from './src/navigation/screens/Screen4';
import NavigationService from './NavigationService';
import UserInfo from './src/navigation/screens/profile/UserInfo';

// ====================================================================================================
//  stackChild < tab < stack < switch
// ====================================================================================================

// be included by tab
const homeStack = createStackNavigator({
  HOME_SC: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },

  SCREEN1: {
    screen: Screen1,

    // navigationOptions: {
    //   header: null,
    // }
  },
});

// be included by tab
const ChildStackScreen3 = createStackNavigator({
  SCREEN3: {
    screen: Screen3,
    navigationOptions: {
      title: 'Profile',
    },
  },

  USER_INFO_SC: {
    screen: UserInfo,
    navigationOptions: {
      title: 'Infomation',
    },
  },
});

// be included by stack
const tab = createBottomTabNavigator({
  HOME_SC: {
    screen: homeStack,
  },

  SCREEN2: {
    screen: Screen2,
  },

  Profile: {
    screen: ChildStackScreen3,
  },
}, {
  tabBarOptions: {
    activeTintColor: 'blue',
    inactiveTintColor: 'black',
    showIcon: false,
    indicatorStyle: {
      backgroundColor: 'blue',
    },
    tabStyle: {
      borderRightColor: '#bbbbbb',
      borderRightWidth: 1,
      justifyContent: 'center',
      // alignItems: 'center',
      borderTopColor: 'blue',
    },
  },
});

// be included by switchNav
const stack = createStackNavigator({
  TAB: {
    screen: tab,
    navigationOptions: {
      header: null,
      // title: 'Training'
    },
  },

  SCREEN4: {
    screen: Screen4,
  },
});

const switchNav = createSwitchNavigator({
  LOGIN_SC: {
    screen: Login,
    navigationOptions: {
      title: 'Login Screen',
    },
  },

  STACK: {
    screen: stack,
  },
});

const sagaMidleWare = createSagaMidleWare();

const Container = createAppContainer(switchNav);

const store = createStore(mainReducer, applyMiddleware(sagaMidleWare));

const App = () => {
  const getRef = (abc) => {
    const { navigatorNamed } = NavigationService;
    NavigationService.setNavigator(navigatorNamed.MyNavigator, abc);
  };

  return (
    <Provider store={store}>
      <Container ref={getRef} />
    </Provider>
  );
};
sagaMidleWare.run(LoginSaga);

export default App;
