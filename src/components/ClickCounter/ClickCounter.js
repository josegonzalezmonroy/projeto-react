import React, { useEffect, useState } from "react";

export default function ClickCounter() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(tasks => setTasks(tasks))
    })


    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    useEffect(
        () => { document.title = `You clicked ${count} times` }
    )
    return (
        <div>Count: {count}
            <button onClick={() => setCount(initialCount)} >Reset</button>
            <button onClick={() => setCount(count + 1)} >Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            Task count: {tasks.length}
        </div>
    )
}