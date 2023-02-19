import React, { useCallback } from 'react';
import ReactFlow, {
    addEdge,
    useNodesState,
    useEdgesState,
    Background,
    ReactFlowProvider,
    useReactFlow,
    Connection,
    Edge,
} from 'reactflow';
import 'reactflow/dist/style.css';

import {useGetWindowSize} from "../hooks/useGetWindowSize";

const initialNodes = [
    {
        id: '1',
        type: 'input',
        data: {label: 'Smooth Transition'},
        position: {x: 250, y: 5},
    },
    {
        id: '2',
        type: 'output',
        data: {label: 'zoom-in'},
        position: {x: 100, y: 100},
    },
    {id: '3', data: {label: 'zoom-out'}, position: {x: 400, y: 100}},
];

const initialEdges = [
    {id: 'e1-2', source: '1', target: '2'},
    {id: 'e1-3', source: '1', target: '3'},
];

const SmoothTransition = () => {
    const {width: windowWidth, height: windowHeight} = useGetWindowSize()
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback((params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds)), []);

    const { setViewport, zoomIn, zoomOut } = useReactFlow();

    const handleTransform = useCallback(() => {
        setViewport({ x: 0, y: 0, zoom: 1 }, { duration: 800 });
    }, [setViewport]);

    return (
       <div style={{width: windowWidth, height: windowHeight}}>
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            className="transition"
        >
            <div className="controls">
                <button onClick={() => zoomIn({ duration: 800 })}>zoom in</button>
                <button onClick={() => zoomOut({ duration: 800 })}>zoom out</button>
                <button onClick={handleTransform}>pan to center(0,0,1)</button>
            </div>
            <Background />
        </ReactFlow>
           <style jsx global>{Style}</style>
       </div>
    );
};

// eslint-disable-next-line react/display-name
export default () => (
    <ReactFlowProvider>
        <SmoothTransition />
    </ReactFlowProvider>
);
// ZoomTransitions.tsx

const Style =`
.transition {
    flex-grow: 1;
    position: relative;
  }
  
.transition .controls {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 10;
    font-size: 12px;
}
  
.transition .controls button + button {
    margin-left: 10px;
}
  
`