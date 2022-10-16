import { useState } from 'react';

export function Counter() {

    const [counter, setCounter] = useState(0);

    function add() {
        setCounter(counter + 1);
    }

    return (
        <>
            <h2>{counter}</h2>
            <button 
                role={'button'}
                onClick={add}
            >
                Add
            </button>
        </>
    )
}