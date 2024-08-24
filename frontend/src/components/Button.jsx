import { useState } from "react";
function Product({ producto }) {
    const [carrito, setCarrito] = useState(() => {
        const carritoGuardado = localStorage.getItem('carrito');
        return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    });
    const handleAgregarAlCarrito = () => {
      setCarrito([...carrito, producto]);
      localStorage.setItem('carrito', JSON.stringify([...carrito, producto]));
      console.log(carrito);
    };
  
    return (
      <div>
        {/* Información del producto */}
        <button onClick={handleAgregarAlCarrito}
        className='bg-gray-200 rounded-xl h-fit w-fit p-4 gap-4 mx-4 my-4 hover:bg-gray-400'>Agregar al carrito</button>
      </div>
    );
  }
  export default Product;