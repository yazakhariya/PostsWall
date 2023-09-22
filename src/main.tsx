import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import { Provider } from 'react-redux'
import { store } from './app/providers/with-redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
