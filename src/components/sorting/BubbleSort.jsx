import { useEffect, useState } from "react";
import './a.css'
function BubbleSort() {
    const [inputString, setInputString] = useState("");
    const [array, setArray] = useState([]);

    const bubbleSort = async () => {
        // setArray( inputString.split(" ").map(Number));
        const bars = document.getElementsByClassName('bar');
        const arrayCopy = [...array];
        for (let i = 0; i < arrayCopy.length - 1; i++) {
            for (let j = 0; j < arrayCopy.length - i - 1; j++) {
                bars[j].style.backgroundColor = 'red';
                bars[j + 1].style.backgroundColor = 'red';
                if (arrayCopy[j] > arrayCopy[j + 1]) {
                    await swap(arrayCopy, j, j + 1);
                    setArray([...arrayCopy]);
                }
                bars[j].style.backgroundColor = '#3498db';
                bars[j + 1].style.backgroundColor = '#3498db';
            }
        }
    };

    const swap = (array, i, j) => {
        return new Promise(resolve => {
            setTimeout(() => {
                [array[i], array[j]] = [array[j], array[i]];
                resolve();
            }, 1000);
        });
    };

    const settheArray = async () => {
        setArray( inputString.split(" ").map(Number));
    }

    return (
        <div className="Sortingcontainer">
            <h1>Bubble Sort</h1>
            <p>Enter the elements of array seperated by space</p>
            <div>
                <input
                    className="arrayinput"
                    type="text"
                    value={inputString}
                    onChange={(e) => setInputString(e.target.value)}
                />
                <button onClick={settheArray}>Set The Array</button>
                <button onClick={bubbleSort}>Sort</button>
            </div>
           <div className="array-container">
                {array.map((value, idx) => (
                    <div
                        className="bar"
                        key={idx}
                        style={{ height: `${value * 5}px` }}
                    >
                        {value}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BubbleSort;
