import {useCallback} from 'react';
import ReactFlow, {addEdge, Connection, Edge, useEdgesState, useNodesState} from 'reactflow';
import 'reactflow/dist/style.css';
import {useGetWindowSize} from "../hooks/useGetWindowSize";
import {Controls, Panel} from 'reactflow';
import useStore, {RFState} from "../components/react-flow/store";
import {shallow} from "zustand/shallow";

const selector = (state: RFState) => ({
    nodes: state.nodes,
    edges: state.edges,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
});

function Flow() {
    const {nodes, edges, onNodesChange, onEdgesChange} = useStore(selector, shallow);

    const {height: windowHeight, width: windowWidth} = useGetWindowSize()

    return (
        <div style={{height: windowHeight, width: windowWidth}}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
            > <Controls showInteractive={false} />
                <Panel position="top-left" style={{color: '#eaeaec'}}>
                    React Flow Mind Map
                </Panel>
            </ReactFlow>
        </div>
    );
}

export default Flow;
