const Button = ({ func, label, color }) => {
    return <button onClick={func} style={{ color }}>{label}</button>
}

export default Button