// ProximityConnect.tsx
import React, {useCallback} from 'react';
import ReactFlow, {
    addEdge,
    useNodesState,
    useEdgesState,
    Background,
    BackgroundVariant,
    ReactFlowProvider,
    useStoreApi,
    Connection,
    Edge,
} from 'reactflow';

import 'reactflow/dist/style.css';

import {initialEdges, initialNodes} from 'src/components/reactflow/ProximityConnect/nodes-and-edges';
import {useGetWindowSize} from "../../hooks/useGetWindowSize";

const MIN_DISTANCE = 150;

const Flow = () => {
    const {width: windowWidth, height: windowHeight} = useGetWindowSize();
    const store = useStoreApi();
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    const getClosestEdge = useCallback((node: { id: string; positionAbsolute: { x: number; y: number; }; }) => {
        const {nodeInternals} = store.getState();
        const storeNodes = Array.from(nodeInternals.values());

        const closestNode = storeNodes.reduce(
            (res, n) => {
                if (n.id !== node.id) {
                    // @ts-ignore
                    const dx = n.positionAbsolute.x - node.positionAbsolute.x;
                    // @ts-ignore
                    const dy = n.positionAbsolute.y - node.positionAbsolute.y;
                    const d = Math.sqrt(dx * dx + dy * dy);

                    if (d < res.distance && d < MIN_DISTANCE) {
                        res.distance = d;
                        // @ts-ignore
                        res.node = n;
                    }
                }

                return res;
            },
            {
                distance: Number.MAX_VALUE,
                node: null,
            }
        );

        if (!closestNode.node) {
            return null;
        }
        // @ts-ignore
        const closeNodeIsSource = closestNode.node.positionAbsolute.x < node.positionAbsolute.x;

        return {
            // @ts-ignore
            id: `${node.id}-${closestNode.node.id}`,
            // @ts-ignore
            source: closeNodeIsSource ? closestNode.node.id : node.id,
            // @ts-ignore
            target: closeNodeIsSource ? node.id : closestNode.node.id,
        };
    }, []);

    const onNodeDrag = useCallback(
        (_: any, node: { id: string; positionAbsolute: { x: number; y: number; }; }) => {
            const closeEdge = getClosestEdge(node);

            setEdges((es) => {
                const nextEdges = es.filter((e) => e.className !== 'temp');

                if (
                    closeEdge &&
                    !nextEdges.find((ne) => ne.source === closeEdge.source && ne.target === closeEdge.target)
                ) {
                    // @ts-ignore
                    closeEdge.className = 'temp';
                    nextEdges.push(closeEdge);
                }

                return nextEdges;
            });
        },
        [getClosestEdge, setEdges]
    );

    const onNodeDragStop = useCallback(
        (_: any, node: { id: string; positionAbsolute: { x: number; y: number; }; }) => {
            const closeEdge = getClosestEdge(node);

            setEdges((es) => {
                const nextEdges = es.filter((e) => e.className !== 'temp');

                if (closeEdge) {
                    nextEdges.push(closeEdge);
                }

                return nextEdges;
            });
        },
        [getClosestEdge]
    );

    return (
        <div style={{height: windowHeight, width: windowWidth}}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                // @ts-ignore
                onNodeDrag={onNodeDrag}
                // @ts-ignore
                onNodeDragStop={onNodeDragStop}
                onConnect={onConnect}
                fitView
            >
                <Background variant={BackgroundVariant.Cross} gap={50}/>
            </ReactFlow>
            <style jsx global>{Style}</style>
        </div>
    );
};

// eslint-disable-next-line react/display-name
export default () => (
    <ReactFlowProvider>
        <Flow/>
    </ReactFlowProvider>
);

const Style = `
.react-flow__edge-path {
  stroke: #333;
  stroke-width: 2;
}

.temp .react-flow__edge-path {
  stroke: #bbb;
  stroke-dasharray: 5 5;
}
`;
