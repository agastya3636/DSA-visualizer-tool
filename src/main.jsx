import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './components/App.jsx';
import SelectionSort from './components/sorting/SelectionSort.jsx';
import BubbleSort from './components/sorting/BubbleSort.jsx';
import InsertionSort from './components/sorting/InsertionSort.jsx';
import './index.css';
import SortingLandingPage from './components/SortingLandingPage.jsx';
import LandingPage from './components/LandingPage.jsx';
import Sorting from './components/Sorting.jsx'
import GraphLandingPage from './components/graph/GraphLandingPage.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<LandingPage />} />
      <Route path="sorting" element={<Sorting/>}>
        <Route index element={<SortingLandingPage />} />
        <Route path="selection" element={<SelectionSort />} />
        <Route path="bubble" element={<BubbleSort />} />
        <Route path="insertion" element={<InsertionSort />} />
      </Route>
      <Route path='pathfinding' element={<GraphLandingPage/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
