import { useParams } from 'react-router-dom'

const Contact = () => {
    const params = useParams()
    console.log(params)

    return (
        <h1>Contact {params.name}</h1>
    )
}

export default Contact