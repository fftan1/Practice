import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import { HeaderBackButton } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Components
import Component1 from '../../components/component1';

// Stylesheets
import styles from './styles';

// Variables


export default class Screen1 extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const options = {
      title: 'Screen 1',
      headerLeft: (
        <HeaderBackButton onPress={() => navigation.navigate('HOME_SC')}>
          <Icon name="keyboard-backspace" color="#000" />
        </HeaderBackButton>
      ),
      headerRight: <Text>Ahihi</Text>,
    };

    const headerRightVisible = navigation.getParam('headerRightVisible', true);

    if (headerRightVisible === false) {
      delete options.headerRight;
    }

    return options;
  }

  onPress = () => {
    const { navigation } = this.props;
    navigation.setParams({ headerRightVisible: false });
  }

  render = () => {
    return (
      <View style={styles.container}>
        <Text onPress={this.onPress}>Screen 1</Text>
      </View>
    );
  }
}

Screen1.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};
