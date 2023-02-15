import {useCallback} from 'react';
import ReactFlow, {addEdge, Connection, Edge, useEdgesState, useNodesState} from 'reactflow';
import 'reactflow/dist/style.css';
import {useGetWindowSize} from "../hooks/useGetWindowSize";
import {Controls, Panel} from 'reactflow';
import useStore, {RFState} from "../components/react-flow/store";
import {shallow} from "zustand/shallow";
import styles from 'src/styles/react-flow/flow-edit.module.css';
import Nodes from "src/components/react-flow/Nodes";
import Edges from "src/components/react-flow/Edges";
import {Handle, NodeProps, Position} from 'reactflow'


const selector = (state: RFState) => ({
    nodes: state.nodes,
    edges: state.edges,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
});

const nodeOrigin = [0.5, 0.5];
const connectionLineStyle = { stroke: '#F6AD55', strokeWidth: 3 };
const defaultEdgeOptions = { style: connectionLineStyle, type: 'mindmap' };

const nodeTypes = {
    mindmap: Nodes,
}

const edgeTypes = {
    mindmap: Edges,
}

function Flow() {
    console.log(styles)
    // console.log(NodeProps,"NodeProps", Position,"Position", Handle,"Handle")

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
                defaultEdgeOptions={defaultEdgeOptions} // エッジのデフォルトオプション
                nodeTypes={nodeTypes} // ノードの種類
                edgeTypes={edgeTypes} // エッジの種類

            > <Controls showInteractive={false} />
                <Panel position="top-left" style={{color: '#eaeaec'}}>
                    React Flow Mind Map
                </Panel>
            </ReactFlow>
        </div>
    );
}

export default Flow;
