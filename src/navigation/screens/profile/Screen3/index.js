import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Components


// Stylesheets
import styles from './styles';

// Variables


class Screen3 extends React.Component {
  static propTypes = {
    loginUser: PropTypes.instanceOf(Object).isRequired,
  }

  constructor(props) {
    super(props);
    this.AVATAR = 'https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/24774750_881098732065511_92687087390663317_n.jpg?_nc_cat=109&_nc_oc=AQkNwEftvU1e5jD4ioFhzEem9mX0LKRnOCpou-fOsV7tNylgMY7nuzLWPGSG7ocwLLg&_nc_ht=scontent.fdad2-1.fna&oh=8a06b1de21786d9f2276be3358f3d405&oe=5E28D508';

  }

  componentDidMount() {
    const { loginUser } = this.props;
    console.log("TCL: Screen3 -> componentDidMount -> state", loginUser);
  }

  render = () => {
    const { loginUser } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('USER_INFO_SC')} style={styles.topButton}>
          <View style={styles.topViewAvatar}>
            <Image source={{ uri: this.AVATAR }} style={styles.topViewAvatar} />
          </View>
          <View style={styles.topViewInfo}>
            <View style={styles.viewRowInfo}>
              <View>
                <Icon name="account" />
              </View>
              <View>
                <Text>{loginUser.Fullname}</Text>
              </View>
            </View>
            {/* hr hr hr */}
            <View style={styles.viewRowInfo}>
              <View>
                <Icon name="email" />
              </View>
              <View>
                <Text>abc</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    loginUser: state.loginReducer.loginUser,
  });
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Screen3);
