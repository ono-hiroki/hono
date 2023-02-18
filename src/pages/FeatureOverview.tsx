import React, {useCallback} from 'react';
// import './overview.css';
import ReactFlow, {
    addEdge,
    Background,
    Connection,
    Controls,
    Edge,
    Handle,
    MiniMap,
    Position,
    ReactFlowProvider,
    useEdgesState,
    useNodesState,
    useReactFlow,
    useStoreApi,
} from 'reactflow';

import {edges as initialEdges, nodes as initialNodes} from 'src/components/FeatureOverview/initial-elements';
// import CustomNode from 'src/components/FeatureOverview/CustomNode';
import 'reactflow/dist/style.css';
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
            Array.from(nodeInternals.values()).map((node) => { //Array.fromは、配列のコピーを作成する
                if (node.id === nodeId) {
                    node.data = {
                        ...node.data,
                        selects: {
                            ...node.data.selects,
                            [handleId]: evt.target.value,// handleIdだと'handleId',[handleId]だと中身の値が入る
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
function CustomNode(props) {
    const {data, id} = props;
    return (
        <>
            <div className="custom-node__header">
                This is a <strong>custom node</strong>こんちくは
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

const OverviewFlow = () => {
    // @ts-ignore
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback((params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds)), []);

    // エッジのタイプを調整するために、ここでは少しショートカットを使用しています
    // これは、カスタムエッジなどで行うこともできます
    const edgesWithUpdatedTypes = edges.map((edge) => {
        if (edge.sourceHandle) {
            // @ts-ignore
            edge.type = nodes.find((node) => node.type === 'custom').data.selects[edge.sourceHandle];
            // nodesの中のtypeがcustomのものの中で、dataの中のselectsの中のedge.sourceHandleの値をedge.typeに代入する
        }
        return edge;
    });
    const {height: windowHeight, width: windowWidth} = useGetWindowSize()

    return (
        <div style={{height: windowHeight, width: windowWidth}}>
            <ReactFlow
                nodes={nodes}
                edges={edgesWithUpdatedTypes}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onInit={onInit} // ReactFlowが初期化された時に呼ばれる
                fitView
                attributionPosition="top-right" // ReactFlowが表示されている場所を指定
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