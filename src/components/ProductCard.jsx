export const ProductCard = ({ description, price, title, images }) => {
  return (
    <div className='max-w-xs overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800'>
      <div className='px-4 py-2'>
        <h1 className='text-3xl font-bold uppercase text-gray-800 dark:text-white'>{title}</h1>
        <p className='mt-1 text-sm text-gray-600 dark:text-gray-400'>{description}</p>
      </div>

      <img className='mt-2 h-48 w-full object-cover' src={images[0]} alt={title} />

      <div className='flex items-center justify-between bg-gray-900 px-4 py-2'>
        <h1 className='text-lg font-bold text-white'>${price}</h1>
        <button className='transform rounded bg-white px-2 py-1 text-xs font-semibold uppercase text-gray-900 transition-colors duration-300 hover:bg-gray-200 focus:bg-gray-400 focus:outline-none'>
          Add to cart
        </button>
      </div>
    </div>
  )
}
