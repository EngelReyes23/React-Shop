import { NavBar } from './components/NavBar'

function App () {
  // const { error, isLoading, products } = useProducts()

  return (
    <>
      <NavBar />

      <div className='container mx-auto px-6 py-16'>
        <div className='items-center lg:flex'>
          <div className='w-full lg:w-1/2'>
            <div className='lg:max-w-lg'>
              <h1 className='text-2xl font-semibold uppercase text-gray-800 dark:text-white lg:text-3xl'>
                Best Place To Choose Your Clothes
              </h1>

              <p className='mt-2 text-gray-600 dark:text-gray-400'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum
                ab amet sunt recusandae? Reiciendis natus perspiciatis optio.
              </p>

              <button className='mt-6 w-full transform rounded-md bg-blue-600 px-6 py-2.5 text-sm uppercase tracking-wider text-white transition-colors duration-300 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none lg:w-auto'>
                Shop Now
              </button>
            </div>
          </div>

          <div className='mt-6 flex w-full items-center justify-center lg:mt-0 lg:w-1/2'>
            <img
              className='h-full w-full lg:max-w-2xl'
              src='https://merakiui.com/images/components/Catalogue-pana.svg'
              alt='Catalogue-pana.svg'
            />
          </div>
        </div>
      </div>

      {/*
      {error && (
        <div className='container mx-auto px-6 py-8'>
          <h3 className='text-2xl font-medium text-gray-700'>Error</h3>
          <span className='mt-3 text-sm text-red-500'>{error}</span>
        </div>
      )}

      {!isLoading && !error ? (
        <ProductList productList={products} />
      ) : (
        <div className='flex h-screen items-center justify-center'>
          <h1 className='text-2xl font-bold text-gray-800 dark:text-white'>Loading...</h1>
        </div>
      )} */}
    </>
  )
}

export default App
