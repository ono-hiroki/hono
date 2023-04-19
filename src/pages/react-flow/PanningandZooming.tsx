import {useCallback} from 'react';
import ReactFlow, {addEdge, Connection, Edge, useEdgesState, useNodesState} from 'reactflow';
import 'reactflow/dist/style.css';
import {useGetWindowSize} from "../../hooks/useGetWindowSize";

const initialNodes = [
    {
        id: '1',
        data: {label: 'Node 1'},
        position: {x: 150, y: 0},
    },
    {
        id: '2',
        data: {label: 'Node 2'},
        position: {x: 0, y: 150},
    },
    {
        id: '3',
        data: {label: 'Node 3'},
        position: {x: 300, y: 150},
    },
];
const initialEdges = [
    {id: 'e1-2', source: '1', target: '2'},
    {id: 'e1-3', source: '1', target: '3'},
];

function Flow() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (connection: Edge<any> | Connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
    );
    const {height: windowHeight, width: windowWidth} = useGetWindowSize()

    return (
        <div style={{height: windowHeight, width: windowWidth}}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                panOnScroll
                selectionOnDrag
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
            />
        </div>
    );
}

export default Flow;

// PanningandZooming
