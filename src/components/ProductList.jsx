import { ProductCard } from './ProductCard'

export const ProductList = ({ productList }) => {
  return (
    <div className='container mx-auto px-6 py-8'>
      <h3 className='text-2xl font-medium text-gray-700'>Products</h3>

      <div className='mt-6'>
        <div className='mb-8 grid justify-center gap-6 lg:grid-cols-2 xl:grid-cols-4'>
          {productList.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}
