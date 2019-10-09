import { StyleSheet } from 'react-native';

const common = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(30,70,80)',
  },

  containerForm: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textLogo: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
  },

  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    marginVertical: 10,
    height: 50,
    width: '70%',
    paddingHorizontal: 15,
    fontSize: 17,
    color: '#fff',
  },

  btnLogin: {
    backgroundColor: 'green',
    justifyContent: 'center',
    width: '50%',
    height: 50,
    marginTop: 20,
  },

  txtLogin: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default {
  ...common,
};
