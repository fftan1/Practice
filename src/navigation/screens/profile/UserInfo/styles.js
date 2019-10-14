import { StyleSheet } from 'react-native';

const common = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnLogout: {
    backgroundColor: 'green',
    width: '70%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },

  txtLogout: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },

  // viewField: {

  // },

  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    fontSize: 17,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginVertical: 10,
    height: 50,
    width: 200,
    backgroundColor: '#f1f3f5',
  },
});

export default {
  ...common,
};
