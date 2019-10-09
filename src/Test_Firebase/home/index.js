import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

// Components
import ModalAdd from './ModalAdd';
import DataFlatlist from './DataFlatlist';
// Stylesheets
import styles from './styles';

// Variables

export default class home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: DataFlatlist,
      loading: false
    }
  }

  modalAdd = React.createRef();

  onPressAdd = () => {
    this.modalAdd.current.showModalAdd();
  }

  renderItem = ({ item, index }) => {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity onPress={() => navigate(item.title)}>
        <View style={styles.viewItem}>
          <Text style={styles.textTitle}>{item.title}</Text>
          <Text style={styles.textItem}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render = () => {
    return (
      <View style={styles.container}>
        <View style={styles.viewHeader}>
          <TouchableOpacity style={styles.button} onPress={() => this.onPressAdd()}>
            <Text style={styles.textButton}>Add</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        <ModalAdd ref={this.modalAdd} />
      </View>
    );
  }
}
