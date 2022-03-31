import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { getProducts, getProductsByCategory } from '../../asyncmock'
import { useParams } from 'react-router-dom'

const ItemListContainer = ()=> {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        if(categoryId) {
            setLoading(true)

            getProductsByCategory(categoryId).then(items => {
                setProducts(items)
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            setLoading(true)

            getProducts().then(item => {
                setProducts(item)
            }).catch(err  => {
                console.log(err)
            }).finally(() => {
                setLoading(false)
            })
        }  

        return (() => {
            setProducts([])
        })          
    }, [categoryId])

    if(loading) {
        return <h1>Cargando productos...</h1>
    }

    if(products.length === 0) {
        return <h1>No hay productos de esta categoria</h1>
    }
    
    return (
        <div className="ItemListContainer">
            <ItemList products={products}/>
        </div>
    )    
    
}

export default ItemListContainer