const API_URL = 'https://api.escuelajs.co/api/v1'

const createAPI = (baseURL) => {
  return new Proxy(
    {},
    {
      get: (_, endpoint) => {
        let url = `${baseURL}/${endpoint}`

        return async (name = '', queryParams = '') => {
          url += `/${name}`

          url += `?${new URLSearchParams(queryParams).toString()}`

          const res = await fetch(url)
          return res.json()
        }
      }
    }
  )
}

export default createAPI(API_URL)
