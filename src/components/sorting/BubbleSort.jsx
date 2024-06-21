import { useEffect, useState } from "react";

function BubbleSort() {
    const [inputString, setInputString] = useState("");
    const [sortedArray, setSortedArray] = useState([]);
    const [steps, setSteps] = useState([]);
    const [currentI, setCurrentI] = useState(null);
    const [currentJ, setCurrentJ] = useState(null);

    const bubbleSort = () => {
        const array = inputString.split(" ").map(Number);
        setSortedArray(array);
        setSteps([...array]);
    };

    useEffect(() => {
        if (sortedArray.length > 0) {
            const sortSteps = async () => {
                for (let i = 0; i < sortedArray.length; i++) {
                    for (let j = 0; j < sortedArray.length - i - 1; j++) {
                        setCurrentI(j);
                        setCurrentJ(j+1);
                        await new Promise(resolve => setTimeout(resolve, 1000));
                        if (sortedArray[j] > sortedArray[j + 1]) {
                            [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]];
                        }
                        setSteps([...sortedArray]);
                    }
                }
                setCurrentI(null);
                setCurrentJ(null);
            };
            sortSteps();
        }
    }, [sortedArray]);

    return (
        <div>
            <h1>Bubble Sort</h1>
            <div>
                <input
                    type="text"
                    value={inputString}
                    onChange={(e) => setInputString(e.target.value)}
                />
                <button onClick={bubbleSort}>Sort</button>
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

export default BubbleSort;
