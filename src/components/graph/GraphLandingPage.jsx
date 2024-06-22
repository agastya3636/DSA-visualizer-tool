// src/App.jsx

import React, { useState } from 'react';
import GraphInputForm from './GraphInputForm';
import GraphVisualizer from './GraphVizualizer';


function GraphLandingPage() {
    const [edges, setEdges] = useState([]);

    const handleAddEdge = (node1, node2) => {
        setEdges((prevEdges) => [...prevEdges, { from: node1, to: node2 }]);
    };

    return (
        <div className="App">
            <h1>Graph Visualizer</h1>
            <GraphInputForm onAddEdge={handleAddEdge} />
            <GraphVisualizer edges={edges} />
        </div>
    );
}

export default GraphLandingPage;
