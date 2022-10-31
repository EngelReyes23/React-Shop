import { useContext, useEffect } from 'react'
import { useRoute } from 'wouter'
import { ProductDetailSkeleton } from '../components/skeletons/ProductDetailSkeleton'
import { productsContext } from '../context'
import { useProducts } from '../hooks/useProducts'

export const ProductDetails = () => {
  const { id } = useRoute('/products/:id')[1]
  const { isLoading, products } = useProducts(id)
  const { addToCart, scrollToTop } = useContext(productsContext)

  const handleAddToCart = () => {
    addToCart({ ...products, quantity: 1 })
  }

  useEffect(() => {
    scrollToTop()
  }, [])

  if (isLoading) return <ProductDetailSkeleton />

  const { title, description, price, images, category } = products

  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-lg px-4 md:px-8'>
        <div className='grid gap-8 md:grid-cols-2'>
          {/* <!-- images - start --> */}
          <div className='space-y-4'>
            <div className='grid grid-cols-2 gap-4'>
              {images.map((src, index) => (
                <div className='overflow-hidden rounded-lg bg-gray-100' key={index}>
                  <img
                    src={src}
                    alt={src}
                    loading='lazy'
                    className='h-full w-full object-cover object-center'
                  />
                </div>
              ))}
            </div>
          </div>
          {/* <!-- images - end --> */}

          {/* <!-- content - start --> */}
          <div className='md:py-8'>
            {/* <!-- name - start --> */}
            <div className='mb-2 md:mb-3'>
              <h2 className='text-2xl font-bold text-gray-800 lg:text-3xl'>{title}</h2>
            </div>
            {/* <!-- name - end --> */}

            {/* <!-- category - start --> */}
            <div className='mb-2 '>
              <span className='inline-block text-sm font-semibold text-gray-500 md:text-base'>
                Category: {category.name}
              </span>
            </div>
            {/* <!-- category - end --> */}

            {/* <!-- description - start --> */}
            <div className='mb-5'>
              <div className='mb-1 text-lg font-semibold text-gray-800'>Description</div>

              <p className='text-gray-500'>{description}</p>
            </div>
            {/* <!-- description - end --> */}

            {/* <!-- price - start --> */}
            <div className='mb-4'>
              <div className='flex items-center gap-2'>
                <span className='text-xl font-bold text-gray-800 md:text-2xl'>${price}</span>
                <span className='text-sm text-gray-500'>incl. IVA plus shipping</span>
              </div>
            </div>
            {/* <!-- price - end --> */}

            {/* <!-- buttons - start --> */}
            <div className='flex gap-2.5'>
              <button
                onClick={handleAddToCart}
                className='inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base'
              >
                Add to cart
              </button>
            </div>
            {/* <!-- buttons - end --> */}
          </div>
          {/* <!-- content - end --> */}
        </div>
      </div>
    </div>
  )
}
