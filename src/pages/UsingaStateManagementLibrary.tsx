import React from 'react';
import ReactFlow from 'reactflow';
import {shallow} from 'zustand/shallow';

import 'reactflow/dist/style.css';

import useStore from 'src/components/UsingaStateManagementLibrary/store';
import {useGetWindowSize} from "../hooks/useGetWindowSize";

type State = {
    nodes: any[];
    edges: any[];
    onNodesChange: (nodes: any[]) => void;
    onEdgesChange: (edges: any[]) => void;
    onConnect: (params: any) => void;
}

const selector = (state: State) => ({
    nodes: state.nodes,
    edges: state.edges,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
    onConnect: state.onConnect,
});

function Flow() {
    const {nodes, edges, onNodesChange, onEdgesChange, onConnect} = useStore(selector, shallow);
    const {height: windowHeight, width: windowWidth} = useGetWindowSize()


    return (
        <div style={{height: windowHeight, width: windowWidth}}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
            />
        </div>
    );
}

export default Flow;
// UsingaStateManagementLibrary
