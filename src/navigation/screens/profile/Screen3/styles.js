import { StyleSheet, Dimensions } from 'react-native';

const size = Dimensions.get('window');

const common = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 12,
    backgroundColor: '#f1f3f5',
  },

  topButton: {
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    marginBottom: 15,
    paddingHorizontal: '4%',
    flexDirection: 'row',
    alignItems: 'center',
    height: size.height * 20 / 100,
  },

  topViewAvatar: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },

  viewRowInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default {
  ...common,
};
