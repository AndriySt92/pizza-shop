import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './scss/app.scss'
import loader from './assets/img/loader.gif'
import {Home} from './Pages/index'
import {Header} from './components/index'

const Cart = React.lazy(() => import('./Pages/Cart'))

function App() {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
         <Switch>
            <Route exact path="/" component={Home}  />
            <React.Suspense fallback={<img src={loader} />}>
              <Route path="/cart" component={Cart} />
            </React.Suspense>
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App
