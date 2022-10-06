// React Custom Hooks part 1

import React from 'react'
import useCounter from './Hooks42/useCounter'

const CounterController=({counter, handleInc, handleDec})=>{
    return(
        <div>
            <button onClick={handleInc}>+</button>
            <span>{counter}</span>
            <button onClick={handleDec}>-</button>
        </div>
    )
}


const App = () => {
    const {count: counter1, handleDec:handleDec1, handleInc:handleInc1} = useCounter({initial: 5, lowerBound:3, upperBound:13}) ;// count er por clone dia jekono kono name dite pari
    const {count: counter2, handleDec:handleDec2, handleInc:handleInc2} = useCounter({ lowerBound:-5,}) ; // initail alue 0 pabe
    const {count: counter3, handleDec:handleDec3, handleInc:handleInc3} = useCounter({initial:10, upperBound:15}) ;
 
  return (
    <div>
        <CounterController 
          counter={counter1}
          handleInc={handleInc1}
          handleDec={handleDec1}
        />
        <CounterController 
          counter={counter2}
          handleInc={handleInc2}
          handleDec={handleDec2}
        />
        <CounterController 
          counter={counter3}
          handleInc={handleInc3}
          handleDec={handleDec3}
        />
    </div>
  )
}

export default App