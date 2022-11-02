import { ProductCard } from './ProductCard'

export const ProductList = ({ productList }) => (
  <div className='flex flex-wrap items-center justify-evenly gap-1 gap-y-10'>
    {productList.map((product) => (
      <ProductCard key={product.id} {...product} />
    ))}
  </div>
)
