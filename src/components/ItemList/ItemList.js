import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return (
        <ul className='ListGroup'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </ul>
    )
}

export default ItemList