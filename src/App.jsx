import { useCallback, useEffect, useState } from 'react'
import './App.css'

import Navbar from "./navbar"
import SelectionSort from "./components/sorting/SelectionSort"
import BubbleSort from './components/sorting/BubbleSort'
import InsertionSort from './components/sorting/InsertionSort'


function App() {
  return (
    <>
      <SelectionSort />
      <BubbleSort />
      <InsertionSort/>
      {/* <Navbar/> */}
      {/* <div className="App">
        <header className="App-header">
          <input type="text" onChange={(e) => setarray(e.target.value)} />
          <button onClick={selectionSort}>Selection Sort</button>
          <button onClick={bubbleSort}>Bubble Sort</button>
          <button onClick={insertionSort}>Insertion Sort</button>
          <button onClick={mergeSort}>Merge Sort</button>
          <button onClick={quick_sort}>Quick Sort</button>
          <button onClick={heapSort}>Heap Sort</button>
          <button onClick={radixSort}>Radix Sort</button>


        </header>
      </div>
      <div>
        <div>
          {sortedi-1}
        </div>
        
        {
          
          steps.map((value, index)=>(
            <div key={index} style={{
              display: "inline-block",
              width: "fit-content",
              height:`${value*10}px`,
              margin: "0 2px",
              backgroundColor: sortede[index] == value ? 'green' : 'red',
              borderColor:index==sortedi?"blue":"black",borderWidth:"2px",borderStyle:"solid",
              color: "white",
              textAlign: "center",
              animation:
                sortedi-1 > index
                  ? "highlight 1s infinite"
                  : "none",
            }}>
            {value}
          </div>
          ))
        }
      </div> */}
    </>
  )
}

export default App
