import Swal from 'sweetalert2'

export const Product = ({
  product,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  handleGoToProduct
}) => {
  const { id, title, price, images, quantity, category } = product

  const showAlert = () => {
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
        removeFromCart(product)
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
      }
    })
  }

  // suma o resta la cantidad de productos
  const handleCant = (e) => {
    if (e.target.name === 'add') increaseQuantity(product)
    else if (quantity > 1) decreaseQuantity(product)
  }

  return (
    <div className='flex flex-wrap gap-x-4 overflow-hidden rounded-lg border sm:gap-y-4 lg:gap-6'>
      <button
        onClick={() => handleGoToProduct(id)}
        className='group relative block w-32 overflow-hidden bg-gray-100 sm:h-56 sm:w-40'
      >
        <img
          src={images.at(0)}
          loading='lazy'
          alt={title}
          className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
        />
      </button>

      <div className='flex flex-1 flex-col justify-evenly py-4'>
        <div>
          <button
            onClick={() => handleGoToProduct(id)}
            className='inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl'
          >
            {title}
          </button>
        </div>

        <div className='font-bold'>
          Category:{' '}
          <span className='mb-1 font-semibold text-gray-800 md:text-lg'>{category.name}</span>
        </div>

        <div className='font-bold'>
          Price: <span className='mb-1 font-semibold text-gray-800 md:text-lg'>${price}</span>
        </div>
      </div>

      <div className='flex w-full justify-between border-t p-4 sm:w-auto sm:border-none sm:pl-0 lg:p-6 lg:pl-0'>
        <div className='flex flex-col items-start gap-2'>
          <div className='flex h-12 w-20 overflow-hidden rounded border'>
            <input
              type='number'
              readOnly
              value={quantity}
              className='w-full appearance-none py-2 pl-4 outline-none ring-inset ring-indigo-300 transition duration-100 focus:ring'
            />

            <div className='flex flex-col divide-y border-l'>
              <button
                name='add'
                onClick={handleCant}
                className='flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200'
              >
                +
              </button>
              <button
                name='remove'
                onClick={handleCant}
                className='flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200'
              >
                -
              </button>
            </div>
          </div>

          <button
            onClick={showAlert}
            className='select-none text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700'
          >
            Delete
          </button>
        </div>

        <div className='ml-4 pt-3 md:ml-8 md:pt-2 lg:ml-16'>
          <span className='block font-bold text-gray-800 md:text-lg'>${price * quantity}</span>
        </div>
      </div>
    </div>
  )
}
