import { useContext, useEffect } from 'react'

// Local imports
import { ProductList } from '../components/ProductList'
import { ProductListSkeleton } from '../components/skeletons/ProductListSkeleton'
import { productsContext } from '../context'

export const Products = () => {
  const { isLoading, products, scrollToTop } = useContext(productsContext)

  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <div className='mb-6 flex items-end justify-between gap-4'>
          <h2 className='text-2xl font-bold text-gray-800 lg:text-3xl'>Products</h2>
        </div>

        {isLoading ? <ProductListSkeleton /> : <ProductList productList={products} />}
      </div>
    </div>
  )
}

export default Products
