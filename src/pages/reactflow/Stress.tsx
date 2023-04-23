// Stress.tsx
import React, {useCallback} from 'react';
import ReactFlow, {
    useNodesState,
    useEdgesState,
    addEdge,
    MiniMap,
    Controls,
    Background,
    Connection,
    Edge,
} from 'reactflow';
import 'reactflow/dist/style.css';

import {createNodesAndEdges} from 'src/components/stress/untils';
import {useGetWindowSize} from "src/hooks/useGetWindowSize";

const {nodes: initialNodes, edges: initialEdges} = createNodesAndEdges(10, 10);

const StressFlow = () => {
    const {width: windowWidth, height: windowHeight} = useGetWindowSize()
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback((params: Edge<any> | Connection) => setEdges((els) => addEdge(params, els)), []);

    const updatePos = useCallback(() => {
        setNodes((nds) => {
            return nds.map((node) => {
                return {
                    ...node,
                    position: {
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                    },
                };
            });
        });
    }, []);

    return (
        <div style={{height: windowHeight, width: windowWidth}}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
            >
                <MiniMap/>
                <Controls/>
                <Background/>

                <button onClick={updatePos} style={{position: 'absolute', right: 10, top: 30, zIndex: 4}}>
                    change pos
                </button>
            </ReactFlow>
        </div>
    );
};

export default StressFlow;
