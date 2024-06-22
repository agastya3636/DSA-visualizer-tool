import React, { useState } from 'react';

function GraphInputForm({ onAddEdge }) {
    const [node1, setNode1] = useState('');
    const [node2, setNode2] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (node1 && node2) {
            onAddEdge(node1, node2);
            setNode1('');
            setNode2('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Node 1:
                    <input
                        type="text"
                        value={node1}
                        onChange={(e) => setNode1(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Node 2:
                    <input
                        type="text"
                        value={node2}
                        onChange={(e) => setNode2(e.target.value)}
                    />
                </label>
            </div>
            <button type="submit">Add Edge</button>
        </form>
        
    );
}

export default GraphInputForm;
