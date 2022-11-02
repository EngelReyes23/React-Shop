import { ProductCartSkeleton } from './ProductCartSkeleton'

const array = Array.from({ length: 20 })

export const ProductListSkeleton = () => (
  <div className='flex flex-wrap items-center justify-evenly gap-1 gap-y-10'>
    {array.map((_, index) => (
      <ProductCartSkeleton key={index} />
    ))}
  </div>
)
