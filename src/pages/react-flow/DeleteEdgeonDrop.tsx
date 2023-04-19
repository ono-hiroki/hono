// DeleteEdgeonDrop.tsx
import React, {useCallback, useRef} from 'react';
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
        position: {x: 350, y: 200},
    },
];

const initialEdges = [{id: 'e1-2', source: '1', target: '2', label: 'updatable edge'}];

const DeleteEdgeDrop = () => {
    const {width: windowWidth, height: windowHeight} = useGetWindowSize();
    const edgeUpdateSuccessful = useRef(true);
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback((params: Edge<any> | Connection) => setEdges((els) => addEdge(params, els)), []);

    const onEdgeUpdateStart = useCallback(() => {
        edgeUpdateSuccessful.current = false;
    }, []);

    const onEdgeUpdate = useCallback((oldEdge: Edge<any>, newConnection: Connection) => {
        // エッジを持った時点(onEdgeUpdateStart)で、必ずfalseになるので他のノードにつなぐ(更新)ときは、trueに戻す
        edgeUpdateSuccessful.current = true;
        setEdges((els) => updateEdge(oldEdge, newConnection, els));
    }, []);

    const onEdgeUpdateEnd = useCallback((_: any, edge: { id: string; }) => {
        if (!edgeUpdateSuccessful.current) { // edgeUpdateSuccessful が false の場合は、エッジを削除する
            setEdges((eds) => eds.filter((e) => e.id !== edge.id));
        }

        edgeUpdateSuccessful.current = true;
    }, []);

    return (
        <div style={{width: windowWidth, height: windowHeight}}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                snapToGrid
                onEdgeUpdate={onEdgeUpdate}
                onEdgeUpdateStart={onEdgeUpdateStart}
                onEdgeUpdateEnd={onEdgeUpdateEnd}
                onConnect={onConnect}
                fitView
                attributionPosition="top-right"
            >
                <Controls/>
            </ReactFlow>
        </div>
    );
};

export default DeleteEdgeDrop;
