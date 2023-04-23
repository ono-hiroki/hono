// NodeResizer.tsx
import ReactFlow, {MiniMap, Background, BackgroundVariant, Controls, Edge} from 'reactflow';

import 'reactflow/dist/style.css';

import ResizableNode from 'src/components/reactflow/NodeResizer/ResizableNode';
import ResizableNodeSelected from 'src/components/reactflow/NodeResizer/ResizableNodeSelected';
import CustomResizerNode from 'src/components/reactflow/NodeResizer/CustomResizerNode';
import {useGetWindowSize} from "../../hooks/useGetWindowSize";

const nodeTypes = {
    ResizableNode,
    ResizableNodeSelected,
    CustomResizerNode,
};

const initialNodes = [
    {
        id: '1',
        type: 'ResizableNode',
        data: {label: 'NodeResizer'},
        position: {x: 0, y: 50},
        style: {background: '#fff', border: '1px solid black', borderRadius: 15, fontSize: 12},
    },
    {
        id: '2',
        type: 'ResizableNodeSelected',
        data: {label: 'NodeResizer when selected'},
        position: {x: 100, y: 300},
        style: {background: '#fff', border: '1px solid black', borderRadius: 15, fontSize: 12},
    },
    {
        id: '3',
        type: 'CustomResizerNode',
        data: {label: 'Custom Resize Icon'},
        position: {x: 150, y: 150},
        style: {
            background: '#fff',
            fontSize: 12,
            border: '1px solid black',
            padding: 5,
            borderRadius: 15,
            height: 100,
        },
    },
];

const initialEdges: Edge<any>[] | undefined = [];

export default function NodeToolbarExample() {
    const {width: windowWidth, height: windowHeight} = useGetWindowSize();
    return (
        <div style={{width: windowWidth, height: windowHeight}}>
            <ReactFlow
                defaultNodes={initialNodes}
                defaultEdges={initialEdges}
                className="react-flow-node-resizer-example"
                minZoom={0.2}
                maxZoom={4}
                fitView
                nodeTypes={nodeTypes}
            >
                <Background variant={BackgroundVariant.Dots}/>
                <MiniMap/>
                <Controls/>
            </ReactFlow>
        </div>
    );
}
