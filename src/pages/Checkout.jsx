import { useContext, useEffect } from 'react'
import { useLocation } from 'wouter'

// Local imports
import { Form } from '../components/checkout/Form'
import { Product } from '../components/checkout/Product'
import { productsContext } from '../context'

export const Checkout = () => {
  const setLocation = useLocation()[1]
  const { total, cart, cartQuantity, scrollToTop } = useContext(productsContext)

  useEffect(() => {
    scrollToTop()
  }, [])

  if (cartQuantity === 0) setLocation('/home', { replace: true })

  return (
    <section>
      <h1 className='sr-only'>Checkout</h1>

      <div className='relative mx-auto max-w-screen-2xl'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='bg-gray-50 py-12 md:py-24'>
            <div className='mx-auto max-w-lg px-4 lg:px-8'>
              <div className='flex items-center'>
                <span className='h-10 w-10 rounded-full bg-blue-900' />

                <h2 className='ml-4 font-medium'>CheckOut</h2>
              </div>

              <div className='mt-8'>
                <p className='text-2xl font-medium tracking-tight'>${total} USD</p>
                <p className='mt-1 text-sm text-gray-500'>For the purchase of</p>
              </div>

              <div className='mt-12'>
                <div className='flow-root'>
                  <ul className='-my-4 divide-y divide-gray-200'>
                    {cart.map((product) => (
                      <Product key={product.id} {...product} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white py-12 md:py-24'>
            <div className='mx-auto max-w-lg px-4 lg:px-8'>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkout
