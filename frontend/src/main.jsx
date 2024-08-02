import React from 'react'
import ReactDOM from 'react-dom/client'
import Exhibicion from './components/exhibidor.jsx'
import Nav from './components/nav.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <div className=''>
    <Nav />
    </div>
    <div class='grid grid-cols-4 (0,1fr) gap-8 p-4 bg-gray-200'>
    <Exhibicion />
    <Exhibicion />
    <Exhibicion />
    <Exhibicion />
    </div>
    <div>
    <Exhibicion />
    </div>
    </>
  </React.StrictMode>,
)
