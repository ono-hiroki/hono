import React, { useCallback } from 'react';
import ReactFlow, {
    addEdge,
    Background,
    useNodesState,
    useEdgesState,
    MarkerType,
    ConnectionMode,
    Connection,
    Edge,
} from 'reactflow';
import 'reactflow/dist/style.css';

import SimpleFloatingEdge from 'src/components/SimpleFloatingEdges/SimpleFloatingEdge';
import CustomNode from 'src/components/SimpleFloatingEdges/CustomNode';
import {useGetWindowSize} from "../hooks/useGetWindowSize";

const nodeTypes = {
    custom: CustomNode,
};

const edgeTypes = {
    floating: SimpleFloatingEdge,
};

const initialNodes = [
    {
        id: '1',
        label: '1',
        position: {x: 0, y: 0},
        data: {label: 'drag me around 😎'},
        type: 'custom',
    },
    {
        id: '2',
        label: '2',
        position: {x: 0, y: 150},
        data: {label: '...or me'},
        type: 'custom',
    },
];

const initialEdges = [
    {
        id: '1-2',
        source: '1',
        target: '2',
        sourceHandle: 'c',
        targetHandle: 'a',
        type: 'floating',
        markerEnd: {type: MarkerType.ArrowClosed},
    },
];

const fitViewOptions = {padding: 4};

const NodeAsHandleFlow = () => {
    const {width, height} = useGetWindowSize();
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params: Edge<any> | Connection) =>
            setEdges((eds) =>
                addEdge({ ...params, type: 'floating', markerEnd: { type: MarkerType.Arrow } }, eds)
            ),
        []
    );

    return (
        <div className="simple-floatingedges" style={{width, height}}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                // @ts-ignore
                edgeTypes={edgeTypes}
                nodeTypes={nodeTypes}
                fitView
                fitViewOptions={fitViewOptions}
                connectionMode={ConnectionMode.Loose}
            >
                <Background />
                <style jsx global>{Style}</style>
            </ReactFlow>
        </div>
    );
};

export default NodeAsHandleFlow;
// SimpleFloatingEdge.tsx
const Style = `
.simple-floatingedges {
  flex-direction: column;
  display: flex;
  flex-grow: 1;
  height: 100%;
}

.simple-floatingedges .react-flow__handle {
  width: 8px;
  height: 8px;
  background-color: #bbb;
}

.simple-floatingedges .react-flow__handle-top {
  top: -15px;
}

.simple-floatingedges .react-flow__handle-bottom {
  bottom: -15px;
}

.simple-floatingedges .react-flow__handle-left {
  left: -15px;
}

.simple-floatingedges .react-flow__handle-right {
  right: -15px;
}

.simple-floatingedges .react-flow__node-custom {
  background: #fff;
  border: 1px solid #1a192b;
  border-radius: 3px;
  color: #222;
  font-size: 12px;
  padding: 10px;
  text-align: center;
  width: 150px;
}

`