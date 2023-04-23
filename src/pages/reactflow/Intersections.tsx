import React, {useCallback, MouseEvent} from 'react';
import ReactFlow, {
    Background,
    Controls,
    ReactFlowProvider,
    Node,
    Edge,
    useReactFlow,
    useNodesState,
} from 'reactflow';
import 'reactflow/dist/style.css';

import {useGetWindowSize} from "../../hooks/useGetWindowSize";

const initialNodes: Node[] = [
    {
        id: '1',
        data: {label: 'Node 1'},
        position: {x: 0, y: 0},
        style: {
            width: 200,
            height: 100,
        },
    },
    {
        id: '2',
        data: {label: 'Node 2'},
        position: {x: 0, y: 150},
    },
    {
        id: '3',
        data: {label: 'Node 3'},
        position: {x: 250, y: 0},
    },
    {
        id: '4',
        data: {label: 'Node'},
        position: {x: 350, y: 150},
        style: {
            width: 50,
            height: 50,
        },
    },
];

const initialEdges: Edge[] = [];

const BasicFlow = () => {
    const {width: windowWidth, height: windowHeight} = useGetWindowSize();
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const {getIntersectingNodes} = useReactFlow();

    const onNodeDrag = useCallback((_: MouseEvent, node: Node) => {
        const intersections = getIntersectingNodes(node).map((n) => n.id);

        setNodes((ns) =>
            ns.map((n) => ({
                ...n,
                className: intersections.includes(n.id) ? 'highlight' : '',
            }))
        );
    }, []);

    return (
        <div style={{width: windowWidth, height: windowHeight}}>
            <ReactFlow
                nodes={nodes}
                edges={initialEdges}
                onNodesChange={onNodesChange}
                onNodeDrag={onNodeDrag}
                className="intersection-flow"
                minZoom={0.2}
                maxZoom={4}
                fitView
                selectNodesOnDrag={false}
            >
                <Background/>
                <Controls/>
            </ReactFlow>
            <style jsx global>{Style}</style>
        </div>
    );
};

export default function App() {
    return (
        <ReactFlowProvider>
            <BasicFlow/>
        </ReactFlowProvider>
    );
}


const Style = `
.react-flow__node.highlight {
  background-color: #ff0072;
  color: white;
}

.intersection-flow .react-flow__node {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  border-radius: 1px;
  border-width: 2px;
  box-shadow: 6px 6px 0 1px rgba(0, 0, 0, 0.7);
}

.intersection-flow .react-flow__node.selected,
.intersection-flow .react-flow__node:hover,
.intersection-flow .react-flow__node:focus {
  box-shadow: 6px 6px 0 1px rgba(0, 0, 0, 0.7);
  background-color: #eee;
}

.intersection-flow .react-flow__handle {
  display: none;
}
`
