import Exhibicion from '../components/exhibidor.jsx'
import Nav from '../components/nav.jsx'
import Nombre from '../components/categoria.jsx'
import Home from '../components/inicio.jsx'
import Footer from '../components/footer.jsx'

function Inicio() {
    return (    
    <>
        <div className='flex flex-col'>
        <Nav />
        </div>
      <div className='flex flex-col sticky top-32 left-0 right-0 bottom-0 bg-gray-200'>
        <div>
          <Home />
        </div>
        <div>
          <Nombre text='Te pueden interesar'/>
        </div>
      <div className='grid grid-cols-2 gap-3 p-4 bg-gray-200 w-full order-1 md:grid-cols-3 lg:grid-cols-4'>
        <Exhibicion />
        <Exhibicion />
        <Exhibicion />
        <Exhibicion />
        </div>
        <div className='order-2 '>
        <Nombre text='Antipireticos'/>
        </div>
        <div className='grid grid-cols-2 gap-3 p-4 bg-gray-200  w-full order-3 md:grid-cols-3 lg:grid-cols-4'>
        <Exhibicion />
        <Exhibicion />
        <Exhibicion />
        <Exhibicion />
        </div>
        <div className='order-4 '>
          <Nombre text='Antihistaminicos'/>
        </div>
        <div className='grid grid-cols-2 gap-3 p-4 bg-gray-200  w-full order-5 md:grid-cols-3 lg:grid-cols-4'>
        <Exhibicion />
        <Exhibicion />
        <Exhibicion />
        <Exhibicion />
        </div>
        <div className='order-6 '>
          <Nombre text='Antibioticos' />
        </div>
        <div className='grid grid-cols-2 gap-3 p-4 bg-gray-200  w-full order-7 md:grid-cols-3 lg:grid-cols-4'>
        <Exhibicion />
        <Exhibicion />
        <Exhibicion />
        <Exhibicion />
        </div>
        <div className='order-8'>
        <Footer />
        </div>
      </div>
        </>
    )
}

export default Inicio