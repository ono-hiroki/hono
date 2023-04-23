// ResizeandRotate.tsx
import React from 'react';
import ReactFlow, {ReactFlowProvider, Background, Edge, Position} from 'reactflow';

import 'reactflow/dist/style.css';

import ResizeRotateNode from 'src/components/reactflow/ResizeandRotate/ResizeRotateNode';
import {useGetWindowSize} from "src/hooks/useGetWindowSize";

const nodes = [
    {
        id: '1',
        position: {x: 100, y: 100},
        data: {label: 'Node 1'},
        type: 'resizeRotate',
        sourcePosition: Position.Bottom,
        targetPosition: Position.Top,
        selected: true,
        style: {width: 180, height: 100},
    },
    {
        id: '2',
        position: {x: 100, y: 400},
        data: {label: 'Node 2'},
        type: 'resizeRotate',
        sourcePosition: Position.Bottom,
        targetPosition: Position.Top,
        style: {width: 180, height: 100},
    },
];

const edges = [
    {
        id: '1->2',
        source: '1',
        target: '2',
        type: 'smoothstep',
    },
];

const nodeTypes = {
    resizeRotate: ResizeRotateNode,
};

const defaultEdgeOptions = {
    style: {strokeWidth: 2, stroke: '#9ca8b3'},
    markerEnd: {
        type: 'arrowclosed',
    },
};

function ReactFlowPro() {
    const {width: windowWidth, height: windowHeight} = useGetWindowSize()
    return (
        <div style={{width: windowWidth, height: windowHeight}}>
            <ReactFlow
                nodeTypes={nodeTypes}
                defaultNodes={nodes}
                defaultEdges={edges}
                // @ts-ignore
                defaultEdgeOptions={defaultEdgeOptions}
                defaultViewport={{zoom: 1, x: 0, y: 0}}
                fitView
                fitViewOptions={{padding: 0.4}}
            >
                <Background/>
            </ReactFlow>
            <style jsx global>{Style}</style>
        </div>
    );
}

const ReactFlowWrapper = (props: JSX.IntrinsicAttributes) => {
    return (
        <ReactFlowProvider>
            <ReactFlowPro {...props} />
        </ReactFlowProvider>
    );
};

export default ReactFlowWrapper;

//ResizeandRotate.tsx

const Style = `
.node {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  border: 1px solid #000;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
}

.node :global .react-flow__resize-control.handle {
  width: 10px;
  height: 10px;
  border-radius: 100%;
}

.rotateHandle {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #3367d9;
  left: 50%;
  top: -30px;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  cursor: alias;
}

.rotateHandle:after {
  content: '';
  display: block;
  position: absolute;
  width: 1px;
  height: 30px;
  background: #3367d9;
  left: 4px;
  top: 5px;
}
`
