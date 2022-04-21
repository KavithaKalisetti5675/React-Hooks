import React, { useReducer } from 'react'

const ReducerHook = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "Increment":
                return { counter: state.counter + 1, show: state.show }
            case "toggleShow":
                return { counter: state.counter, show: !state.show }
        }
    
    }
    // const [counter,setCounter]=useState(0);
    // const [show,setShow]=useState(true)
    const [state, dispatch] = useReducer(reducer, { counter: 0, show: true })

    let increment = () => {
        dispatch({ type: "Increment" })
        dispatch({ type: "toggleShow" })

    }
    return (
        <div>
            ReducerHook
            <div>
                {state.counter}
                <button onClick={increment}>Increment</button>
                {state.show && <h1>I'm visible</h1>}
            </div>
        </div>
    )
}
export default ReducerHook
