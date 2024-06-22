import React from 'react';
import { Outlet } from 'react-router-dom';
import SortingLandingPage from './SortingLandingPage.jsx';

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
