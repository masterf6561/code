import { useState } from 'react'
import './App.css'

function App() {
  const createRandom = (min: number, max: number) => {
    return (Math.floor(Math.random() * (max - min + 1)) + min)
  }
  
  const [randomNumber, setRandomNumber] = useState(createRandom(5, 100));
  let context;

  window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    canvas.height = window.innerHeight -100;
    canvas.width = window.innerWidth -100;
    context = canvas.getContext("2d");
  });

  window.addEventListener("mousemove", () => {

    context.fillRect(100, 100, 100, 100);
    context.strokeRect(300, 200, 100, 100);
  })

  const resize = () => {
      canvas.height = window.innerHeight -100;
      canvas.width = window.innerWidth - 100;
  }
    
  window.addEventListener("resize", resize);

  

  return (
    <>
      <div className="card">
        <button class="m-5" onClick={() => setRandomNumber(createRandom(5, 100))}>
          {randomNumber}
        </button>
        <canvas id="canvas" class="border-dashed border-4 border-indigo-600">
          
        </canvas>
      </div>
    </>
  )
}

export default App
