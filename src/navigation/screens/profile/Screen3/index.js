import React from 'react';
import { View, Text, TouchableOpacity, Alert, TextInput } from 'react-native';
import PropTypes, { number } from 'prop-types';
import { reduxForm, Field } from 'redux-form';
// Components


// Stylesheets
import styles from './styles';

// Variables

class Screen3 extends React.Component {
  onSubmitLogout = () => {
    const { navigation } = this.props;
    Alert.alert('Answer question', 'Are you sure?',
      [
        { text: 'hoi qq' },
        { text: 'cancel' },
        { text: 'OK', onPress: () => navigation.navigate('LOGIN_SC') },
      ]);
  }

  required = (value) => (value ? undefined : 'Required hfygh');

  maxLength = (value) => (value && value.length > 15 ? 'Must be 15 characters or less hgbj' : undefined);

  number = (value) => (value && isNaN(number(value)) ? 'Must be a number' : undefined);

  emailType = (value) => (value && !/^[A-Z0_9._%+_]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined);

  renderField = ({ keyboardType, meta: { touched, error, warning }, input: { onChange, ...restInput } }) => {
    return (
      <View>
        <TextInput style={styles.input} keyboardType={keyboardType} onChange={onChange} {...restInput}
          autoCorrect={false}
          placeholder='Enter username'
          placeholderTextColor='#dddddd'
        />
        {
          touched && (
            (error && <Text style={{ color: 'red' }}>{error}</Text>) || (
              warning && <Text style={{ color: 'red' }}>{warning}</Text>)
          )
        }
      </View>
    );
  }

  submit = (values) => {
    alert(`validation success. Values = ~${JSON.stringify(values)}`);
  }


  render = () => {
    const { handleSubmit } = this.props;
    return (
      <View style={styles.container}>
        <Field keyboardType="default" component={this.renderField} name="Username"
          validate={[this.required, this.maxLength]}
        />
        <Field keyboardType="email-address" component={this.renderField} name="Email"
          validate={[this.emailType, this.required]}
        />
        <TouchableOpacity style={styles.btnLogout} onPress={handleSubmit(this.submit)}>
          <Text style={styles.txtLogout}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnLogout} onPress={this.onSubmitLogout}>
          <Text style={styles.txtLogout}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Screen3.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
  handleSubmit: PropTypes.instanceOf(Object).isRequired,
};

const TestForm = reduxForm({
  form: 'test',
})(Screen3);

export default TestForm;
