import { createStore } from 'redux';
import cartReducer from './cart/cart.reducers';
import rootReducer from './rootReducer'

const store = createStore(rootReducer);

export default store;