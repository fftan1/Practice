import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import PropTypes from 'prop-types';
// Components


// Stylesheets
import styles from './styles';

// Variables


export default class Screen3 extends React.Component {
  onSubmitLogout = () => {
    const { navigation } = this.props;
    Alert.alert('Answer question', 'Are you sure?',
      [
        { text: 'hoi qq' },
        { text: 'cancel' },
        { text: 'OK', onPress: () => navigation.navigate('LOGIN_SC') },
      ]);
  }

  render = () => {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnLogout} onPress={this.onSubmitLogout}>
          <Text style={styles.txtLogout}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Screen3.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};
