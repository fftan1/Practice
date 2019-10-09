import React from 'react';
import { View, Text, Dimensions, StyleSheet, Platform, TextInput, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modalbox';
// Components
import DataFlatlist from './DataFlatlist';
// Variables

const screen = Dimensions.get('window');

export default class home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newTaskName: '',
      newDescription: ''
    }
  }

  thisModal = React.createRef();

  showModalAdd = () => {
    this.thisModal.current.open();
  }

  addNewTask = () => {
    if (this.state.newTaskName.length === 0 || this.state.newDescription.length === 0) {
      alert('You must enter text to input')
      return;
    }
    const newTask = {
      title: this.state.newTaskName,
      description: this.state.newDescription
    }
    DataFlatlist.push(newTask);
    this.thisModal.current.close();
  }

  render = () => {
    return (
      <Modal style={styles.container} position='center' backdrop={true} ref={this.thisModal}>
        <Text style={styles.textTitle}>Add new task</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter title"
          placeholderTextColor="#bbbbbb"
          autoCorrect={false}
          onChangeText={(text) => this.setState({ newTaskName: text })}
          value={this.state.newTaskName}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter title"
          placeholderTextColor="#bbbbbb"
          autoCorrect={false}
          onChangeText={(text) => this.setState({ newDescription: text })}
          value={this.state.newDescription}
        />
        <TouchableOpacity style={styles.button} onPress={() => {this.addNewTask()}}>
          <Text style={styles.textButton}>Save</Text>
        </TouchableOpacity>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderRadius: Platform.OS === 'ios' ? 30 : 0,
    shadowRadius: 10,
    width: screen.width - 80,
    height: 280
  },

  textTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },

  textInput: {
    height: 40,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 10
  },

  button: {
    backgroundColor: 'green',
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },

  textButton: {
    fontWeight: 'bold',
    color: '#fff'
  }
})