// ContextualZoom
import React, { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MiniMap, Controls, Connection, Edge} from 'reactflow';

import ZoomNode from 'src/components/ContextualZoom/ZoomNode';

import 'reactflow/dist/style.css';
import {useGetWindowSize} from "../../hooks/useGetWindowSize";

const snapGrid = [20, 20];
const nodeTypes = {
    zoom: ZoomNode,
};

const initialNodes = [
    {
        id: '1',
        type: 'zoom',
        data: {
            content: <>Zoom to toggle content and placeholder<br/> トグルコンテンツとプレースホルダーをズーム</>,
        },
        position: {x: 0, y: 50},
    },
    {
        id: '2',
        type: 'zoom',
        data: {content: <>this is a node with some lines of text in it. <br/>これはテキストのいくつかの行を持つノードです。</>},
        position: {x: 300, y: 50},
    },
    {
        id: '3',
        type: 'zoom',
        data: {content: <>this is another node with some more text.<br/>これはもう少しテキストがある別のノードです。</>},
        position: {x: 650, y: 50},
    },
];

const initialEdges = [
    {
        id: 'e1-2',
        source: '1',
        target: '2',
        animated: true,
    },
    {
        id: 'e2-3',
        source: '2',
        target: '3',
        animated: true,
    },
];

const defaultViewport = {x: 0, y: 0, zoom: 1.5};

const ContextualZoomFlow = () => {
    const {width: windowWidth, height: windowHeight} = useGetWindowSize()
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback(
        (params: Edge<any> | Connection) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
        []
    );

    return (
        <div style={{ width: windowWidth, height: windowHeight }}>
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            snapToGrid={true}
            // @ts-ignore
            snapGrid={snapGrid}
            defaultViewport={defaultViewport}
            attributionPosition="top-right"
        >
            <MiniMap />
            <Controls />
        </ReactFlow>
            <style jsx global>{Style}</style>
        </div>
    );
};

export default ContextualZoomFlow;
// ContextualZoom

const Style=`
    .react-flow__node-zoom {
  font-size: 12px;
  background: #fff;
  border: 1px solid #555;
  border-radius: 5px;
  text-align: center;
  width: 150px;
  padding: 10px;
  line-height: 1.2;
}

.react-flow__node-zoom img {
  pointer-events: none;
}

.placeholder div {
  background: #eee;
  width: 100%;
  height: 10px;
  margin-bottom: 4px;
}

.placeholder div:last-child {
  margin-bottom: 0;
}

    `
