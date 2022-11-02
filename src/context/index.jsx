import { createContext } from 'react'
import { useLocation } from 'wouter'

// Local imports
import { useActions, useProducts } from '../hooks/'

export const productsContext = createContext()

const scrollToTop = () => {
  window.scrollTo({
    top: 0
  })
}

export const ProductsProvider = ({ children }) => {
  const setLocation = useLocation()[1]
  const { products, isLoading, error } = useProducts()
  const { state, addToCart, clearCart, decreaseQuantity, increaseQuantity, removeFromCart } =
    useActions()

  // #region handles
  const handleGoToProduct = (id) => {
    setLocation(`/products/${id}`)
  }

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 })
  }
  // #endregion handles

  // #region values to be provided
  // cantidad de productos en el carrito
  const cartQuantity = state.cart.reduce((acc, product) => acc + product?.quantity, 0)

  // obtiene el subTotal de los productos en el carrito
  const subTotal = state.cart.reduce((acc, product) => acc + product.quantity * product.price, 0)

  const iva = subTotal * 0.15

  const total = subTotal + iva
  // #endregion values to be provided

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
        scrollToTop,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,

        // handles
        handleAddToCart,
        handleGoToProduct
      }}
    >
      {children}
    </productsContext.Provider>
  )
}
