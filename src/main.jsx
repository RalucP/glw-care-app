import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Elements } from '@stripe/react-stripe-js'

import { store, persistor } from './store/store'
import { stripePromise } from './utils/stripe/stripe.utils'
import App from './App.jsx'

import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)