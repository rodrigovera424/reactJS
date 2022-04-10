import { useContext } from "react"
import CartContext from '../../context/CartContext'

const Cart = () => {

    const { cart, clearCart } = useContext(CartContext)

    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {cart.map(prod => <li key={prod.id}>{prod.name}</li>)}
            </ul>
            <button onClick={clearCart}>Vaciar carrito</button>
        </div>
    )
}

export default Cart