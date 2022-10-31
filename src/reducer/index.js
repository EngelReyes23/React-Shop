import { TYPES } from '../types'

export const productsReducer = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload].reduce((acc, item) => {
          const index = acc.findIndex((i) => i.id === item.id)
          if (index === -1) {
            return [...acc, item]
          }
          return acc
        }, [])
      }

    case TYPES.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id)
      }

    case TYPES.INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          }
          return item
        })
      }

    case TYPES.DECREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity - 1
            }
          }
          return item
        })
      }

    case TYPES.CLEAR_CART:
      return {
        ...state,
        cart: []
      }
    default:
      return state
  }
}
