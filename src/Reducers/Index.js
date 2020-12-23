import {combineReducers} from 'redux';
import products from './products'; 
import cart from './cart'; 
import messenger from './messenger';
const appReducers = combineReducers({
    products,
    cart,
    messenger

})

export default appReducers;