import { useState } from 'react'
import '../ItemCount/ItemCount.css'

const ItemCount = ({ initial = 0, stock, onAdd}) => {
    const [count, setCount] = useState(initial)


    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }
      const decrement = () => {
          if (count< stock ){
       setCount(count - 1)
        }
    }

    return(
        <div className='CardItems'  >
            <button className='cabeza' onClick={decrement}>-</button>
            <p className='ItemCabeza ' >{count}</p>
            <button className='cabeza' onClick={increment}>+</button>
            <button className='cabeza' onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount