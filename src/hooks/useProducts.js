import { useEffect, useState } from 'react'

const API_URL = 'https://api.escuelajs.co/api/v1/products?offset=20&limit=20'

const getProducts = async () => {
  const response = await fetch(API_URL)
  if (response.ok) return await response.json()

  throw new Error('Error al obtener los productos')
}

export const useProducts = () => {
  const [data, setData] = useState({
    error: null,
    products: [],
    isLoading: true
  })

  useEffect(() => {
    getProducts()
      .then((data) => {
        setData({
          error: null,
          products: data,
          isLoading: false
        })
      })
      .catch((error) => {
        setData({
          error: error.message,
          products: [],
          isLoading: false
        })
      })
  }, [])

  return data
}
