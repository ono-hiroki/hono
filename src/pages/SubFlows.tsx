import {useCallback, useState} from 'react';
import ReactFlow, {addEdge, applyEdgeChanges, applyNodeChanges, Background, Connection, Edge,
    EdgeChange,
    NodeChange
} from 'reactflow';
import 'reactflow/dist/style.css';
import {useGetWindowSize} from "../hooks/useGetWindowSize";


const initialNodes = [
    {
        id: 'A',
        type: 'group',
        data: {label: null},
        position: {x: 0, y: 0},
        style: {
            width: 170,
            height: 140,
        },
    },
    {
        id: 'B',
        type: 'input',
        data: {label: 'child node 1'},
        position: {x: 10, y: 10},
        parentNode: 'A',
        extent: 'parent',
    },
    {
        id: 'C',
        data: {label: 'child node 2'},
        position: {x: 10, y: 90},
        parentNode: 'A',
        extent: 'parent',
    },
];
const initialEdges = [{id: 'b-c', source: 'B', target: 'C'}];

const rfStyle = {
    backgroundColor: '#D0C0F7',
};

function Flow() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        // @ts-ignore
        (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );
    const onEdgesChange = useCallback(
        // @ts-ignore
        (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );
    const onConnect = useCallback(
        // @ts-ignore
        (connection: Edge<any> | Connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
    );
    const {height: windowHeight, width: windowWidth} = useGetWindowSize()

    return (
        <div style={{height: windowHeight, width: windowWidth}}>
            <ReactFlow
                // @ts-ignore
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
                style={rfStyle}
                attributionPosition="top-right"
            >
                <Background/>
            </ReactFlow>
        </div>
    );
}

export default Flow;