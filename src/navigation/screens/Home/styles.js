import { StyleSheet } from 'react-native';

const common = StyleSheet.create({
  container: { flex: 1 },

  containerItem: {
    paddingVertical: 10,
    borderBottomColor: '#bbbbbb',
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  containerImageItem: {
    flex: 1,
  },

  imageItem: {
    borderRadius: 5,
    height: 50,
    width: '100%'
  },

  containerTextItem: {
    flex: 2,
    paddingLeft: 10,
  },

  titleItem: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  desItem: {
    fontSize: 17,
  },

  btnAdd: {
    backgroundColor: 'green',
    height: 50,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  txtAdd: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },

  containerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    backgroundColor: '#bbbbbb',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderColor: '#aaaaaa',
    borderWidth: 1,
    borderRadius: 5,
    color: 'black',
    height: 50,
    width: '70%',
    marginBottom: 20,
  },

  btnSave: {
    backgroundColor: 'green',
    height: 50,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  txtSave: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },

  btnBack: {
    height: 50,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },

  txtBack: {
    color: '#000',
    fontSize: 17,
    fontWeight: '400',
  },
});

export default {
  ...common,
};
