import { useContext } from 'react'
import { useLocation } from 'wouter'

// Local imports
import { productsContext } from '../context'

export const Checkout = () => {
  const setLocation = useLocation()[1]
  const { total, cart, cartQuantity } = useContext(productsContext)

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
                    {cart.map(({ id, title, price, quantity, images, category }) => (
                      <li key={id} className='flex items-center justify-between py-4'>
                        <div className='flex items-start'>
                          <img
                            alt='Trainer'
                            src={images[0]}
                            className='h-16 w-16 flex-shrink-0 rounded-lg object-cover'
                          />

                          <div className='ml-4'>
                            <p className='text-sm'>{title}</p>

                            <dl className='mt-1 space-y-1 text-xs text-gray-500'>
                              <div>
                                <dt className='inline'>Category: </dt>
                                <dd className='inline'>{category.name}</dd>
                              </div>

                              <div>
                                <dt className='inline'>Price: </dt>
                                <dd className='inline'>${price} USD</dd>
                              </div>
                            </dl>
                          </div>
                        </div>

                        <div>
                          <p className='text-sm'>
                            ${price}
                            <small className='text-gray-500'> x{quantity}</small>
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white py-12 md:py-24'>
            <div className='mx-auto max-w-lg px-4 lg:px-8'>
              <form className='grid grid-cols-6 gap-4'>
                <div className='col-span-3'>
                  <label className='mb-1 block text-sm text-gray-600' htmlFor='first_name'>
                    First Name
                  </label>

                  <input
                    className='w-full rounded-lg border border-blue-200 p-2.5 text-sm shadow-sm outline-none focus:border-blue-500'
                    type='text'
                    id='first_name'
                  />
                </div>

                <div className='col-span-3'>
                  <label className='mb-1 block text-sm text-gray-600' htmlFor='last_name'>
                    Last Name
                  </label>

                  <input
                    className='w-full rounded-lg border border-blue-200 p-2.5 text-sm shadow-sm outline-none focus:border-blue-500'
                    type='text'
                    id='last_name'
                  />
                </div>

                <div className='col-span-6'>
                  <label className='mb-1 block text-sm text-gray-600' htmlFor='email'>
                    Email
                  </label>

                  <input
                    className='w-full rounded-lg border border-blue-200 p-2.5 text-sm shadow-sm outline-none focus:border-blue-500'
                    type='email'
                    id='email'
                  />
                </div>

                <div className='col-span-6'>
                  <label className='mb-1 block text-sm text-gray-600' htmlFor='phone'>
                    Phone
                  </label>

                  <input
                    className='outlin-500 w-full rounded-lg border border-blue-200 p-2.5 text-sm shadow-sm focus:border-blue-500'
                    type='tel'
                    id='phone'
                  />
                </div>

                <fieldset className='col-span-6'>
                  <legend className='mb-1 block text-sm text-gray-600'>Card Details</legend>

                  <div className='-space-y-px rounded-lg bg-white shadow-sm'>
                    <div>
                      <label className='sr-only' htmlFor='card-number'>
                        Card Number
                      </label>

                      <input
                        className='placeholder-gray-blue-500 relative w-full rounded-t-lg border border-blue-200 p-2.5 text-sm focus:z-10 focus:border-blue-500'
                        type='text'
                        name='card-number'
                        id='card-number'
                        placeholder='Card number'
                      />
                    </div>

                    <div className='flex -space-x-px'>
                      <div className='flex-1'>
                        <label className='sr-only' htmlFor='card-expiration-date'>
                          Expiration Date
                        </label>

                        <input
                          className='outlin-500 placeholder-gray-4 focus:border-blue-50000 relative w-full rounded-bl-lg border border-blue-200 p-2.5 text-sm focus:z-10'
                          type='text'
                          name='card-expiration-date'
                          id='card-expiration-date'
                          placeholder='MM / YY'
                        />
                      </div>

                      <div className='flex-1'>
                        <label className='sr-only' htmlFor='card-cvc'>
                          CVC
                        </label>

                        <input
                          className='placeholder-gray-blue-500 focus:border-blue-500focus:z-10 relative w-full rounded-br-lg border border-blue-200 p-2.5  text-sm'
                          type='text'
                          name='card-cvc'
                          id='card-cvc'
                          placeholder='CVC'
                        />
                      </div>
                    </div>
                  </div>
                </fieldset>

                <fieldset className='col-span-6'>
                  <legend className='mb-1 block text-sm text-gray-600'>Billing Address</legend>

                  <div className='-space-y-px rounded-lg bg-white shadow-sm'>
                    <div>
                      <label className='sr-only' htmlFor='country'>
                        Country
                      </label>

                      <select
                        className='outlin:z-10 relative w-full rounded-t-lg border border-blue-200 p-2.5 text-sm outline-none focus:border-blue-500'
                        id='country'
                        name='country'
                        autoComplete='country-name'
                      >
                        <option>England</option>
                        <option>Wales</option>
                        <option>Scotland</option>
                        <option>France</option>
                        <option>Belgium</option>
                        <option>Japan</option>
                      </select>
                    </div>

                    <div>
                      <label className='sr-only' htmlFor='postal-code'>
                        ZIP/Post Code
                      </label>

                      <input
                        className='placeholder-gray-blue-500 relative w-full rounded-b-lg border border-blue-200 p-2.5 text-sm focus:z-10 focus:border-blue-500'
                        type='text'
                        name='postal-code'
                        id='postal-code'
                        autoComplete='postal-code'
                        placeholder='ZIP/Post Code'
                      />
                    </div>
                  </div>
                </fieldset>

                <div className='col-span-6'>
                  <button
                    className='block w-full rounded-lg bg-black p-2.5 text-sm text-white'
                    type='submit'
                  >
                    Pay Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkout
