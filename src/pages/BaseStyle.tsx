import React, {useCallback} from 'react';
import ReactFlow, {
    Background,
    Controls,
    MiniMap,
    useNodesState,
    useEdgesState,
    addEdge,
    Position,
    Connection,
    Edge,
} from 'reactflow';

import 'reactflow/dist/base.css';
import {useGetWindowSize} from "../hooks/useGetWindowSize";

const nodeDefaults = {
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
};

const initialNodes = [
    {
        id: '1',
        position: {x: 0, y: 150},
        data: {label: 'base style 1'},
        ...nodeDefaults,
    },
    {id: '2', position: {x: 250, y: 0}, data: {label: 'base style 2'}, ...nodeDefaults},
    {id: '3', position: {x: 250, y: 150}, data: {label: 'base style 3'}, ...nodeDefaults},
    {id: '4', position: {x: 250, y: 300}, data: {label: 'base style 4'}, ...nodeDefaults},
];

const initialEdges = [
    {
        id: 'e1-2',
        source: '1',
        target: '2',
    },
    {
        id: 'e1-3',
        source: '1',
        target: '3',
    },
    {
        id: 'e1-4',
        source: '1',
        target: '4',
    },
];

const Flow = () => {
    const {width: windowWidth, height: windowHeight} = useGetWindowSize();
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((params: Edge<any> | Connection) => setEdges((els) => addEdge(params, els)), []);

    return (
        <div style={{width: windowWidth, height: windowHeight}}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
            >
                <Background/>
                <Controls/>
                <MiniMap/>
            </ReactFlow>
        </div>
    );
};

export default Flow;