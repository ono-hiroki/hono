// CustomNodes.tsx
import { useCallback, useState } from 'react';
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges, Connection, Edge,
    EdgeChange,
    NodeChange
} from 'reactflow';
import 'reactflow/dist/style.css';
import ColorSelectorNode from 'src/components/reactflow/CustomNodes2/ColorSelectorNode';
import TextUpdaterNode from 'src/components/reactflow/react-flow/TextUpdaterNode';
import {useGetWindowSize} from "../../hooks/useGetWindowSize";

const rfStyle = {
    backgroundColor: '#B8CEFF',
};

const initBgColor = '#1A192B';

const onChange = (event: { target: { value: string }; }) => {
    // setNodes((nds) =>
    //     nds.map((node) => {
    //         if (node.id !== '2') {
    //             return node;
    //         }
    //
    //         const color = event.target.value;
    //
    //         setBgColor(color);
    //
    //         return {
    //             ...node,
    //             data: {
    //                 ...node.data,
    //                 color,
    //             },
    //         };
    //     })
    // );
    console.log('onChange', event.target.value)
};


const initialNodes = [
    {
        id: 'node-1',
        type: 'textUpdater',
        position: {x: 0, y: 0},
        data: {value: 123}},
    {
        id: 'node-2',
        type: 'output', // typeはnodeTypesで定義したものと一致する必要がある
        // typeの種類は、output, input, source, target, default 違いは以下の通り
        targetPosition: 'top',
        position: {x: 0, y: 200},
        data: {label: 'node 2'},
    },
    {
        id: 'node-3',
        type: 'output',
        targetPosition: 'top',
        position: {x: 200, y: 200},
        data: {label: 'node 3'},
    },
    {
        id: '1',
        type: 'selectorNode',
        data: {onChange: onChange, color: initBgColor},
        style: {border: '1px solid #777', padding: 10},
        position: {x: 300, y: 50},
    },
];

const initialEdges = [
    {id: 'edge-1', source: 'node-1', target: 'node-2', sourceHandle: 'a'}, // sourceHandleはsourceが2つ以上ある場合に指定する
    {id: 'edge-2', source: 'node-1', target: 'node-3', sourceHandle: 'b'},
];

// 再レンダリングを防ぐためにコンポーネントの外でnodeTypesを定義する
// コンポーネント内でuseMemoを使用することもできる
const nodeTypes = {
    textUpdater: TextUpdaterNode,
    selectorNode: ColorSelectorNode,
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
                nodeTypes={nodeTypes}
                fitView
                style={rfStyle}
            />
            <style jsx global>{Styles}</style>
        </div>
    );
}

export default Flow;
const Styles = `
            .text-updater-node {
                height: 50px;
                border: 1px solid #eee;
                padding: 5px;
                border-radius: 5px;
                background: white;
            }
            
            .text-updater-node label {
                display: block;
                color: #777;
                font-size: 12px;
            }`
