import React from 'react'
import ReactDOM from 'react-dom/client'
import Exhibicion from './components/exhibidor.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <div className='grid grid-cols-3, gap-4, w-96 h-96 p-4 bg-gray-200 place-items-center'>
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
