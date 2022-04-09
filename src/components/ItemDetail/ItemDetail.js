import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const InputText = ({ onAdd }) => {
    const [value, setValue] = useState(0)

    return(
        <div>
            <input type='number' onChange={(e) => setValue(e.target.value)}/>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [inputType, setInputType] = useState('text')

    const onAdd = () => {
        console.log('agregue al carrito')
    }

    const Count = inputType === 'text' ? InputText : ItemCount
        

    return (
        <article className="CardItem">
            <button onClick={() => setInputType('button')}>Cambiar input</button>
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {inputType === 'text' ? <InputText onAdd={onAdd}/> : <ItemCount onAdd={onAdd}/> }
                <Count onAdd={onAdd} />
            </footer>
        </article>
    )
}

export default ItemDetail