import './Avatar.css'
import Button from '../Button/Button'

const Avatar = () => {
    return (
        <picture>
            <img src="https://randomuser.me/api/portraits/lego/5.jpg" alt="lego" />
            <p>Lego</p>
            <Button />
        </picture>
    )
}

export default Avatar