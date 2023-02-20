import React, { useCallback } from 'react';
import ReactFlow, {
    ReactFlowProvider,
    useNodesState,
    useEdgesState,
    addEdge,
    Controls,
    Connection,
    Edge,
} from 'reactflow';
import 'reactflow/dist/style.css';

import Sidebar from 'src/components/ReactFlowProvider/Sidebar.js';
import {useGetWindowSize} from "../hooks/useGetWindowSize";

const initialNodes = [
    {
        id: 'provider-1',
        type: 'input',
        data: {label: 'Node 1'},
        position: {x: 250, y: 5},
    },
    {id: 'provider-2', data: {label: 'Node 2'}, position: {x: 100, y: 100}},
    {id: 'provider-3', data: {label: 'Node 3'}, position: {x: 400, y: 100}},
    {id: 'provider-4', data: {label: 'Node 4'}, position: {x: 400, y: 200}},
];

const initialEdges = [
    {
        id: 'provider-e1-2',
        source: 'provider-1',
        target: 'provider-2',
        animated: true,
    },
    {id: 'provider-e1-3', source: 'provider-1', target: 'provider-3'},
];

const ProviderFlow = () => {
    const {width: windowWidth, height: windowHeight} = useGetWindowSize()
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback((params: Edge<any> | Connection) => setEdges((els) => addEdge(params, els)), []);

    return (
        <div className="providerflow" style={{width: windowWidth, height: windowHeight}}>
            <ReactFlowProvider> {/* ReactFlowProviderは必須 なぜなら、useNodesStateやuseEdgesStateはReactFlowProviderの子孫である必要があるから */}
                <div className="reactflow-wrapper">
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        fitView
                    >
                        <Controls />
                    </ReactFlow>
                </div>
                <Sidebar nodes={nodes} setNodes={setNodes} />
            </ReactFlowProvider>
            <style jsx global>{Style}</style>
        </div>
    );
};

export default ProviderFlow;

const Style=`
.providerflow {
  flex-direction: column;
  display: flex;
  flex-grow: 1;
  height: 100%;
}

.providerflow aside {
  border-left: 1px solid #eee;
  padding: 15px 10px;
  font-size: 12px;
  background: #fff;
}

.providerflow aside .description {
  margin-bottom: 10px;
}

.providerflow aside .title {
  font-weight: 700;
  margin-bottom: 5px;
}

.providerflow aside .transform {
  margin-bottom: 20px;
}

.providerflow .reactflow-wrapper {
  flex-grow: 1;
}

.providerflow .selectall {
  margin-top: 10px;
}

@media screen and (min-width: 768px) {
  .providerflow {
    flex-direction: row;
  }

  .providerflow aside {
    width: 20%;
    max-width: 250px;
    height: 200px;
  }
}
`
//ReactFlowProvider.tsx