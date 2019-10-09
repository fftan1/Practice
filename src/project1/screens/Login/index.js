import React from 'react';
import { View, Text, Image, TextInput, Keyboard, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// Components
import { connect } from 'react-redux';

// Stylesheets
import styles from './styles';
import { AUTH_LOGIN } from '../../modules/actions/types';

// Variables


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
    this.refPassword = React.createRef();
  }

  render = () => {
    const { username, password } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == 'ios' ? 'padding' : null}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.viewLoginLogin}>
            <Image source={require('../../../../resources/logoLogin.png')} style={styles.imageLogo} />
          </View>
          <View style={styles.containerForm}>
            <View style={styles.form}>
              <Icon
                name="account"
                style={styles.iconForm}
              />
              <TextInput
                onChangeText={(text) => this.setState({ username: text })}
                value={username}
                placeholder="Enter username"
                placeholderTextColor="rgba(255,255,255,0.2)"
                autoCapitalize='none'
                autoCorrect={false}
                onSubmitEditing={event => { Keyboard.dismiss(); this.refPassword.current.focus(); }}
                style={styles.textInput}
              />
            </View>
            <View style={styles.form}>
              <Icon
                name="key-variant"
                style={styles.iconForm}
              />
              <TextInput
                onChangeText={(text) => this.setState({ password: text })}
                value={password}
                placeholder="Enter username"
                placeholderTextColor="rgba(255,255,255,0.2)"
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}
                style={styles.textInput}
              />
            </View>
            <TouchableOpacity style={styles.btnLogin}>
              <Text style={style.txtLogin}>Login</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedInUser: state.authReducer.LoginReducer.loggedInUser
})

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => {
    dispatch({type: AUTH_LOGIN, username, password})
  } 
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);