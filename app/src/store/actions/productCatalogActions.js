
import axios from 'axios';
import actiontypes from '../actiontypes';

export const getProductCatalog = () => {
  return async dispatch => {
    dispatch(loading(true));

    const res = await axios.get('http://localhost:8081/api/products')
   
    setTimeout(() => {
    dispatch(setProducts(res.data))
    dispatch(loading(false));
   }, 1000)
  }
}
export const loading = (payload) => {
  return {
    type: actiontypes().productCatalog.loading,
    payload
  }
}

export const setProducts = products => {
  return {
    type: actiontypes().productCatalog.set,
    payload: products
  }
}
export const getOneProduct = id => {
  return async dispatch => {
    dispatch(loading(true));

    
    const res = await axios.get(`http://localhost:8081/api/products/${id}`)
    setTimeout(() => {
      dispatch(setProduct(res.data));
      dispatch(loading(false));
    }, 100)
  }
}
export const setProduct = product => {
  return {
    type: actiontypes().productCatalog.setProduct,
    payload: product
  }
}