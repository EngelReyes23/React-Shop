import { Link } from 'wouter'

export const Home = () => {
  return (
    <div className='container mx-auto px-6 py-16'>
      <div className='items-center lg:flex'>
        <div className='w-full lg:w-1/2'>
          <div className='lg:max-w-lg'>
            <h1 className='text-2xl font-semibold uppercase text-gray-800 dark:text-white lg:text-3xl'>
              Best Place To Choose Your Clothes
            </h1>

            <p className='mt-2 mb-6 text-gray-600 dark:text-gray-400'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum
              ab amet sunt recusandae? Reiciendis natus perspiciatis optio.
            </p>

            <Link
              to='/products'
              className='w-full transform rounded-md bg-blue-600 px-6 py-2.5 text-sm uppercase tracking-wider text-white transition-colors duration-300 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none lg:w-auto'
            >
              Shop Now
            </Link>
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
  )
}
