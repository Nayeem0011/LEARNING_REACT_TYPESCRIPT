
import './App.css'
import { GenericList } from './components/GenericList'
import { useCounter } from './contex/CounterContext'

function App() {
  const {state, dispatch} = useCounter()

  const fruits = ["Apple", "Banana", "Mango"]

  return (
    <>
      <h1>Typescript Class Demo</h1>
      
      <div>
        <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
        <p>{state.count}</p>
        <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
      </div>

      <GenericList items={fruits} render={(item) => <strong>{item}</strong>}/>
    </>
  )
}

export default App
