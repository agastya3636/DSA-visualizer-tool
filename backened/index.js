import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/selection_sort", (req, res) => {
    const arrayString = req.body.array;
    if (!arrayString) {
        return res.status(400).send({ error: "Array string is required" });
    }
    let array = arrayString.split(" ").map(Number);
    let steps = [];
    steps.push([...array]);
    let n = array.length;
    for (let i = 0; i < n-1; i++) {
        let minIndex = i;
        for (let j = i+1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
        steps.push([...array]);
    }
    res.send({ steps });
})

app.post("/bouble_sort", (req, res) => {
    const arrayString = req.body.array;
    console.log(req.body)
    if (!arrayString) {
        return res.status(400).send({ error: "Array string is required" });
    }
    
    let array = arrayString.split(" ").map(Number);
    let steps = [];
    steps.push([...array]);
    let n = array.length;
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
            steps.push([...array]);
        }
    }
    res.send({ steps });
});

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});
