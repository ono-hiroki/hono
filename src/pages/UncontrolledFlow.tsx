import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';
import {useGetWindowSize} from "../hooks/useGetWindowSize";

const defaultNodes = [
    {
        id: 'a',
        type: 'input',
        data: {label: 'Node A'},
        position: {x: 250, y: 25},
    },

    {
        id: 'b',
        data: {label: 'Node B'},
        position: {x: 100, y: 125},
    },
    {
        id: 'c',
        type: 'output',
        data: {label: 'Node C'},
        position: {x: 250, y: 250},
    },
];
const defaultEdges = [{id: 'ea-b', source: 'a', target: 'b'}];

const edgeOptions = {
    animated: true,
    style: {
        stroke: 'white',
    },
};

const connectionLineStyle = {stroke: 'white'};


export default function Flow() {
    const {height: windowHeight, width: windowWidth} = useGetWindowSize()

    return (
        <div style={{height: windowHeight, width: windowWidth}}>
            <ReactFlow
                defaultNodes={defaultNodes}
                defaultEdges={defaultEdges}
                defaultEdgeOptions={edgeOptions}
                fitView
                style={{
                    backgroundColor: '#D3D2E5',
                }}
                connectionLineStyle={connectionLineStyle}
            />
        </div>
    );
}
