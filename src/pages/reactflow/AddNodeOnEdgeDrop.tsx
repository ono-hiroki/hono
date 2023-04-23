import React, { useCallback, useRef } from 'react';
import ReactFlow, {
    useNodesState,
    useEdgesState,
    addEdge,
    useReactFlow,
    ReactFlowProvider,
    Connection,
    Edge,
} from 'reactflow';
import 'reactflow/dist/style.css';

import {useGetWindowSize} from "../../hooks/useGetWindowSize";

const initialNodes = [
    {
        id: '0',
        type: 'input',
        data: {label: 'Node'},
        position: {x: 0, y: 50},
    },
];

let id = 1;
const getId = () => `${id++}`;

const fitViewOptions = {
    padding: 3,
};

const AddNodeOnEdgeDrop = () => {
    const {width: windowWidth, height: windowHeight} = useGetWindowSize()
    const reactFlowWrapper = useRef(null);
    const connectingNodeId = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const {project} = useReactFlow();
    const onConnect = useCallback((params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds)), []);

    // @ts-ignore
    const onConnectStart = useCallback((_, { nodeId }) => {
        connectingNodeId.current = nodeId;
    }, []);

    const onConnectEnd = useCallback(
        (event: { target: { classList: { contains: (arg0: string) => any; }; }; clientX: number; clientY: number; }) => {
            const targetIsPane = event.target.classList.contains('react-flow__pane');

            if (targetIsPane) {
                // we need to remove the wrapper bounds, in order to get the correct position
                // @ts-ignore
                const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
                const id = getId();
                const newNode = {
                    id,
                    // we are removing the half of the node width (75) to center the new node
                    position: project({ x: event.clientX - left - 75, y: event.clientY - top }),
                    data: { label: `Node ${id}` },
                };

                setNodes((nds) => nds.concat(newNode));
                // @ts-ignore
                setEdges((eds) => eds.concat({ id, source: connectingNodeId.current, target: id }));
            }
        },
        [project]
    );

    return (
        <div className="wrapper" ref={reactFlowWrapper} style={{width: windowWidth, height: windowHeight}}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onConnectStart={onConnectStart}
                // @ts-ignore
                onConnectEnd={onConnectEnd}
                fitView
                fitViewOptions={fitViewOptions}
            />
            <style jsx global>{Style}</style>
        </div>
    );
};

// eslint-disable-next-line react/display-name
export default () => (
    <ReactFlowProvider>
        <AddNodeOnEdgeDrop />
    </ReactFlowProvider>
);

const Style =`
.react-flow .react-flow__handle {
  width: 30px;
  height: 14px;
  border-radius: 3px;
  background-color: #784be8;
}

.react-flow .react-flow__handle-top {
  top: -10px;
}

.react-flow .react-flow__handle-bottom {
  bottom: -10px;
}

.react-flow .react-flow__node {
  height: 40px;
  width: 150px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-width: 2px;
  font-weight: 700;
}

.react-flow .react-flow__edge path,
.react-flow__connectionline path {
  stroke-width: 2;
}

.wrapper {
  flex-grow: 1;
  height: 100%;
}
`

// AddNode
