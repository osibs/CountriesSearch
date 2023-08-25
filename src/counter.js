import { useState } from "react";

const Counter = () => {

    const [counter, setCounter] = useState(0);
    const upward = () => {
       // setCounter(counter + 1) //dont update your state like this
        setCounter(prev => prev +1) // this is better
    }

    const downward = () => {  
        if (counter > 0) {
            setCounter(prev => prev - 1)
        }
    }

    const reset = () => {
        setCounter(0)
    }

    const [Opentab, setOpentab] = useState(true);

    const tabs = () => {
        setOpentab(prev => !prev)
    }

    return ( 
        <div>
            <div style={{float:'right'}}>
                <button onClick={tabs}> x </button>
            </div>

            
            {Opentab && <div>
            <div className="d-flex">
             <h3> {counter} </h3>
            </div>

            <button className="btn btn-info" onClick={upward}> plus </button>
            <button className="btn btn-dark" onClick={downward}> minus </button>
            <button className="btn btn-danger" onClick={reset}> Reset </button>
                </div>}
        </div>
     );
}
 
export default Counter;