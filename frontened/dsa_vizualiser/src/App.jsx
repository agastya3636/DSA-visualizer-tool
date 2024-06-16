import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  const [array, setarray] = useState([])
  const [sortedsteps, setsortedsteps] = useState([])
  
  const selectionSort = async () => {
    const response = await axios.post("/api/selection_sort", { array: array })
    console.log(response.data)
    setsortedsteps(response.data.steps)
  }
  

  return (
    <>
      <div className="App">
        <header className="App-header">
          <input type="text" onChange={(e) => setarray(e.target.value)} />
          <button onClick={selectionSort}>Selection Sort</button>
        </header>
      </div>
      <div>
        {/* visual display of sorting using setsortedsteps using animation and a button to display next array*/}
        {sortedsteps.map((step, index) => (
          <div key={index}>
            {step.map((value, index) => (
              <div key={index} style={{ display: "inline-block", margin: "5px", padding: "5px", border: "1px solid black" }}>
                {value}
              </div>
            ))}
          </div>
        ))}
      </div>
     
    </>
  )
}

export default App
