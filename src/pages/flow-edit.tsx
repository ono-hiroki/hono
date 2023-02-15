import {useCallback} from 'react';
import ReactFlow, {addEdge, Connection, Edge, useEdgesState, useNodesState} from 'reactflow';
import 'reactflow/dist/style.css';
import {useGetWindowSize} from "../hooks/useGetWindowSize";
import {Controls, Panel} from 'reactflow';
import useStore, {RFState} from "../components/react-flow/store";
import {shallow} from "zustand/shallow";
import 'src/styles/react-flow/flow-edit.module.css';

const selector = (state: RFState) => ({
    nodes: state.nodes,
    edges: state.edges,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
});

const nodeOrigin = [0.5, 0.5];

function Flow() {
    const {nodes, edges, onNodesChange, onEdgesChange} = useStore(selector, shallow);

    const {height: windowHeight, width: windowWidth} = useGetWindowSize()

    return (
        <div style={{height: windowHeight, width: windowWidth}}>
            <ReactFlow
                nodes={nodes} // nodes
                edges={edges} // edges
                onNodesChange={onNodesChange} // ノードを追加したり削除したりしたときに呼ばれる
                onEdgesChange={onEdgesChange} // エッジを追加したり削除したりしたときに呼ばれる
                // @ts-ignore
                nodeOrigin={nodeOrigin} // ノードの原点
                fitView // ノードが画面に収まるように自動的にズームする
            > <Controls showInteractive={false} />
                <Panel position="top-left" style={{color: '#eaeaec'}}>
                    React Flow Mind Map
                </Panel>
            </ReactFlow>
        </div>
    );
}

export default Flow;
