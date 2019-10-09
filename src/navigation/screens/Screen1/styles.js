import { StyleSheet } from 'react-native';

const common = StyleSheet.create({
  container: { flex: 1 },
  containerStyle: {
    height: 100,
    backgroundColor: 'green',
  }
});

export default {
  ...common,
};
