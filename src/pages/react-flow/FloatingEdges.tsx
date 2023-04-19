// FloatingEdges
// 便利だがハンドルを使わないので、たぶん汎用性に欠ける
// ただリッチなエッジを作りたいときには便利かもしれない。あとで読む
import React, { useCallback } from 'react';
import ReactFlow, {
    addEdge,
    Background,
    useNodesState,
    useEdgesState,
    MarkerType,
    Connection,
    Edge,
} from 'reactflow';
import 'reactflow/dist/style.css';

import FloatingEdge from 'src/components/FloatingEdges/FloatingEdge';
import FloatingConnectionLine from 'src/components/FloatingEdges/FloatingConnectionLine';
import {createNodesAndEdges} from 'src/components/FloatingEdges/utils'; // 楽にエッジを作るための関数

import {useGetWindowSize} from "../../hooks/useGetWindowSize";

// カスタムノードは使っていないので、handleは2つしかない
// この例ではhandleを使っていない
const edgeTypes = {
    floating: FloatingEdge, // <---
};

const NodeAsHandleFlow = () => {
    const {width, height} = useGetWindowSize();
    const {nodes: initialNodes, edges: initialEdges} = createNodesAndEdges(width, height); // <---
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params: Edge<any> | Connection) =>
            setEdges((eds) =>
                addEdge({ ...params, type: 'floating', markerEnd: { type: MarkerType.Arrow } }, eds)
            ),
        [setEdges]
    );

    return (
        <div className="floatingedges" style={{ width, height}}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
                // @ts-ignore
                edgeTypes={edgeTypes}
                // @ts-ignore
                connectionLineComponent={FloatingConnectionLine} // <--- いつ呼ばれるかというと、エッジをドラッグしているとき
            >
                <Background />
            </ReactFlow>
            <style jsx global>{Style}</style>
        </div>
    );
};

export default NodeAsHandleFlow;
// FloatingEdges

const Style = `
.floatingedges {
  flex-direction: column;
  display: flex;
  flex-grow: 1;
  height: 100%;
}

.floatingedges .react-flow__handle {
  opacity: 0;
}
`
