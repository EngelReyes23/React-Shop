import { useContext } from 'react'
import { productsContext } from '../../context'

export const Product = ({ id, title, price, quantity, images, category }) => {
  const { handleGoToProduct } = useContext(productsContext)

  return (
    <li key={id} className='flex items-center justify-between py-4'>
      <div className='flex items-start'>
        <img
          alt='Trainer'
          src={images[0]}
          onClick={() => handleGoToProduct(id)}
          className='h-16 w-16 flex-shrink-0 cursor-pointer rounded-lg object-cover hover:opacity-75'
        />

        <div className='ml-4'>
          <p
            className='text-sm underline-offset-2 hover:cursor-pointer hover:underline'
            onClick={() => handleGoToProduct(id)}
          >
            {title}
          </p>

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
  )
}
