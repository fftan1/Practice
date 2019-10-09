import { StyleSheet, Dimensions } from 'react-native';

const size = Dimensions.get('screen');

const common = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: 'rgb(37,80,70)',
   },

   viewLoginLogin: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },

   imageLogo: {
    width: size - size * 20/100,
   },

   containerForm: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
   },

   form: {
     flexDirection: 'row',
     justifyContent: 'center',
     width: '70%',
     paddingVertical: 10,
     paddingHorizontal: 20,
     borderBottomColor: 'rgba(255,255,255,0.2)',
     borderBottomWidth: 1,
   },

   iconForm: {
     marginRight: 15,
     fontSize: 16,
   },

   textInput: {
     fontSize: 16,
     color: '#fff',
   },

   btnLogin: {
     backgroundColor: 'rgba(239, 255, 10, 0.7)',
     width: '50%',
     justifyContent: 'center',
     alignSelf: 'center',
   },

   txtLogin: {
     fontSize: 18,
     color: 'rgb(37,80,70)',
     textAlign: 'center',
   }
});

export default {
  ...common,
};
