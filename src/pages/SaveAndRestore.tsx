// SaveAndRestore.tsx
import React, {useState, useCallback} from 'react';
import ReactFlow, {
    ReactFlowProvider,
    useNodesState,
    useEdgesState,
    addEdge,
    useReactFlow,
    Connection,
    Edge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import {zoom} from "d3-zoom";
import {useGetWindowSize} from "../hooks/useGetWindowSize";

const flowKey = 'example-flow';

const getNodeId = () => `randomnode_${+new Date()}`;

const initialNodes = [
    {id: '1', data: {label: 'Node 1'}, position: {x: 100, y: 100}},
    {id: '2', data: {label: 'Node 2'}, position: {x: 100, y: 200}},
];

const initialEdges = [{id: 'e1-2', source: '1', target: '2'}];

const SaveRestore = () => {
    const {width: windowWidth, height: windowHeight} = useGetWindowSize()
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [rfInstance, setRfInstance] = useState(null);
    const {setViewport} = useReactFlow();

    const onConnect = useCallback((params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
    const onSave = useCallback(() => {
        if (rfInstance) {
            // @ts-ignore
            const flow = rfInstance.toObject();
            localStorage.setItem(flowKey, JSON.stringify(flow));// localstorageに保存
        }
    }, [rfInstance]);

    const onRestore = useCallback(() => {
        const restoreFlow = async () => {
            // @ts-ignore
            const flow = JSON.parse(localStorage.getItem(flowKey));// localstorageから取得

            if (flow) {
                const {x = 0, y = 0, zoom = 1} = flow.viewport;
                setNodes(flow.nodes || []);
                setEdges(flow.edges || []);
                setViewport({x, y, zoom});
            }
        };

        restoreFlow();
    }, [setNodes, setViewport]);

    const onAdd = useCallback(() => {
        const newNode = {
            id: getNodeId(),
            data: {label: 'Added node'},
            position: {
                x: Math.random() * window.innerWidth - 100,
                y: Math.random() * window.innerHeight,
            },
        };
        setNodes((nds) => nds.concat(newNode));
    }, [setNodes]);

    return (
        <div style={{height: windowHeight, width: windowWidth}}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                // @ts-ignore
                onInit={ (props) => (setRfInstance(props),console.log('onInit props', props))}
            >
                <div className="save__controls">
                    <button onClick={onSave}>save</button>
                    <button onClick={onRestore}>restore</button>
                    <button onClick={onAdd}>add node</button>
                </div>
            </ReactFlow>
            <style jsx global>{Style}</style>
        </div>
    );
};

// eslint-disable-next-line react/display-name
export default () => (
    <ReactFlowProvider>
        <SaveRestore/>
    </ReactFlowProvider>
);
// SaveAndRestore.tsx
const Style = `
    .save__controls {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 4;
  font-size: 12px;
}

.save__controls button {
  margin-left: 5px;
}

    `