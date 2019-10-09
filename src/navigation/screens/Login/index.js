import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, SafeAreaView, Platform } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CryptoJS from 'crypto-js';
// Components
import { AUTH_LOGIN } from '../../modules/actions/types';

// Stylesheets
import styles from './styles';

// Variables

// const info = [
//   { username: '123', password: '123' },
//   { username: 'abc', password: 'abc' },
//   { username: 'xyz', password: 'xyz' },
// ]

class Login extends React.Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.refPassword = React.createRef();
    this.state = {
      username: '',
      password: '',
    };
  }

  onSubmitUsername = () => {
    Keyboard.dismiss();
    this.refPassword.current.focus();
  }

  // ==================================== login with data local ============================================================
  // onSubmitLogin = () => {
  //   const { username, password } = this.state;
  //   if (info.findIndex(x => x.username === username) > -1 && info.findIndex(x => x.password === password) > -1) {

  //     this.props.navigation.navigate('tab');
  //   } else {
  //     alert('sai');
  //   }
  // }

  // ==================================== login with data server ============================================================
  onLogin = () => {
    const { login } = this.props;
    const { username, password } = this.state;
    const textUserPost = username.toLowerCase();
    const textPassPost = CryptoJS.MD5(password).toString();
    login(textUserPost, textPassPost);
  }

  render = () => {
    const { username, password } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : ''} style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>

              <View style={styles.containerLogo}>
                <Text style={styles.textLogo}>LOGIN</Text>
              </View>

              <View style={styles.containerForm}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter username"
                  placeholderTextColor="#bbbbbb"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={(text) => this.setState({ username: text })}
                  value={username}
                  onSubmitEditing={() => this.onSubmitUsername()}
                />
                <TextInput
                  style={styles.input}
                  ref={this.refPassword}
                  placeholder="Enter password"
                  placeholderTextColor="#bbbbbb"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  onChangeText={(text) => this.setState({ password: text })}
                  value={password}
                  onSubmitEditing={() => this.onLogin()}
                />
                <TouchableOpacity onPress={() => this.onLogin()} style={styles.btnLogin}>
                  <Text style={styles.txtLogin}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch({ type: AUTH_LOGIN, username, password }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
