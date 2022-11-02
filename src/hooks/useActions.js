import { useReducer } from 'react'

// Local imports
import { productsReducer } from '../reducer'
import { TYPES } from '../types'

const initialState = JSON.parse(window.localStorage.getItem('products')) ?? { cart: [] }

export const useActions = () => {
  const [state, dispatch] = useReducer(productsReducer, initialState)
  window.localStorage.setItem('products', JSON.stringify(state))

  const addToCart = (product) => {
    dispatch({
      type: TYPES.ADD_TO_CART,
      payload: product
    })
  }

  const increaseQuantity = (product) => {
    dispatch({
      type: TYPES.INCREASE_QUANTITY,
      payload: product
    })
  }

  const decreaseQuantity = (product) => {
    dispatch({
      type: TYPES.DECREASE_QUANTITY,
      payload: product
    })
  }

  const removeFromCart = (product) => {
    dispatch({
      type: TYPES.REMOVE_FROM_CART,
      payload: product
    })
  }

  const clearCart = () => {
    dispatch({
      type: TYPES.CLEAR_CART
    })
  }

  return {
    state,

    clearCart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
  }
}
