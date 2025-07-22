
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'
import { products } from './data/data'
import type { productInterface } from './interfaces/productinterface'

function App() {
  const buttonHandler = () => {
    console.log("Clicked")
  }

  return (
    <>
      <div>
        <h1>Welcome to my TypeScript Application</h1>
        <Button handlerFunction={buttonHandler} title='Click Me'/>

        {
          products.map((item: productInterface, index: number)=> <div key={index}>{item.title}</div>)
        }
      </div>
      <Counter/>
    </>
  )
}

export default App
