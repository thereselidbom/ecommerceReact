import actiontypes from '../actiontypes';

const initState = {
  shoppingCart: [],
  totalCartQuantity: 0,
  totalCartAmount: 0
}

const cartReducer = (state = initState, action) => {
  let itemIndex;

  switch(action.type) {
    case actiontypes().cart.add:
      try {
        itemIndex = state.shoppingCart.findIndex(product => product._id === action.payload._id)
        let _product = {
          ...action.payload,
          quantity: 1
        }
        console.log(itemIndex);
        itemIndex < 0
        ? state.shoppingCart = [...state.shoppingCart, _product]
        : state.shoppingCart[itemIndex].quantity += 1

        state.totalCartAmount = getTotalAmount(state.shoppingCart);
        state.totalCartQuantity = getTotalQuantity(state.shoppingCart);

      }
      catch(err) {console.log(err)}
      return state


    case actiontypes().cart.remove:
      try{
        itemIndex = state.shoppingCart.findIndex(product => product._id === action.payload)

        state.shoppingCart[itemIndex].quantity === 1
        ? state.shoppingCart = state.shoppingCart.filter(product => product._id !== action.payload)
        : state.shoppingCart[itemIndex].quantity -= 1

        state.totalCartAmount = getTotalAmount(state.shoppingCart);
        state.totalCartQuantity = getTotalQuantity(state.shoppingCart);
      }
      catch(err) {console.log(err)}
      return state


    case actiontypes().cart.delete:
      state.shoppingCart = state.shoppingCart.filter(product => product._id !== action.payload)
      state.totalCartAmount = getTotalAmount(state.shoppingCart);
      state.totalCartQuantity = getTotalQuantity(state.shoppingCart);
      return state;

    default:
      return state
  }
}

const getTotalQuantity = cart => {
  let total = 0;

  cart.forEach(product => {
    total += product.quantity
  })
  return total;
}

const getTotalAmount = cart => {
  let total = 0;

  cart.forEach(product => {
    total += product.price * product.quantity
  })

  return total;
}

export default cartReducer;