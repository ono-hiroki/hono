import React, { useCallback } from 'react';
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

import ButtonEdge from '../components/EdgeWithButton/ButtonEdge';
import {useGetWindowSize} from "../hooks/useGetWindowSize";

const initialNodes = [
    {
        id: 'ewb-1',
        type: 'input',
        data: {label: 'Input 1'},
        position: {x: 250, y: 0},
    },
    {id: 'ewb-2', data: {label: 'Node 2'}, position: {x: 250, y: 300}},
];

const initialEdges = [
    {
        id: 'edge-1-2',
        source: 'ewb-1',
        target: 'ewb-2',
        type: 'buttonedge',
    },
];

const edgeTypes = {
    buttonedge: ButtonEdge,
};

const EdgeWithButtonFlow = () => {
    const {width: windowWidth, height: windowHeight} = useGetWindowSize();
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback(
        (params: Edge<any> | Connection) => setEdges((eds) => addEdge({ ...params, type: 'buttonedge' }, eds)),
        []
    );

    return (
        <div style={{ width: windowWidth, height: windowHeight }}>
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            snapToGrid={true}
            // @ts-ignore
            edgeTypes={edgeTypes}
            fitView
            attributionPosition="top-right"
        >
            <MiniMap />
            <Controls />
            <Background />
        </ReactFlow>
            <style jsx global>{Style}</style>
        </div>
    );
};

export default EdgeWithButtonFlow;

const Style = `
.edgebutton {
  width: 20px;
  height: 20px;
  background: #eee;
  border: 1px solid #fff;
  cursor: pointer;
  border-radius: 50%;
  font-size: 12px;
  line-height: 1;
}

.edgebutton:hover {
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.08);
}

.edgebutton-foreignobject div {
  background: transparent;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
}

`