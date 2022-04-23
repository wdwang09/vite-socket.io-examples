import React from 'react'
import ReactDOM from 'react-dom/client'
import { SocketIOStates, StatesContext } from './states'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StatesContext.Provider value={new SocketIOStates()}>
      <App />
    </StatesContext.Provider>
  </React.StrictMode>
)
