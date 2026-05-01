import { useState } from "react";
import './counter.css'

function Counter(){
    
    const[count,setCount] = useState(0)

    const incrementToggler = () =>{
        setCount(count+1)
    }
    const decrementToggler = () =>{
        setCount(count-1)
    }
    const resetToggler = () =>{
        setCount(0)
    }
    return(
        <div className="card flex counter-container">
            <h2>Counter UI</h2>
            <p>{count}</p>
            <div className="counter-btns">
                <button onClick={decrementToggler}>Decrement</button>
                <button className="danger-btn"onClick={resetToggler}>Reset</button>
                <button onClick={incrementToggler}>Increment</button>
            </div>
        </div>
    );
}
export default Counter