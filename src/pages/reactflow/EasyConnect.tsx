// EasyConnect.tsx
import React, {useCallback} from 'react';

import ReactFlow, {addEdge, useNodesState, useEdgesState, MarkerType, Connection, Edge} from 'reactflow';

import CustomNode from 'src/components/EasyConnect/CustomNode';
import FloatingEdge from 'src/components/EasyConnect/FloatingEdge';
import CustomConnectionLine from 'src/components/EasyConnect/CustomConnectionLine';

import 'reactflow/dist/style.css';
import {useGetWindowSize} from "../../hooks/useGetWindowSize";

const initialNodes = [
    {
        id: '1',
        type: 'custom',
        position: {x: 0, y: 0},
    },
    {
        id: '2',
        type: 'custom',
        position: {x: 250, y: 320},
    },
    {
        id: '3',
        type: 'custom',
        position: {x: 40, y: 300},
    },
    {
        id: '4',
        type: 'custom',
        position: {x: 300, y: 0},
    },
];

const initialEdges: Edge<any>[] = [];

const connectionLineStyle = {
    strokeWidth: 3,
    stroke: 'black',
};

const nodeTypes = {
    custom: CustomNode,
};

const edgeTypes = {
    floating: FloatingEdge,
};

const defaultEdgeOptions = {
    style: {strokeWidth: 3, stroke: 'black'},
    type: 'floating',
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: 'black',
    },
};

const EasyConnectExample = () => {
    const {width: windowWidth, height: windowHeight} = useGetWindowSize()
    // @ts-ignore
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    return (
        <div style={{height: windowHeight, width: windowWidth}}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
                nodeTypes={nodeTypes}
                // @ts-ignore
                edgeTypes={edgeTypes}
                defaultEdgeOptions={defaultEdgeOptions}
                // @ts-ignore
                connectionLineComponent={CustomConnectionLine}
                connectionLineStyle={connectionLineStyle}
            />
            <style jsx global>{Style}</style>
        </div>
    );
};

export default EasyConnectExample;

const Style = `
.customNodeBody {
  width: 150px;
  height: 80px;
  border: 3px solid black;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

.customNode:before {
  content: '';
  position: absolute;
  top: -10px;
  left: 50%;
  height: 20px;
  width: 40px;
  transform: translate(-50%, 0);
  background: #d6d5e6;
  z-index: 1000;
  line-height: 1;
  border-radius: 4px;
  color: #fff;
  font-size: 9px;
  border: 2px solid #222138;
}

div.sourceHandle {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0;
  transform: none;
  border: none;
  opacity: 0;
}

div.targetHandle {
  width: 100%;
  height: 100%;
  background: blue;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0;
  transform: none;
  border: none;
  opacity: 0;
}
`
