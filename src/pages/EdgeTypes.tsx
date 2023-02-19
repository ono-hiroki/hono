import React, {useCallback} from 'react';
import ReactFlow, {useNodesState, useEdgesState, addEdge, Controls, Background, Connection, Edge} from 'reactflow';
import 'reactflow/dist/style.css';

import {getNodesAndEdges} from 'src/components/EdgeTypes/utils';
import {useGetWindowSize} from "../hooks/useGetWindowSize";

const {nodes: initialNodes, edges: initialEdges} = getNodesAndEdges();

const EdgeTypesFlow = () => {
    const {width: windowWidth, height: windowHeight} = useGetWindowSize();
    // @ts-ignore
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback((params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds)), []);

    return (
        <div style={{width: windowWidth, height: windowHeight}}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
                minZoom={0.2}
            >
                <Controls/>
                <Background/>
            </ReactFlow>
        </div>
    );
};

export default EdgeTypesFlow;
