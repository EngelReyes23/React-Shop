import { lazy, Suspense } from 'react'
import { Redirect, Route, Switch } from 'wouter'

// Local imports
import { Home } from '../pages'

const ROUTES = [
  {
    exact: true,
    path: '/home',
    component: Home
  },
  {
    exact: true,
    path: '/about',
    component: lazy(() => import('../pages/About'))
  },
  {
    exact: true,
    path: '/contact',
    component: lazy(() => import('../pages/Contact'))
  },
  {
    exact: true,
    path: '/products',
    component: lazy(() => import('../pages/Products'))
  },
  {
    exact: true,
    path: '/shopping-cart',
    component: lazy(() => import('../pages/ShoppingCart'))
  }
]

const Routes = () => {
  return (
    <Suspense>
      <Switch>
        {ROUTES.map((route, index) => (
          <Route key={index} {...route} />
        ))}

        <Route>
          <Redirect to='/home' />
        </Route>
      </Switch>
    </Suspense>
  )
}

export default Routes
