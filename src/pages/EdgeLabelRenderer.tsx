import React, {useCallback} from 'react';
import ReactFlow, {
    Controls,
    Background,
    addEdge,
    Connection,
    Edge,
    EdgeTypes,
    Node,
    useEdgesState,
    useNodesState,
} from 'reactflow';
import 'reactflow/dist/style.css';

import CustomEdge from 'src/components/EdgeLabelRenderer/CustomEdge';
import {useGetWindowSize} from "../hooks/useGetWindowSize";

const initialNodes: Node[] = [
    {
        id: '1',
        type: 'input',
        data: {label: 'Node 1'},
        position: {x: 0, y: 0},
    },
    {id: '2', data: {label: 'Node 2'}, position: {x: 0, y: 400}},

    {id: '3', data: {label: 'Node 3'}, position: {x: 400, y: 400}},
];

const initialEdges: Edge[] = [
    {
        id: 'e1-2',
        source: '1',
        target: '2',
        data: {
            text: 'edge label',
        },
        type: 'custom',
    },
    {
        id: 'e1-3',
        source: '1',
        target: '3',
        data: {
            text: 'another one',
        },
        type: 'custom',
    },
];

const edgeTypes: EdgeTypes = {
    custom: CustomEdge,
};

const EdgesFlow = () => {
    const {width: windowWidth, height: windowHeight} = useGetWindowSize()
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback(
        (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    return (
        <div style={{width: windowWidth, height: windowHeight}}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                edgeTypes={edgeTypes}
            >
                <Controls/>
                <Background/>
            </ReactFlow>
        </div>
    );
};

export default EdgesFlow;
