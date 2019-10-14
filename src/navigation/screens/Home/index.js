import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, Image, Modal, TextInput, Alert } from 'react-native';
import PropTypes from 'prop-types';
// Components


// Stylesheets
import styles from './styles';

// Variables

const DATA = [
  { title: 'vịt', description: '1 con' },
  { title: 'gà', description: 'chục con' },
  { title: 'heo', description: '4 con' },
  { title: 'chó', description: '1 con' },
  { title: 'mèo', description: '1 con' },
  { title: 'bò', description: '2 chục con' },
];

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.IMAGE = require('../../../../resources/avatar.jpg');
    this.state = {
      refreshFlatlist: false,
      modalVisible: false,
      title: '',
      description: '',
      avatar: '',
    };
  }

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.containerItem} onPress={() => this.updateItem(index)}>
        <View style={styles.containerImageItem}>
          <Image source={this.IMAGE} style={styles.imageItem} />
        </View>
        <View style={styles.containerTextItem}>
          <Text style={styles.titleItem}>{item.title}</Text>
          <Text style={styles.desItem}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  updateItem = (numIndex) => {
    // const { title } = this.state;
    // DATA.findIndex(x => x.title === title)
    const { navigation } = this.props;
    if (numIndex === 0) {
      navigation.navigate('SCREEN1');
    }
    if (numIndex === 1) {
      navigation.navigate('SCREEN4');
    }
  }

  addItem = (modalVisible) => {
    this.setState({ modalVisible });
  }

  onPressBack = () => {
    this.setState({ modalVisible: false });
  }

  onClickSave = (modalVisible) => {
    const stateModal = { modalVisible };
    const { title, description, avatar, refreshFlatlist } = this.state;
    if (title.length === 0) {
      Alert.alert('vui long nhap title');
    }
    if (description.length === 0) {
      Alert.alert('vui long nhap description');
    }
    DATA.push({ title, description, avatar });
    stateModal.refreshFlatlist = !refreshFlatlist;
    this.setState(stateModal);
  }

  render = () => {
    const { modalVisible, title, description, refreshFlatlist } = this.state;
    return (
      <ScrollView style={styles.container}>
        <View>
          <TouchableOpacity style={styles.btnAdd} onPress={() => this.addItem(true)}>
            <Text style={styles.txtAdd}>Add</Text>
          </TouchableOpacity>
          <FlatList
            data={DATA.sort((a, b) => a.title > b.title)}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            extraData={refreshFlatlist}
          />
        </View>
        <Modal visible={modalVisible}>
          <TouchableOpacity style={styles.btnBack} onPress={this.onPressBack}>
            <Text style={styles.txtBack}>Back</Text>
          </TouchableOpacity>
          <View style={styles.containerModal}>
            <TextInput
              onChangeText={(text) => this.setState({ title: text })}
              value={title}
              style={styles.input}
            />
            <TextInput
              onChangeText={(text) => this.setState({ description: text })}
              value={description}
              style={styles.input}
            />
            <TouchableOpacity style={styles.btnSave} onPress={() => this.onClickSave(false)}>
              <Text style={styles.txtSave}>Save</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </ScrollView>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};
