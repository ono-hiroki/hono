// DagreTree.tsx
import React, { useCallback } from 'react';
import ReactFlow, { addEdge, ConnectionLineType, useNodesState, useEdgesState, Connection, Edge} from 'reactflow';
// @ts-ignore
import dagre from 'dagre';
import 'reactflow/dist/style.css';

import {initialNodes, initialEdges} from 'src/components/reactflow/DagreTree/nodes-edges';

import {useGetWindowSize} from "../../hooks/useGetWindowSize";

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 172;
const nodeHeight = 36;

const getLayoutedElements = (nodes: any[], edges: any[], direction = 'TB') => {
    const isHorizontal = direction === 'LR';
    dagreGraph.setGraph({rankdir: direction});

    nodes.forEach((node) => {
        dagreGraph.setNode(node.id, {width: nodeWidth, height: nodeHeight});
    });

    edges.forEach((edge) => {
        dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    nodes.forEach((node: { id: any; targetPosition: string; sourcePosition: string; position: { x: number; y: number; }; }) => {
        const nodeWithPosition = dagreGraph.node(node.id);
        node.targetPosition = isHorizontal ? 'left' : 'top';
        node.sourcePosition = isHorizontal ? 'right' : 'bottom';

        // We are shifting the dagre node position (anchor=center center) to the top left
        // so it matches the React Flow node anchor point (top left).
        node.position = {
            x: nodeWithPosition.x - nodeWidth / 2,
            y: nodeWithPosition.y - nodeHeight / 2,
        };

        return node;
    });

    return {nodes, edges};
};

const {nodes: layoutedNodes, edges: layoutedEdges} = getLayoutedElements(
    initialNodes,
    initialEdges
);

const LayoutFlow = () => {
    const {width, height} = useGetWindowSize();
    const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

    const onConnect = useCallback(
        (params: Edge<any> | Connection) =>
            setEdges((eds) =>
                addEdge({ ...params, type: ConnectionLineType.SmoothStep, animated: true }, eds)
            ),
        []
    );
    const onLayout = useCallback(
        (direction: string | undefined) => {
            const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
                nodes,
                edges,
                direction
            );

            setNodes([...layoutedNodes]);
            setEdges([...layoutedEdges]);
        },
        [nodes, edges]
    );

    return (
        <div className="layoutflow" style={{ width, height }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                connectionLineType={ConnectionLineType.SmoothStep}
                fitView
            />
            <div className="controls">
                <button onClick={() => onLayout('TB')}>vertical layout</button>
                <button onClick={() => onLayout('LR')}>horizontal layout</button>
            </div>
            <style jsx global>{Style}</style>
        </div>
    );
};

export default LayoutFlow;
// DagreTree.tsx

const Style = `
    .layoutflow {
  flex-grow: 1;
  position: relative;
  height: 100%;
}

.layoutflow .controls {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 10;
  font-size: 12px;
}

.layoutflow .controls button:first-child {
  margin-right: 10px;
}

    `
