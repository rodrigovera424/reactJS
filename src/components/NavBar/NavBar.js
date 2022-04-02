import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from "../CartWidget/CarWidget"

const NavBar = () => { //{ title: 'ecommerce ', color='red'}

  return (
      <nav className="NavBar" >
        <div>
            <h3>Ecommerce</h3>
        </div>
        <div className="Categories">
          <NavLink to='/' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Home</NavLink>
          <NavLink to='/category/pantalones' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Pantalones</NavLink>
          <NavLink to='/category/Camperas' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Camperas</NavLink>
          <NavLink to='/category/Gorras' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Gorras</NavLink>
             <CartWidget/>
        </div>
      </nav>
  )
}

export default NavBar