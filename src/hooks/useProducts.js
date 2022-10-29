import { useEffect, useState } from 'react'

const API_URL = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=10'

const getProducts = async () => {
  const response = await fetch(API_URL)
  if (response.ok) return await response.json()

  throw new Error('Error al obtener los productos')
}

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data)
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(setIsLoading(false))
  }, [])

  return { products, isLoading, error }
}
