import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './components/App.jsx';
import SelectionSort from './components/sorting/SelectionSort.jsx';
import BubbleSort from './components/sorting/BubbleSort.jsx';
import InsertionSort from './components/sorting/InsertionSort.jsx';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="selection" element={<SelectionSort />} />
      <Route path="bubble" element={<BubbleSort />} />
      <Route path="insertion" element={<InsertionSort />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
