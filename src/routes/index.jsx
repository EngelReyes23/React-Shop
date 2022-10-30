import { lazy, Suspense } from 'react'
import { Redirect, Route, Switch } from 'wouter'

// Local imports
import { Home } from '../pages'

const ROUTES = [
  {
    path: '/home',
    component: Home,
    exact: true
  },
  {
    path: '/about',
    component: lazy(() => import('../pages/About')),
    exact: true
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
