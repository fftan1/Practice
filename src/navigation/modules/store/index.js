import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';

let store = createStore(reducers);
const App = () => {
  <Provider store = {store}>
    
  </Provider>
}