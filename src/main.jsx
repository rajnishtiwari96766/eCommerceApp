import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider } from './context/prod_context.jsx'
import { FilterContextProvider } from './context/all_prod.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider>
      <FilterContextProvider>
    <App />
      </FilterContextProvider>
    </Provider>
)
