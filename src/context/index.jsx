import { createContext, useReducer } from 'react'
import { useLocation } from 'wouter'

// Local imports
import { useProducts } from '../hooks/useProducts'
import { productsReducer } from '../reducer'
import { TYPES } from '../types'

export const productsContext = createContext()

const initialState = {
  cart: []
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0
  })
}

export const ProductsProvider = ({ children }) => {
  const { products, isLoading, error } = useProducts()
  const setLocation = useLocation()[1]

  const [state, dispatch] = useReducer(productsReducer, initialState)

  const handleGoToProduct = (id) => {
    setLocation(`/products/${id}`)
  }

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

  // cantidad de productos en el carrito
  const cartQuantity = state.cart.reduce((acc, product) => acc + product?.quantity, 0)

  // obtiene el subTotal de los productos en el carrito
  const subTotal = state.cart.reduce((acc, product) => acc + product.quantity * product.price, 0)

  const iva = subTotal * 0.15

  const total = subTotal + iva

  return (
    <productsContext.Provider
      value={{
        // state
        iva,
        error,
        total,
        subTotal,
        ...state,
        products,
        isLoading,
        cartQuantity,

        // actions
        clearCart,
        addToCart,
        scrollToTop,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        handleGoToProduct
      }}
    >
      {children}
    </productsContext.Provider>
  )
}
