import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Header from './Components/Header.jsx'
import Body from './Components/body/body.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Body/>
    {/* <App /> */}
  </React.StrictMode>,
)
