// function getRanking(ranking) {
//   return '★'.repeat(ranking).padEnd(5, '☆')
// }

import { useContext } from 'react'
import { productsContext } from '../context'

export const ProductCard = ({ ...product }) => {
  const { price, title, images } = product
  const { addToCart } = useContext(productsContext)

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 })
  }

  return (
    <div className='group flex w-full max-w-xs flex-col items-center justify-center'>
      <div className='h-64 w-full cursor-pointer overflow-hidden rounded-lg bg-gray-300 bg-cover bg-center shadow-md'>
        <img
          className='h-full w-full rounded-lg bg-gray-300 bg-cover bg-center transition duration-200 ease-in-out group-hover:scale-110'
          src={images[0]}
          alt={title}
        />
      </div>

      <div className='z-10 -mt-10 w-56 overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800 md:w-64'>
        <h3 className='py-2 text-center font-bold uppercase tracking-wide text-gray-800 dark:text-white'>
          {title}
        </h3>

        <div className='flex items-center justify-between bg-gray-200 px-3 py-2 dark:bg-gray-700'>
          <span className='font-bold text-gray-800 dark:text-gray-200'>${price} USD</span>
          <button
            onClick={handleAddToCart}
            className='transform rounded bg-gray-800 px-2 py-1 text-xs font-semibold uppercase text-white transition-colors duration-300 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none dark:hover:bg-gray-600 dark:focus:bg-gray-600'
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
