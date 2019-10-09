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
  },

  txtLogout: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  }
});

export default {
  ...common,
};
