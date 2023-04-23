import { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, Position, addEdge, Edge, Connection} from 'reactflow';
import 'reactflow/dist/style.css';

import {useGetWindowSize} from "../../hooks/useGetWindowSize";

const initialNodes = [
    {
        id: '1',
        data: {label: 'Node 1'},
        position: {x: 100, y: 100},
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },
    {
        id: '2',
        data: {label: 'Node 2'},
        position: {x: 300, y: 100},
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
    },
];

const initialEdges: Edge<any>[] = [];

const TouchDeviceFlow = () => {
    const {width: windowWidth, height: windowHeight} = useGetWindowSize()
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback((connection: Edge<any> | Connection) =>
                setEdges((eds) => addEdge(connection, eds)), []);

    return (
        <div style={{width: windowWidth, height: windowHeight}}>
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onConnect={onConnect}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            className="touchdevice-flow"
            fitView
            connectOnClick={true} // デフォルトはtrue
        />
            <style jsx global>{Style}</style>
        </div>
    );
};

export default TouchDeviceFlow;
// TouchDevice.tsx

const Style = `
   .touchdevice-flow .react-flow__handle {
  width: 20px;
  height: 20px;
  border-radius: 3px;
  background-color: #9f7aea;
}

.touchdevice-flow .react-flow__handle.connecting {
  animation: bounce 1600ms infinite ease-out;
}

@keyframes bounce {
  0% {
    transform: translate(0, -50%) scale(1);
  }
  50% {
    transform: translate(0, -50%) scale(1.1);
  }
}
`
