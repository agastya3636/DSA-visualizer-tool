
import React, { useEffect, useRef } from 'react';
import { Network } from 'vis-network/standalone';

function GraphVisualizer({ edges }) {
    const containerRef = useRef(null);

    useEffect(() => {
        const nodes = new Set();
        edges.forEach(({ from, to }) => {
            nodes.add(from);
            nodes.add(to);
        });

        const data = {
            nodes: Array.from(nodes).map((id) => ({ id, label: id })),
            edges: edges.map(({ from, to }) => ({ from, to })),
        };

        const options = {
            nodes: {
                shape: 'dot',
                size: 16,
            },
            edges: {
                arrows: {
                    to: {
                        enabled: true,
                    },
                },
            },
        };

        const network = new Network(containerRef.current, data, options);

        return () => {
            network.destroy();
        };
    }, [edges]);

    return <div ref={containerRef} style={{ height: '500px' }} />;
}

export default GraphVisualizer;
