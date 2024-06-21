import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/api/radix_sort", (req, res) => {
    const arrayString = req.body.array;
    if (!arrayString) {
        return res.status(400).send({ error: "Array string is required" });
    }
    let array = arrayString.split(" ").map(Number);
    let steps = [];
    steps.push([...array]);
    const getMax = (arr) => {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
    const countSort = (arr, exp) => {
        let n = arr.length;
        let output = new Array(n);
        let count = new Array(10).fill(0);
        for (let i = 0; i < n; i++) {
            count[Math.floor(arr[i] / exp) % 10]++;
        }
        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }
        for (let i = n - 1; i >= 0; i--) {
            output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
            count[Math.floor(arr[i] / exp) % 10]--;
        }
        for (let i = 0; i < n; i++) {

            arr[i] = output[i];
            steps.push([...arr])
        }
    }
    const radixSort = (arr) => {
        let max = getMax(arr);
        for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
            countSort(arr, exp);
            steps.push([...arr]);
        }
    }
    radixSort(array);
    res.send({ steps });
});

app.post("/api/heap_sort", (req, res) => {
    const arrayString = req.body.array;
    if (!arrayString) {
        return res.status(400).send({ error: "Array string is required" });
    }
    let array = arrayString.split(" ").map(Number);
    let steps = [];
    steps.push([...array]);
    const heapify = (arr, n, i) => {
        let largest = i;
        let l = 2 * i + 1;
        let r = 2 * i + 2;
        if (l < n && arr[l] > arr[largest]) {
            largest = l;
        }
        if (r < n && arr[r] > arr[largest]) {
            largest = r;
        }
        if (largest !== i) {
            let swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;
            heapify(arr, n, largest);
        }
    }
    const heapSort = (arr) => {
        let n = arr.length;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heapify(arr, n, i);
        }
        for (let i = n - 1; i > 0; i--) {
            let temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
            heapify(arr, i, 0);
            steps.push([...arr]);
        }
    }
    heapSort(array);
    res.send({ steps });

})

app.post("/api/quick_sort", ( req, res )=> {
    const arrayString = req.body.array;
    if (!arrayString) {
        return res.status(400).send({ error: "Array string is required" });
    }
    let array = arrayString.split(" ").map(Number);
    let steps = [];
    steps.push([...array]);
    const partition = (arr, low, high) => {
        let pivot = arr[high];
        let i = low - 1;
        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        let temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }
    const quickSort = (arr, low, high) => {
        if (low < high) {
            let pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
            steps.push([...arr]);
        }
    }
    quickSort(array, 0, array.length - 1);
    res.send({ steps });
});
app.post("/api/merge_sort", (req, res) => {
    const arrayString = req.body.array;
    if (!arrayString) {
        return res.status(400).send({ error: "Array string is required" });
    }
    let array = arrayString.split(" ").map(Number);
    let steps = [];
    steps.push([...array]);
    const merge = (arr, l, m, r) => {
        let n1 = m - l + 1;
        let n2 = r - m;
        let L = new Array(n1);
        let R = new Array(n2);
        for (let i = 0; i < n1; i++) {
            L[i] = arr[l + i];
        }
        for (let j = 0; j < n2; j++) {
            R[j] = arr[m + 1 + j];
        }
        let i = 0;
        let j = 0;
        let k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }
    const mergeSort = (arr, l, r) => {
        if (l >= r) {
            return;
        }
        let m = l + Math.floor((r - l) / 2);
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
        steps.push([...arr]);
    }
    mergeSort(array, 0, array.length - 1);
    res.send({ steps });
});
app.post("/api/insertion_sort", (req, res) => {
    const arrayString = req.body.array;
    if (!arrayString) {
        return res.status(400).send({ error: "Array string is required" });
    }
    let array = arrayString.split(" ").map(Number);
    let steps = [];
    steps.push([...array]);
    let n = array.length;
    for (let i = 1; i < n; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
        steps.push([...array]);
    }
    res.send({ steps });
})

app.post("/api/selection_sort", (req, res) => {
    const arrayString = req.body.array;
    if (!arrayString) {
        return res.status(400).send({ error: "Array string is required" });
    }
    let array = arrayString.split(" ").map(Number);
    let steps = [];
    let currentj = [];
    let currenti = [];
    steps.push([...array]);
    currenti.push(-1);
    currentj.push(-1);
    let n = array.length;
    for (let i = 0; i < n-1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            currentj.push(j);
            currenti.push(i);
            steps.push([...array]);
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
        currentj.push(minIndex);
        currenti.push(i);
        steps.push([...array]);
    }
    res.send({ steps,currentj ,currenti});
})

app.post("/api/bouble_sort", (req, res) => {
    const arrayString = req.body.array;
    console.log(req.body)
    if (!arrayString) {
        return res.status(400).send({ error: "Array string is required" });
    }
    
    let array = arrayString.split(" ").map(Number);
    let steps = [];
    steps.push([...array]);
    let n = array.length;
    for (let i = 0; i < n ; i++) {
        // let f = true;
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j + 1] = temp;
                // f = false;
            }
            steps.push([...array]);
            // if (f)
                // break;
        }
    }
    res.send({ steps });
});

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});
