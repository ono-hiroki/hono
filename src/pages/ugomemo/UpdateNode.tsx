import React, {useEffect, useState} from 'react';
import ReactFlow, {useNodesState, useEdgesState} from 'reactflow';
import 'reactflow/dist/style.css';

import {useGetWindowSize} from "../../hooks/useGetWindowSize";

const initialNodes = [
    {id: '1', data: {label: '-'}, position: {x: 100, y: 100}},
    {id: '2', data: {label: 'Node 2'}, position: {x: 100, y: 200}, style: {backgroundColor: '#eee000'}, hidden: false},
];

const initialEdges = [{id: 'e1-2', source: '1', target: '2'}];
const defaultViewport = {x: 0, y: 0, zoom: 1.5};

const UpdateNode = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const [nodeName, setNodeName] = useState('Node 1');
    const [nodeBg, setNodeBg] = useState('#eee');
    const [nodeHidden, setNodeHidden] = useState(false);

    useEffect(() => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === '1') {
                    // ここで新しいオブジェクトを作成することが重要です
                    // react flowに変更を通知するために
                    node.data = {
                        ...node.data,
                        label: nodeName,
                    };
                }
                return node;
            })
        );
    }, [nodeName, setNodes]);

    useEffect(() => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === '1') {
                    node.style = {...node.style, backgroundColor: nodeBg};
                }
                return node;
            })
        );
    }, [nodeBg, setNodes]);

    useEffect(() => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === '1') {
                    // when you update a simple type you can just update the value
                    node.hidden = nodeHidden;
                }
                return node;
            })
        );
        setEdges((eds) =>
            eds.map((edge) => {
                if (edge.id === 'e1-2') {
                    edge.hidden = nodeHidden;
                }
                return edge;
            })
        );
    }, [nodeHidden, setNodes, setEdges]);

    const {width: windowWidth, height: windowHeight} = useGetWindowSize();
    console.log(nodes)

    return (
        <div style={{height: windowHeight, width: windowWidth}}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                defaultViewport={defaultViewport}
                minZoom={0.2}
                maxZoom={4}
                attributionPosition="bottom-left"
            >
                <div className="updatenode__controls">
                    <label>label:</label>
                    <input value={nodeName} onChange={(evt) => setNodeName(evt.target.value)}/>

                    <label className="updatenode__bglabel">background:</label>
                    <input value={nodeBg} onChange={(evt) => setNodeBg(evt.target.value)}/>

                    <div className="updatenode__checkboxwrapper">
                        <label>hidden:</label>
                        <input
                            type="checkbox"
                            checked={nodeHidden}
                            onChange={(evt) => setNodeHidden(evt.target.checked)}
                        />
                    </div>
                </div>
            </ReactFlow>
            <style jsx global>{Style}</style>
        </div>
    );
};

export default UpdateNode;
const Style = `
.updatenode__controls {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 4;
  font-size: 12px;
}

.updatenode__controls label {
  display: block;
}

.updatenode__bglabel {
  margin-top: 10px;
}

.updatenode__checkboxwrapper {
  margin-top: 10px;
  display: flex;
  align-items: center;

`
