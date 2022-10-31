import React from 'react'
import ReactDOM from 'react-dom/client'
import 'sweetalert2/src/sweetalert2.scss'
import App from './App'
import { ProductsProvider } from './context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </React.StrictMode>
)
