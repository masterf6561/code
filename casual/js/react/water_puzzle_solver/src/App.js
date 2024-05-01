import React, { useState } from 'react';
import './App.css';
import { Colors } from './Colors';
import { getSolutions } from './getSolutions';
import { TubeCountInput } from './TubeCountInput';

function App() {

  const [tubeCount, setTubeCount] = useState(4);

  const handleTubeCount = (value) => {
    const count = parseInt(value);
    if (!isNaN(count) && count > 0) {
      setTubeCount(value);
      setContainers(Array.from({ length: tubeCount }, () => Array.from({ length: 4 }, () => "")));
    }
  }

  const [containers, setContainers] = useState(Array.from({ length: tubeCount }, () => Array.from({ length: 4 }, () => "")));

  const colors = {
    1: "hsl(112, 83%, 41%)",
    2: "hsl(89, 100%, 65%)",
    3: "hsl(180, 92%, 39%)",
    4: "hsl(350, 89%, 53%)",
    5: "hsl(34, 100%, 54%)",
    6: "hsl(140, 67%, 61%)",
    7: "hsl(297, 8%, 46%)",
    8: "hsl(14, 95%, 57%)",
    9: "hsl(197, 70%, 38%)",
    10: "hsl(254, 52%, 71%)",
    11: "hsl(236, 100%, 47%)",
    12: "hsl(274, 100%, 47%)",
    13: "hsl(350, 72%, 52%)",
    14: "hsl(187, 62%, 87%)",
    15: "hsl(339, 80%, 78%)",
    16: "hsl(130, 80%, 20%)",
  };


  // Function to handle pouring water from one container to another
  const pourWater = (fromIndex, toIndex) => {
    if (fromIndex === toIndex || containers[fromIndex].length === 0) return;

    const newContainers = [...containers];
    const fromContainer = newContainers[fromIndex];
    const toContainer = newContainers[toIndex];

    const topFromColor = fromContainer[fromContainer.length - 1];
    const topToColor = toContainer[toContainer.length - 1];

    if (topToColor === undefined || topToColor === topFromColor) {
      toContainer.push(fromContainer.pop());
      setContainers(newContainers);
    }
  };

  const fillTubes = (color) => {
    for (let i = 0; i < containers.length; i++) {
      const newContainers = [...containers];
      if (containers[i][0] === "") {
        for (let j = 4; j >= 0; j--) {
          if (newContainers[i][j] === "") {
            newContainers[i][j] = color;
            const currentColor = document.getElementById(`container${i}_color${j}`);
            if (currentColor) {
              currentColor.style.backgroundColor = colors[color];
            }
            setContainers(newContainers);
            break;
          }
        }
        break;
      }
    }
  }

  return (
    <div className='page'>
      <div className="App">
        <h1>Water Sort Puzzle</h1>
        <TubeCountInput setTubeCount={handleTubeCount} />
        <div className="container-row">
          {containers.map((container, index) => (
            <div className="container" key={index} onClick={() => pourWater(index, (index + 1) % containers.length)}>
              {container.map((color, i) => (
                <div id={`container${index}_color${i}`} key={i} className={`water color${color}`}>
                </div>
              ))}
            </div>
          ))}
        </div>
        <button className='solutions-button' onClick={getSolutions}>Get Solutions!</button>
      </div>
      <Colors colors={colors} onClick={fillTubes} />
    </div>
  );
}

export default App;

