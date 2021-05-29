import { combineReducers } from 'redux'

import productCatalogReducer from './productCatalogReducer';
import cartReducer from './cartReducer';
import userReducer from './userReducer'

export default combineReducers({
  productCatalog: productCatalogReducer,
  cartReducer,
  user: userReducer,
})