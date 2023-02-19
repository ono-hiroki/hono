import React, { useEffect, useState, useRef } from 'react';
import ReactFlow, { useNodesState, useEdgesState } from 'reactflow';

import { nodes as initialNodes, edges as initialEdges } from 'src/components/CollisionDetection/initial-elements';

import 'reactflow/dist/style.css';
import {useGetWindowSize} from "../hooks/useGetWindowSize";

const CollisionDetectionFlow = () => {
    const {width: windowWidth, height: windowHeight} = useGetWindowSize()
    // this ref stores the current dragged node
    const dragRef = useRef(null);

    // target is the node that the node is dragged over
    const [target, setTarget] = useState(null);

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onNodeDragStart = (evt: any, node: null) => {
        dragRef.current = node;
    };

    const onNodeDrag = (evt: any, node: { position: { x: number; y: number; }; width: number; height: number; id: string; }) => {
        // calculate the center point of the node from position and dimensions
        const centerX = node.position.x + node.width / 2;
        const centerY = node.position.y + node.height / 2;

        // find a node where the center point is inside
        const targetNode = nodes.find(
            (n) =>
                centerX > n.position.x &&
                // @ts-ignore
                centerX < n.position.x + n.width &&
                centerY > n.position.y &&
                // @ts-ignore
                centerY < n.position.y + n.height &&
                n.id !== node.id // this is needed, otherwise we would always find the dragged node
        );

        // @ts-ignore
        setTarget(targetNode);
    };

    const onNodeDragStop = (evt: any, node: { data: { label: any; }; id: string; }) => {
        // on drag stop, we swap the colors of the nodes
        const nodeColor = node.data.label;
        // @ts-ignore
        const targetColor = target?.data.label;

        setNodes((nodes) =>
            nodes.map((n) => {
                // @ts-ignore
                if (n.id === target?.id) {
                    n.data = { ...n.data, color: nodeColor, label: nodeColor };
                }
                if (n.id === node.id && target) {
                    n.data = { ...n.data, color: targetColor, label: targetColor };
                }
                return n;
            })
        );

        setTarget(null);
        dragRef.current = null;
    };

    useEffect(() => {
        // whenever the target changes, we swap the colors temporarily
        // this is just a placeholder, implement your own logic here
        setNodes((nodes) =>
            nodes.map((node) => {
                // @ts-ignore
                if (node.id === target?.id) {
                    // @ts-ignore
                    node.style = { ...node.style, backgroundColor: dragRef.current?.data.color };
                    // @ts-ignore
                    node.data = { ...node.data, label: dragRef.current?.data.color };
                    // @ts-ignore
                } else if (node.id === dragRef.current?.id && target) {
                    // @ts-ignore
                    node.style = { ...node.style, backgroundColor: target.data.color };
                    // @ts-ignore
                    node.data = { ...node.data, label: target.data.color };
                } else {
                    node.style = { ...node.style, backgroundColor: node.data.color };
                    node.data = { ...node.data, label: node.data.color };
                }
                return node;
            })
        );
    }, [target]);

    return (
        <div style={{width: windowWidth, height: windowHeight}}>
        <div className="container">
            <div className="instructions">Drop any node on top of another node to swap their colors</div>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                fitView
                // @ts-ignore
                onNodeDragStart={onNodeDragStart}
                // @ts-ignore
                onNodeDrag={onNodeDrag}
                onNodeDragStop={onNodeDragStop}
            />
        </div>
            <style jsx global>{Style}</style>
        </div>
    );
};

export default CollisionDetectionFlow;
// CollisionDetection.tsx
const Style = `
    .container {
  width: 100%;
  height: 100%;
  position: relative;
}

.instructions {
  position: absolute;
  padding: 5px;
  font-size: 12px;
  color: #777;
}

.react-flow__handle {
  display: none;
}

.react-flow__node {
  transition: background-color 0.3s, padding-left 0.3s, padding-right 0.3s;
  border-radius: 20px;
  padding: 10px 10px;
  width: auto;
  border-width: 2px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: monospace;
}

.react-flow__node.dragging {
  padding: 5px 5px;
}

.react-flow__node.is-dropzone {
  border-style: dashed;
}

    `