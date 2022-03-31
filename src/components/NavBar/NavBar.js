import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => { //{ title: 'ecommerce ', color='red'}

  return (
      <nav className="NavBar" >
        <div>
            <h3>Ecommerce</h3>
        </div>
        <div className="Categories">
          <NavLink to='/' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Home</NavLink>
          <NavLink to='/category/celular' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Pantalones</NavLink>
          <NavLink to='/category/tablet' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Camperas</NavLink>
          <NavLink to='/category/notebook' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Gorras</NavLink>
        </div>
      </nav>
  )
}

export default NavBar