import { useEffect, useState } from "react";
import './a.css'
function SelectionSort() {
    const [inputString, setInputString] = useState("");
    const [array, setArray] = useState([]);

    const selectionSort = async () => {

        const bars = document.getElementsByClassName('bar');
        const arrayCopy = [...array];
        //selection sort
        for (let i = 0; i < arrayCopy.length - 1; i++) {
            let min_idx = i;
            bars[i].style.backgroundColor = 'red';
            await new Promise(resolve => setTimeout(resolve, 1000));
            for (let j = i + 1; j < arrayCopy.length; j++) {
                bars[j].style.backgroundColor = 'red';
                await new Promise(resolve => setTimeout(resolve, 1000));
                if (arrayCopy[j] < arrayCopy[min_idx]) {
                    bars[min_idx].style.backgroundColor = '#3498db';
                    min_idx = j;
                    bars[min_idx].style.backgroundColor = 'red';
                    await new Promise(resolve => setTimeout(resolve, 1000));
                }
                else {
                    bars[j].style.backgroundColor = '#3498db';
                }
            }
            await swap(arrayCopy, i, min_idx);
            setArray([...arrayCopy]);
            bars[i].style.backgroundColor = '#3498db';
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
    useEffect(() => {
        settheArray();
    }, []);

    const settheArray = async () => {
        setArray( inputString.split(" ").map(Number));
    }

    return (
        <div className="Sortingcontainer">
            <h1>Selection Sort</h1>
            <p>Enter the elements of array seperated by space</p>
            <div>
                <input
                    className="arrayinput"
                    type="text"
                    value={inputString}
                    onChange={(e) => setInputString(e.target.value)}
                />
                <button onClick={settheArray}>Set The Array</button>
                <button onClick={selectionSort}>Sort</button>
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

export default SelectionSort;
