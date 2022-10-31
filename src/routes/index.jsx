import { Redirect, Route, Switch } from 'wouter'

// Local imports
import { About, Checkout, Contact, Home, Products, ShoppingCart } from '../pages'

const ROUTES = [
  {
    exact: true,
    path: '/home',
    component: Home
  },
  {
    exact: true,
    path: '/about',
    component: About
  },
  {
    exact: true,
    path: '/contact',
    component: Contact
  },
  {
    exact: true,
    path: '/products',
    component: Products
  },
  {
    exact: true,
    path: '/shopping-cart',
    component: ShoppingCart
  },
  {
    exact: true,
    path: '/checkout',
    component: Checkout
  }
]

const Routes = () => {
  return (
    <Switch>
      {ROUTES.map((route, index) => (
        <Route key={index} {...route} />
      ))}

      <Route>
        <Redirect to='/home' />
      </Route>
    </Switch>
  )
}

export default Routes
