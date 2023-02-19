import React, { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, Handle, Position, Connection, Edge} from 'reactflow';
import 'reactflow/dist/style.css';

import {useGetWindowSize} from "../hooks/useGetWindowSize";

const initialNodes = [
    {id: '0', type: 'custominput', position: {x: 0, y: 150}},
    {id: 'A', type: 'customnode', position: {x: 250, y: 0}},
    {id: 'B', type: 'customnode', position: {x: 250, y: 150}},
    {id: 'C', type: 'customnode', position: {x: 250, y: 300}},
];

const isValidConnection = (connection: { target: string; }) => connection.target === 'B';
// @ts-ignore
const onConnectStart = (_, {nodeId, handleType}) =>
    console.log('on connect start', {nodeId, handleType});
const onConnectEnd = (event: any) => console.log('on connect end', event);

const CustomInput = () => (
    <>
        <div>Only connectable with B</div>
        {/* @ts-ignore */}
        <Handle type="source" position={Position.Right} isValidConnection={isValidConnection}/>
    </>
);

// @ts-ignore
const CustomNode = ({id}) => (
    <>
        {/* @ts-ignore */}
        <Handle type="target" position={Position.Left} isValidConnection={isValidConnection}/>
        <div>{id}</div>
        {/* @ts-ignore */}
        <Handle type="source" position={Position.Right} isValidConnection={isValidConnection}/>
    </>
);

const nodeTypes = {
    custominput: CustomInput,
    customnode: CustomNode,
};

const HorizontalFlow = () => {
    const {width, height} = useGetWindowSize();
    // @ts-ignore
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    const onConnect = useCallback((params: Edge<any> | Connection) => setEdges((els) => addEdge(params, els)), []);

    return (
        <div style={{ width: width, height: height }}>
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            selectNodesOnDrag={false}
            className="validationflow"
            nodeTypes={nodeTypes}
            onConnectStart={onConnectStart}
            onConnectEnd={onConnectEnd}
            fitView
            attributionPosition="bottom-left"
        />
            <style jsx global>{Style}</style>
        </div>

    );
};

export default HorizontalFlow;
// Validation

const Style= `
    .validationflow .react-flow__node {
  width: 150px;
  border-radius: 5px;
  padding: 10px;
  color: #555;
  border: 1px solid #ddd;
  text-align: center;
  font-size: 12px;
}

.validationflow .react-flow__node-customnode {
  background: #e6e6e9;
  border: 1px solid #ddd;
}

.react-flow__node-custominput .react-flow__handle {
  background: #e6e6e9;
}

.validationflow .react-flow__node-custominput {
  background: #fff;

}

.validationflow .react-flow__handle-connecting {
  background: #ff6060;
}

.validationflow .react-flow__handle-valid {
  background: #55dd99;
}
`