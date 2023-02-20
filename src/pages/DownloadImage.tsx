// DownloadImage.tsx
import React, { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, Controls, Background, Connection, Edge} from 'reactflow';

import DownloadButton from 'src/components/DownloadImage/DownloadButton';
import CustomNode from 'src/components/DownloadImage/CustomNode';
import {initialNodes, initialEdges} from 'src/components/DownloadImage/nodes-edges';

import 'reactflow/dist/style.css';
import {useGetWindowSize} from "../hooks/useGetWindowSize";

const connectionLineStyle = {stroke: '#ffff'};
const snapGrid = [25, 25];
const nodeTypes = {
    custom: CustomNode,
};

const defaultEdgeOptions = {
    animated: true,
    type: 'smoothstep',
};

const defaultViewport = {x: 0, y: 0, zoom: 1.5};

const CustomNodeFlow = () => {
    // @ts-ignore
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const {width: windowWidth, height: windowHeight} = useGetWindowSize()

    const onConnect = useCallback((params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds)), []);

    return (
        <div className="wrapper" id="download-image" style={{width: windowWidth, height: windowHeight}}>
            <DownloadButton />
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                connectionLineStyle={connectionLineStyle}
                // @ts-ignore
                connectionLineType="smoothstep"
                snapToGrid={true}
                // @ts-ignore
                snapGrid={snapGrid}
                defaultViewport={defaultViewport}
                fitView
                attributionPosition="bottom-left"
                defaultEdgeOptions={defaultEdgeOptions}
            >
                <Controls />
                <Background gap={25} />
            </ReactFlow>
            <style jsx global>{Style}</style>
        </div>
    );
};

export default CustomNodeFlow;
// DownloadImage.tsx

const Style = `
    #download-image .react-flow {
  background: #1a365d;
}

#download-image .react-flow__node {
  width: 50px;
  height: 50px;
  color: white;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: white;
}

#download-image .react-flow__node-custom {
  font-size: 12px;
  background: #eee;
  border: 1px solid #555;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
}

#download-image .react-flow__node-custom .react-flow__handle-right {
  transform: none;
}

#download-image.wrapper {
  position: relative;
  height: 100%;
}

#download-image .download-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  border: 1px solid #eee;
  background: #ebf8ff;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 700;
  cursor: pointer;
}

#download-image .download-btn:hover {
  opacity: 0.9;
}
`;