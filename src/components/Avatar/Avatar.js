// import { Component } from 'react'
import './Avatar.css'
import Button from '../Button/Button'

const Avatar = ({  name, age, country, children }) => {
    console.log(children)

    const logger = () => {
        console.log('Esta funcion esta en Avatar')
    }

    const otherLogger = () => {
        console.log('otro log en Avatar')
    }

    return (
        <picture className="Avatar">
            <img src="https://randomuser.me/api/portraits/lego/5.jpg" alt="lego" />
            <p>Nombre: {name}</p>
            <p>Edad: {age}</p>
            <Button func={logger} label='logger' color='red'/>
            <Button func={otherLogger} label='otherLogger' color='blue'/>
            {children}
        </picture>
    )
}

// class Avatar extends Component {
//     render() {
//         return (
//             <picture className="Avatar">
//              <img src="https://randomuser.me/api/portraits/lego/5.jpg" alt="lego" />
//              <p>Nombre: {this.props.name}</p>
//              <p>Edad: {this.props.age}</p>
//              <Button />
//          </picture>
//         )
//     }
// }

export default Avatar