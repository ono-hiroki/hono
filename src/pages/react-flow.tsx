import {useGetWindowSize} from "../hooks/useGetWindowSize";
import {useState, useCallback} from 'react';
import ReactFlow, {Controls, Background, applyNodeChanges, applyEdgeChanges, addEdge, EdgeChange, NodeChange, Connection, Edge} from 'reactflow';
import 'reactflow/dist/style.css';
import {FitViewOptions} from 'react-flow-renderer'


const fitViewOptions: FitViewOptions = {
    padding: 0.2,
}

const initialNodes = [
    {
        id: '1',
        data: {label: 'Hello'},
        position: {x: 0, y: 0},
        type: 'input',
    },
    {
        id: '2',
        data: {label: 'World'},
        position: {x: 100, y: 100},
    },
];

// const initialEdges = [{id: '1-2', source: '1', target: '2', label: 'to the', type: 'step'}];
const initialEdges: any[] | (() => any[]) = [];

const ReactFlowPage = () => {
    const [nodes, setNodes] = useState(initialNodes)
    const [edges, setEdges] = useState(initialEdges)

    const onNodesChange = useCallback(
        (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
        []
    );
    const onEdgesChange = useCallback(
        // @ts-ignore
        (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        []
    );

    // @ts-ignore
    const onConnect = useCallback((params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds)), []);

    const {height: windowHeight, width: windowWidth} = useGetWindowSize()
    return (
        <div style={{height: windowHeight, width: windowWidth}}>
            {windowWidth > 0 && windowHeight > 0 ? (

                <ReactFlow
                    nodes={nodes}
                    onNodesChange={onNodesChange}
                    edges={edges}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                >
                    <Background />
                    <Controls />
                </ReactFlow>

            ) : undefined}


        </div>
    )
}

export default ReactFlowPage