import { useState } from "react";
import Button from "./Button";

const Counter:React.FC = () => {
    const [counter, setCounter] = useState<number>(0)
    const handleIncerment = ()=> setCounter(prev=>prev+1)
    const handleDecrement = ()=> setCounter(prev=>prev -1)

    return (
        <div>
            <h1>Count : {counter}</h1>
            <Button handlerFunction={handleIncerment} title="Increment"/>
            <Button handlerFunction={handleDecrement} title="Decrement"/>
        </div>
    )

}

export default Counter