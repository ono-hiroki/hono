// UpdatableEdge.tsx
import React, {useCallback} from 'react';
import ReactFlow, {useNodesState, useEdgesState, Controls, updateEdge, addEdge, Connection, Edge} from 'reactflow';
import 'reactflow/dist/style.css';
import {useGetWindowSize} from "../../hooks/useGetWindowSize";

const initialNodes = [
    {
        id: '1',
        type: 'input',
        data: {label: 'Node A'},
        position: {x: 250, y: 0},
    },
    {
        id: '2',
        data: {label: 'Node B'},
        position: {x: 100, y: 200},
    },
    {
        id: '3',
        data: {label: 'Node C'},
        position: {x: 400, y: 200},
    },
];

const initialEdges = [{id: 'e1-2', source: '1', target: '2', label: 'これを選択してから、エッジを移動するとエッジの更新(移動)ができる' }];

const UpdatableEdge = () => {
    const {width: windowWidth, height: windowHeight} = useGetWindowSize();
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    // 他のソースまたはターゲットにエッジの終端をドラッグした後に呼び出されます
    const onEdgeUpdate = useCallback(
        (oldEdge: Edge<any>, newConnection: Connection) => setEdges((els) => updateEdge(oldEdge, newConnection, els)),
        []
    );
    const onConnect = useCallback((params: Edge<any> | Connection) => setEdges((els) => addEdge(params, els)), []);

    return (
        <div style={{width: windowWidth, height: windowHeight}}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                snapToGrid
                onEdgeUpdate={onEdgeUpdate}
                onConnect={onConnect}
                fitView
                attributionPosition="top-right"
            >
                <Controls/>
            </ReactFlow>
        </div>
    );
};

export default UpdatableEdge;
