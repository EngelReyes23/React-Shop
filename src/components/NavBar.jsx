import clsx from 'clsx'
import { useContext, useState } from 'react'
import { Link } from 'wouter'
import { productsContext } from '../context'

import { ActiveLink } from './ActiveLink'

const LINKs = [
  {
    name: 'Home',
    href: '/home'
  },
  {
    name: 'Products',
    href: '/products'
  },
  {
    name: 'Contact',
    href: '/contact'
  },
  {
    name: 'About',
    href: '/about'
  }
]

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { cartQuantity } = useContext(productsContext)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='sticky top-0 z-20 bg-white shadow dark:bg-gray-800'>
      <div className='container mx-auto px-6 py-4 md:flex md:items-center md:justify-between'>
        <div className='flex items-center justify-between'>
          <div>
            <a
              className='transform text-2xl font-bold text-gray-800 transition-colors duration-300 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl'
              href='#'
            >
              React Shop
            </a>
          </div>

          {/* <!-- Mobile menu button --> */}
          <div className='flex md:hidden'>
            <button
              onClick={toggle}
              type='button'
              className='text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400'
              aria-label='toggle menu'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className={clsx('h-6 w-6', isOpen ? 'hidden' : 'block')}
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M4 8h16M4 16h16' />
              </svg>

              <svg
                x-show='isOpen'
                xmlns='http://www.w3.org/2000/svg'
                className={clsx('h-6 w-6', !isOpen ? 'hidden' : 'block')}
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>
        </div>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div
          className={clsx(
            'absolute inset-x-0 z-20 w-full bg-white px-6 py-4 transition-all duration-300 ease-in-out dark:bg-gray-800 md:relative md:top-0 md:mt-0 md:flex md:w-auto md:translate-x-0 md:items-center md:bg-transparent md:p-0 md:opacity-100',
            {
              'translate-x-0': isOpen,
              '-translate-x-full opacity-0': !isOpen
            }
          )}
        >
          <div className='flex flex-col md:mx-6 md:flex-row'>
            {LINKs.map((link) => (
              <ActiveLink key={link.name} {...link} />
            ))}
          </div>

          <div className='flex justify-center md:block'>
            <Link
              className='relative transform text-gray-700 transition-colors duration-300 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-300'
              to='/shopping-cart'
            >
              <svg
                className='h-5 w-5'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>

              {cartQuantity > 0 && (
                <span className='absolute -top-2 -left-1 rounded-full bg-blue-500 px-1 text-xs text-white'>
                  {cartQuantity}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
