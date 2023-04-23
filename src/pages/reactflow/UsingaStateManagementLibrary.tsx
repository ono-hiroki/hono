// UssingaStateManagementLibrary.tsx
import React from 'react';
import ReactFlow, {OnConnectEnd, OnConnectStart} from 'reactflow';
import { shallow } from 'zustand/shallow';

import 'reactflow/dist/style.css';

import useStore from 'src/components/reactflow/UsingaStateManagementLibrary/store';
import ColorChooserNode from 'src/components/reactflow/UsingaStateManagementLibrary/ColorChooserNode';
import {useGetWindowSize} from "src/hooks/useGetWindowSize";

const nodeTypes = { colorChooser: ColorChooserNode };

type State = {
    nodes: any[];
    edges: any[];
    onNodesChange: (nodes: any[]) => void;
    onEdgesChange: (edges: any[]) => void;
    onConnect: OnConnectStart | OnConnectEnd;
}

const selector = (state: State) => ({
    nodes: state.nodes,
    edges: state.edges,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
    onConnect: state.onConnect,
});

function Flow() {
    // @ts-ignore
    const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(selector, shallow);
    const {height: windowHeight, width: windowWidth} = useGetWindowSize()


    return (
        <div style={{height: windowHeight, width: windowWidth}}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                // @ts-ignore
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                fitView
            />
        </div>
    );
}

export default Flow;
