import React, {useCallback, useRef, useState} from "react";
import ReactFlow, {
    ReactFlowProvider,
} from 'reactflow';
import 'reactflow/dist/style.css';
import {useGetWindowSize} from "../hooks/useGetWindowSize";
import TextUpdaterNode from "../components/reactflows/custom-nodes/TextUpdaterNode";
import Sidebar from "../components/reactflows/Sidebar";
import useStore from "../components/reactflows/store";
import {shallow} from "zustand/shallow";
import ButtonEdge from "../components/reactflows/custom-edge/ButtonEdge";
import CustomEdge from "../components/reactflows/custom-edge/CustomEdge";

const nodeTypes = {textUpdater: TextUpdaterNode};
const edgeTypes = {
    buttonedge: ButtonEdge,
    custom: CustomEdge
};


const rfStyle = {
    backgroundColor: '#B8CEFF',
};

const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
    addChildNode: state.addChildNode,
    onConnect: state.onConnect,
    onDragOver: state.onDragOver,
    onDrop: state.onDrop,
    updateNodeLabel: state.updateNodeLabel,
});

const App = () => {
    const { nodes, edges, onNodesChange, onEdgesChange, onConnect, onDragOver, onDrop } = useStore(selector, shallow);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const {width, height} = useGetWindowSize();
    const reactFlowWrapper = useRef(null);
    const [selectedNode, setSelectedNode] = useState(null)

    const onSelectionChange = useCallback(
        ({ nodes, edges }) => {
            const selectedNodes = nodes.filter((node) => node.selected)
            const selectedEdges = edges.filter((edge) => edge.selected)
            console.log('selectedNodes', selectedNodes)
            console.log('selectedEdges', selectedEdges)
            if (selectedNodes.length === 0) setSelectedNode(null)
            if (selectedNodes.length === 1) setSelectedNode(selectedNodes[0])
        },
        [],
    )

    return (
        <div className="dndflow">
            <ReactFlowProvider>
                <div className="reactflow-wrapper" ref={reactFlowWrapper}  style={{width: width, height: height}}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={(params) => onConnect(params)}
                        nodeTypes={nodeTypes}
                        edgeTypes={edgeTypes}
                        fitView
                        style={rfStyle}
                        onInit={setReactFlowInstance}
                        onDrop={(event) => onDrop(event, reactFlowInstance, reactFlowWrapper)}
                        onDragOver={onDragOver}
                        // onEdgeClick={(event, edge) => console.log('edge click', edge)}
                        onSelectionChange={onSelectionChange}
                    />
                </div>
                <Sidebar
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    addChildNode={useStore.getState().addChildNode}
                    updateNodeLabel={useStore.getState().updateNodeLabel}
                    selectedNode={selectedNode}
                />
            </ReactFlowProvider>
        </div>
    );
}

export default App;
