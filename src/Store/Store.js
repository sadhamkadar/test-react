import {createStore} from 'redux';
import CakeReducer from '../Reducer/CakeReducer';

export const Store = createStore(CakeReducer);

export default Store