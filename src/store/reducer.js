import {combineReducers} from 'redux';

import productList from './modules/product-list/product-list.reducer';
import phoneList from './modules/phone-list/phone-list.reducer';

const rootReducer = combineReducers({
  productList,
  phoneList,
});

export default rootReducer;
