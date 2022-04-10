import { createContext, useState } from "react";

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)
    const addItem = (product, quantity) => {
        const objItemCart = {
            ...product,
            quantity
        }
        
        setCart([...cart, objItemCart ])
    }

    const clearCart = () => {
        setCart([])
    }

    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count = count + prod.quantity
        })

        return count
    }

    return (
        <Context.Provider value={{ 
            cart, 
            addItem,
            clearCart,
            getQuantity
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context