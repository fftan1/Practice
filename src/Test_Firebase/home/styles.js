import { StyleSheet, Platform } from 'react-native';

const common = StyleSheet.create({
  container: {
    flex: 1,
  },

  textTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#fff'
  },

  textItem: {
    color: '#fff'
  },

  viewItem: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1
  },

  viewHeader: {
    backgroundColor:'#cccccc',
    height:60,
    padding:15,
    marginBottom:15,
    marginTop: Platform.OS === 'ios' ? 34 : 10,
    justifyContent:'center'
  },

  button: {
    backgroundColor:'tomato',
    height:45,
    width:100,
    justifyContent:'center',
    alignItems:'center'
  },

  textButton: {
    color:'white',
    fontWeight:'bold'
  }
});

export default {
  ...common,
};
