import React from 'react';
import ReactFlow, {useNodesState, useEdgesState, Background} from 'reactflow';
import 'reactflow/dist/style.css';

import DragHandleNode from 'src/components/DragHandle/DragHandleNode';
import {useGetWindowSize} from "../hooks/useGetWindowSize";

const nodeTypes = {
    dragHandleNode: DragHandleNode,
};

const initialNodes = [
    {
        id: '2',
        type: 'dragHandleNode',
        dragHandle: '.custom-drag-handle',
        style: {border: '1px solid #ddd', padding: '20px 40px'},
        position: {x: 200, y: 200},
    },
];

const DragHandleFlow = () => {
    const {width: windowWidth, height: windowHeight} = useGetWindowSize()
    // @ts-ignore
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    return (
        <div style={{height: windowHeight, width: windowWidth}}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
            >
                <Background/>
            </ReactFlow>
        </div>
    );
};

export default DragHandleFlow;
