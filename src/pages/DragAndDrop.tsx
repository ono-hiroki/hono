// DragAndDrop.tsx
import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, {
    ReactFlowProvider,
    addEdge,
    useNodesState,
    useEdgesState,
    Controls,
    Connection,
    Edge,
} from 'reactflow';
import 'reactflow/dist/style.css';

import Sidebar from 'src/components/DragAndDrop/Sidebar';

import {useGetWindowSize} from "../hooks/useGetWindowSize";

const initialNodes = [
    {
        id: '1',
        type: 'input',
        data: {label: 'input node'},
        position: {x: 250, y: 5},
    },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = () => {
    const {width: windowWidth, height: windowHeight} = useGetWindowSize()
    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    const onConnect = useCallback((params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds)), []);

    const onDragOver = useCallback((event: { preventDefault: () => void; dataTransfer: { dropEffect: string; }; }) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event: { preventDefault: () => void; dataTransfer: { getData: (arg0: string) => any; }; clientX: number; clientY: number; }) => {
            event.preventDefault(); // preventDefaultは、デフォルトのイベントをキャンセルするためのメソッドです。

            // @ts-ignore
            const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
            // getBoundingClientRect()は、要素の大きさと位置を示すDOMRectオブジェクトを返します。

            const type = event.dataTransfer.getData('application/reactflow');

            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type) {
                return;
            }

            console.log(event.clientX,'-' ,reactFlowBounds.left,'event.clientX - reactFlowBounds.left')
            console.log(reactFlowBounds)
            // reactFlowBounds.leftは、要素の左端からの距離を示す数値です。
            // @ts-ignore
            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            });
            const newNode = {
                id: getId(),
                type,
                position,
                data: { label: `${type} node` },
            };

            setNodes((nds) => nds.concat(newNode));
        },
        [reactFlowInstance]
    );

    return (
        <div className="dndflow" style={{width: windowWidth, height: windowHeight}}>
            <ReactFlowProvider>
                <div className="reactflow-wrapper" ref={reactFlowWrapper}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        // @ts-ignore
                        onInit={setReactFlowInstance}
                        onDrop={onDrop} // onDropは、なにかをドロップしたときに呼ばれる
                        onDragOver={onDragOver}
                        fitView
                    >
                        <Controls />
                    </ReactFlow>
                </div>
                <Sidebar />
            </ReactFlowProvider>
            <style jsx global>{Style}</style>
        </div>
    );
};

export default DnDFlow;
// DragAndDrop.tsx


const Style = `
.dndflow {
  flex-direction: column;
  display: flex;
  flex-grow: 1;
  height: 100%;
}

.dndflow aside {
  border-right: 1px solid #eee;
  padding: 15px 10px;
  font-size: 12px;
  background: #fcfcfc;
}

.dndflow aside .description {
  margin-bottom: 10px;
}

.dndflow .dndnode {
  height: 20px;
  padding: 4px;
  border: 1px solid #1a192b;
  border-radius: 2px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
}

.dndflow .dndnode.input {
  border-color: #0041d0;
}

.dndflow .dndnode.output {
  border-color: #ff0072;
}

.dndflow .reactflow-wrapper {
  flex-grow: 1;
  height: 100%;
}

.dndflow .selectall {
  margin-top: 10px;
}

@media screen and (min-width: 768px) {
  .dndflow {
    flex-direction: row;
  }

  .dndflow aside {
    width: 20%;
    max-width: 250px;
  }
}
`