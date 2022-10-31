import { useContext } from 'react'
import Swal from 'sweetalert2'
import { Link } from 'wouter'

// Local imports
import { Product } from '../components/shopping-cart/Product'
import { productsContext } from '../context'

export const ShoppingCart = () => {
  const {
    iva,
    cart,
    total,
    subTotal,
    clearCart,
    cartQuantity,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity
  } = useContext(productsContext)

  const handleClearCart = () => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      text: "You won't be able to revert this!"
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart()
        Swal.fire('Deleted!', 'Your cart has been erased.', 'success')
      }
    })
  }

  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-lg px-4 md:px-8'>
        <div className='mb-6 sm:mb-10 lg:mb-16'>
          <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>
            Your Cart
          </h2>
        </div>

        {/* clearCart */}
        {cartQuantity > 0 && (
          <div className='mb-6 flex flex-col sm:mb-10 sm:flex-row sm:items-center sm:justify-between lg:mb-16'>
            <div className='flex items-center'>
              <span className='text-sm font-semibold text-gray-800'>{cartQuantity} Items</span>
            </div>
            <button
              onClick={handleClearCart}
              className='flex items-center justify-center rounded-md bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
            >
              Clear Cart
            </button>
          </div>
        )}

        <div className='mb-6 flex flex-col gap-4 sm:mb-8 md:gap-6'>
          {
            // eslint-disable-next-line multiline-ternary
            cartQuantity > 0 ? (
              cart.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  removeFromCart={removeFromCart}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                />
              ))
            ) : (
              <div className='flex flex-col items-center justify-center gap-4'>
                <h3 className='text-xl font-bold text-gray-800'>Your cart is empty</h3>
                <p className='text-center text-gray-600'>
                  You have no items in your shopping cart. Continue shopping to add items to your
                  cart.
                </p>
              </div>
            )
          }
        </div>

        {/* <!-- totals - start --> */}
        <div className='flex flex-col items-end gap-4'>
          <div className='w-full rounded-lg bg-gray-100 p-4 sm:max-w-xs'>
            <div className='space-y-1'>
              <div className='flex justify-between gap-4 text-gray-500'>
                <span>Subtotal</span>
                <span>${subTotal} USD</span>
              </div>

              <div className='flex justify-between gap-4 text-gray-500'>
                <span>IVA</span>
                <span>${iva.toFixed(2)} USD</span>
              </div>
            </div>

            <div className='mt-4 border-t pt-4'>
              <div className='flex items-start justify-between gap-4 text-gray-800'>
                <span className='text-lg font-bold'>Total</span>

                <span className='flex flex-col items-end'>
                  <span className='text-lg font-bold'>${total} USD</span>
                </span>
              </div>
            </div>
          </div>

          {cartQuantity > 0 && (
            <Link
              to='/checkout'
              className='inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base'
            >
              Check out
            </Link>
          )}
        </div>
        {/* <!-- totals - end --> */}
      </div>
    </div>
  )
}

export default ShoppingCart
