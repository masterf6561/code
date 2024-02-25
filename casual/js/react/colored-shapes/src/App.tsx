import { useState } from 'react'
import './App.css'

function App() {
  const createRandom = (min: number, max: number) => {
    return (Math.floor(Math.random() * (max - min + 1)) + min)
  }
  
  const [randomNumber, setRandomNumber] = useState(createRandom(5, 100))

  return (
    <>
      <div className="card">
        <button onClick={() => setRandomNumber(createRandom(5, 100))}>
          {randomNumber}
        </button>
      </div>
    </>
  )
}

export default App
