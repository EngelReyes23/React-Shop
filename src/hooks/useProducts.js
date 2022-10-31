import { useEffect, useState } from 'react'
import api from '../utils'

const getProducts = async (id) => await api.products(id)

export const useProducts = (id = '') => {
  const [data, setData] = useState({
    error: null,
    products: [],
    isLoading: true
  })

  useEffect(() => {
    getProducts(id)
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
  }, [id])

  return data
}
