import './CartWidget.css'

import { Link } from 'react-router-dom'


const CartWidget = () => {
  

    return (
               <Link to={'/'} className="CartWidget">
              <img src="https://thumbs.dreamstime.com/z/icono-rojo-del-carro-de-compras-96010166.jpg" alt="carrito de compras" height='50px'   />
         5
        </Link>
    );
}

export default CartWidget