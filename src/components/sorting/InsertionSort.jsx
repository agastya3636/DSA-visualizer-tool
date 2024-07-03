import { useEffect, useState } from "react";
import './a.css'
function InsertionSort() {
    const [inputString, setInputString] = useState("");
    const [array, setArray] = useState([]);

    const insertionSort = async () => {

        const bars = document.getElementsByClassName('bar');
        const arrayCopy = [...array];
        //insertion sort
        for (let i = 1; i < arrayCopy.length; i++) {
            let key = arrayCopy[i];
            let j = i - 1;
            bars[i].style.backgroundColor = 'red';
            await new Promise(resolve => setTimeout(resolve, 1000));
            while (j >= 0 && arrayCopy[j] > key) {
                bars[j].style.backgroundColor = 'red';
                await new Promise(resolve => setTimeout(resolve, 1000));
                arrayCopy[j + 1] = arrayCopy[j];
                setArray([...arrayCopy]);
                bars[j].style.backgroundColor = '#3498db';
                j = j - 1;
            }
            arrayCopy[j + 1] = key;
            setArray([...arrayCopy]);
            bars[i].style.backgroundColor = '#3498db';
            await new Promise(resolve => setTimeout(resolve, 1000));
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
            <h1>Insertion Sort</h1>
            <p>Enter the elements of array seperated by space</p>
            <div>
                <input
                    className="arrayinput"
                    type="text"
                    value={inputString}
                    onChange={(e) => setInputString(e.target.value)}
                />
                <button onClick={settheArray}>Set The Array</button>
                <button onClick={insertionSort}>Sort</button>
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

export default InsertionSort;
