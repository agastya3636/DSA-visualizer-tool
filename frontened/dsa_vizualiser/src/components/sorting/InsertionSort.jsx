import { useEffect, useState } from "react";

function InsertionSort() {
    const [inputString, setInputString] = useState("");
    const [sortedArray, setSortedArray] = useState([]);
    const [steps, setSteps] = useState([]);
    const [currentI, setCurrentI] = useState(null);
    const [currentJ, setCurrentJ] = useState(null);

    const insertionsort = () => {
        const array = inputString.split(" ").map(Number);
        setSortedArray(array);
        setSteps([...array]);
    };

    useEffect(() => {
        if (sortedArray.length > 0) {
            const sortSteps = async () => {
                for (let i = 1; i < sortedArray.length; i++) {
                    let key = sortedArray[i];
                    let j = i - 1;
                    setCurrentI(i);
                    while (j >= 0 && sortedArray[j] > key) {
                        setCurrentJ(j);
                        await new Promise(resolve => setTimeout(resolve, 1000));
                        sortedArray[j + 1] = sortedArray[j];
                        setSteps([...sortedArray]);
                        j = j - 1;
                    }
                    sortedArray[j + 1] = key;
                    setSteps([...sortedArray]);
                    setCurrentI(null);
                    setCurrentJ(null);
                    await new Promise(resolve => setTimeout(resolve, 1000));
                }
                setCurrentI(null);
                setCurrentJ(null);
            };
            sortSteps();
        }
    }, [sortedArray]);

    return (
        <div>
            <h1>Insertion Sort</h1>
            <div>
                <input
                    type="text"
                    value={inputString}
                    onChange={(e) => setInputString(e.target.value)}
                />
                <button onClick={insertionsort}>Sort</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent:"space-around"}}>
                {steps.map((value, index) => (
                    <div
                        key={index}
                        style={{
                            display: "inline-block",
                            minwidth: "20px",
                            width:"auto",
                            margin: "0 5px",
                            height: `${value * 5}px`,
                            backgroundColor: currentI === index || currentJ === index ? "#F900FF" : "#06FF00",
                            border: "1px solid black",
                            color: "white",
                            textAlign: "center",
                        }}
                    >
                        {value}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InsertionSort;
