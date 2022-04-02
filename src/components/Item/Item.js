import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({ id, name, img, price}) => {
    return(
        <article className='CardItem'>
            <header className='CardHeader'>
                <h2 className='ItemHeader'>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg'/>
            </picture>
            <section>
                <h3 className='Info'>Precio: ${price}</h3>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item