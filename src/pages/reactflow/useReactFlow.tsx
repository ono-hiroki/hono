// useReactFlow.tsx
import React, {useCallback} from 'react';
import ReactFlow, {ReactFlowProvider, addEdge, useNodesState, useEdgesState, Connection, Edge} from 'reactflow';
import 'reactflow/dist/style.css';

import Sidebar from 'src/components/useReactFlow/Sidebar.js';
import {useGetWindowSize} from "../../hooks/useGetWindowSize";

const initialNodes = [
    {
        id: '1',
        type: 'input',
        data: {label: 'Node 1'},
        position: {x: 250, y: 5},
    },
    {id: '2', data: {label: 'Node 2'}, position: {x: 100, y: 100}},
    {id: '3', data: {label: 'Node 3'}, position: {x: 400, y: 100}},
    {id: '4', data: {label: 'Node 4'}, position: {x: 400, y: 200}},
];

const initialEdges = [
    {
        id: 'e1-2',
        source: '1',
        target: '2',
    },
    {id: 'e1-3', source: '1', target: '3'},
];

const ProviderFlow = () => {
    const {width: windowWidth, height: windowHeight} = useGetWindowSize()
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback((params: Edge<any> | Connection) => setEdges((els) => addEdge(params, els)), []);

    return (
        <div className="zoompanflow" style={{width: windowWidth, height: windowHeight}}>
            <ReactFlowProvider>
                <div className="reactflow-wrapper">
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        fitView
                    />
                </div>
                <Sidebar/>
                <style jsx global>{Style}</style>
            </ReactFlowProvider>
        </div>
    );
};

export default ProviderFlow;


const Style = `
.zoompanflow {
  flex-direction: column;
  display: flex;
  flex-grow: 1;
  height: 100%;
}

.zoompanflow aside {
  border-left: 1px solid #eee;
  padding: 15px 10px;
  font-size: 12px;
  background: #fff;
}

.zoompanflow aside .description {
  margin-bottom: 10px;
}

.zoompanflow aside button {
  display: block;
  margin-bottom: 5px;
}

.zoompanflow .reactflow-wrapper {
  flex-grow: 1;
}

@media screen and (min-width: 768px) {
  .zoompanflow {
    flex-direction: row;
  }

  .zoompanflow aside {
    width: 20%;
    max-width: 250px;
  }
}
`
