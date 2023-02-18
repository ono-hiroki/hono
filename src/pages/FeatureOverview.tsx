import React, {useCallback} from 'react';
import ReactFlow, {
    addEdge,
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    Connection,
    Edge, ReactFlowProvider,
} from 'reactflow';

import {nodes as initialNodes, edges as initialEdges} from 'src/components/FeatureOverview/initial-elements';
// import CustomNode from 'src/components/FeatureOverview/CustomNode';

import 'reactflow/dist/style.css';
// import './overview.css';

import {Handle, useReactFlow, useStoreApi, Position} from 'reactflow';
import {useGetWindowSize} from "../hooks/useGetWindowSize";

const options = [
    {
        value: 'smoothstep',
        label: 'Smoothstep',
    },
    {
        value: 'step',
        label: 'Step',
    },
    {
        value: 'default',
        label: 'Bezier (default)',
    },
    {
        value: 'straight',
        label: 'Straight',
    },
];

// @ts-ignore
function Select({value, handleId, nodeId}) {
    const {setNodes} = useReactFlow();
    const store = useStoreApi();

    const onChange = (evt: { target: { value: any; }; }) => {
        const {nodeInternals} = store.getState();
        setNodes(
            Array.from(nodeInternals.values()).map((node) => {
                if (node.id === nodeId) {
                    node.data = {
                        ...node.data,
                        selects: {
                            ...node.data.selects,
                            [handleId]: evt.target.value,
                        },
                    };
                }

                return node;
            })
        );
    };

    return (
        <div className="custom-node__select">
            <div>Edge Type</div>
            <select className="nodrag" onChange={onChange} value={value}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <Handle type="source" position={Position.Right} id={handleId}/>
        </div>
    );
}

// @ts-ignore
function CustomNode({id, data}) {
    return (
        <>
            <div className="custom-node__header">
                This is a <strong>custom node</strong>
            </div>
            <div className="custom-node__body">
                {Object.keys(data.selects).map((handleId) => (
                    <Select key={handleId} nodeId={id} value={data.selects[handleId]} handleId={handleId}/>
                ))}
            </div>
        </>
    );
}

const nodeTypes = {
    custom: CustomNode,
};

const minimapStyle = {
    height: 120,
};

const onInit = (reactFlowInstance: any) => console.log('flow loaded:', reactFlowInstance);

const reactFlowStyle = {
    background: 'red',
    width: '100%',
    height: 300,
};
const ReactFlowNodeCustom = {
    fontSize: '10px',
    width: '180px',
    background: '#f5f5f6',
    color: '#222',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 15%), 0 2px 4px -1px rgb(0 0 0 / 8%)',
    borderRadius: '2px',
}

const OverviewFlow = () => {
    // @ts-ignore
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback((params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds)), []);

    // we are using a bit of a shortcut here to adjust the edge type
    // this could also be done with a custom edge for example
    const edgesWithUpdatedTypes = edges.map((edge) => {
        if (edge.sourceHandle) {
            // @ts-ignore
            const edgeType = nodes.find((node) => node.type === 'custom').data.selects[edge.sourceHandle];
            edge.type = edgeType;
        }

        return edge;
    });
    const {height: windowHeight, width: windowWidth} = useGetWindowSize()

    return (
        <div style={{height: windowHeight, width: windowWidth}}>
            <ReactFlow
                style={ReactFlowNodeCustom}
                nodes={nodes}
                edges={edgesWithUpdatedTypes}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onInit={onInit}
                fitView
                attributionPosition="top-right"
                nodeTypes={nodeTypes}
            >
                <MiniMap style={minimapStyle} zoomable pannable/>
                <Controls/>
                <Background color="#aaa" gap={16}/>
            </ReactFlow>
            <style jsx global>{Style}</style>
        </div>
    );
};

// eslint-disable-next-line react/display-name
export default () => (
    <ReactFlowProvider>
        <OverviewFlow/>
    </ReactFlowProvider>
);

// FeatureOverview.tsx

const Style = `
.react-flow__node-custom {
  font-size: 10px;
  width: 180px;
  background: #f5f5f6;
  color: #222;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 15%), 0 2px 4px -1px rgb(0 0 0 / 8%);
  border-radius: 2px;
}

.react-flow__node-custom .react-flow__handle {
  top: 24px;
  right: -15px;
  width: 6px;
  height: 10px;
  border-radius: 2px;
  background-color: #778899;
}

.react-flow__node.circle {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  fontweight: 700;
}

.react-flow__node.annotation {
  border-radius: 0;
  text-align: left;
  background: white;
  border: none;
  line-height: 1.4;
  width: 225px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 15%), 0 2px 4px -1px rgb(0 0 0 / 8%);
}

.react-flow__node.annotation .react-flow__handle {
  display: none;
}

.custom-node__header {
  padding: 8px 10px;
  border-bottom: 1px solid #e2e8f0;
}

.custom-node__body {
  padding: 10px;
}

.custom-node__select {
  position: relative;
  margin-bottom: 10px;
}

.custom-node__select select {
  width: 100%;
  margin-top: 5px;
  font-size: 10px;
}`