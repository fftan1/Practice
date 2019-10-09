import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const propTypes = {
  no: PropTypes.number,
  title: PropTypes.string,
  leftIcon: PropTypes.bool,
  description: PropTypes.string,
  topic: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  LeftIconComponent: PropTypes.element,
  titleNumberOfLines: PropTypes.number,
  DescriptionComponents: PropTypes.element,
  topicStyle: PropTypes.instanceOf(Object),
  avatar: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
};

const defaultProps = {
  no: 1,
  title: '',
  leftIcon: false,
  description: null,
  LeftIconComponent: null,
  titleNumberOfLines: 0,
  DescriptionComponents: <View />,
  topicStyle: {},
  avatar: '',
};

const Card = (props) => {
  const {
    no,
    title,
    leftIcon,
    description,
    topic,
    onPress,
    LeftIconComponent,
    titleNumberOfLines,
    DescriptionComponents,
    topicStyle,
    avatar } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
      <ImageBackground source={avatar}>

      </ImageBackground>
    </TouchableOpacity>
  );
}


