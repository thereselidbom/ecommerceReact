const actiontypes = () => {
  return {
    productCatalog: {
      set: 'SET_PRODUCT_CATALOG',
      loading: 'LOADING',
      setProducts: 'SET_PRODUCTS',
      setProduct: 'SET_PRODUCT'
    },
    cart: {
      add: 'ADD_TO_CART',
      remove: 'REMOVE_FROM_CART',
      delete: 'DELETE_PRODUCT'
    },
    auth: {
      login: 'LOGIN',
      logout: 'LOGOUT'
    },
    user: {
      register: 'REGISTER_USER',
      login: 'LOGIN_USER',
      logout: 'LOGOUT_USER',
      check: 'CHECK_USER',
      set: 'SET_USER',
    },
  }
}

export default actiontypes;