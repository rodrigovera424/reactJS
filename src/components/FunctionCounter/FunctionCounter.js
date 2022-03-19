const FunctionCounter = () => {
    
    let count = 0

    const increment = () => {
        count = count + 1
    }

    const decrement = () => {
        count = count - 1
    }

    return(
        <div>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default FunctionCounter