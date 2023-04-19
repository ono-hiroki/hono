import ReactFlow, {ReactFlowProvider, useReactFlow} from 'reactflow';
import 'reactflow/dist/style.css';
import {useGetWindowSize} from "../../hooks/useGetWindowSize";
import {useCallback} from "react";
import styled from 'styled-components';

const ButtonAdd = styled.button`
    position: absolute;
    z-index: 1000;
    top: 10px;
    left: 10px;
`

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

let nodeId = 0;

function Flow() {
    const reactFlowInstance = useReactFlow();

    const onClick = useCallback(() => {
        const id = `${++nodeId}`;
        const newNode = {
            id,
            position: {
                x: Math.random() * 500,
                y: Math.random() * 500,
            },
            data: {
                label: `Node ${id}`,
            },
        };
        reactFlowInstance.addNodes(newNode);
    }, []);
    const {height: windowHeight, width: windowWidth} = useGetWindowSize()

    return (
        <>


            <div style={{height: windowHeight, width: windowWidth}}>
                <ButtonAdd onClick={onClick} className="btn-add">
                    add node
                </ButtonAdd>
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
        </>
    );
}

export default function UncontrolledFlowPage() {
    return (
        <ReactFlowProvider>
            <Flow/>
        </ReactFlowProvider>
    );
}
