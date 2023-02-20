// 説明 : このページは、ReactFlowのプロパティを調べるためのページです。
// InteractionProps.tsx
import React, {useState, useCallback} from 'react';
import ReactFlow, {useNodesState, useEdgesState, addEdge, MiniMap, Controls, Connection, Edge} from 'reactflow';
import 'reactflow/dist/style.css';
import {useGetWindowSize} from "../hooks/useGetWindowSize";

const initialNodes = [
    {
        id: 'interaction-1',
        type: 'input',
        data: {label: 'Node 1'},
        position: {x: 250, y: 5},
    },
    {
        id: 'interaction-2',
        data: {label: 'Node 2'},
        position: {x: 100, y: 100},
    },
    {
        id: 'interaction-3',
        data: {label: 'Node 3'},
        position: {x: 400, y: 100},
    },
    {
        id: 'interaction-4',
        data: {label: 'Node 4'},
        position: {x: 400, y: 200},
    },
];

const initialEdges = [
    {
        id: 'interaction-e1-2',
        source: 'interaction-1',
        target: 'interaction-2',
        animated: true,
    },
    {id: 'interaction-e1-3', source: 'interaction-1', target: 'interaction-3'},
];

const buttonWrapperStyle = {
    position: 'absolute',
    left: 10,
    top: 10,
    zIndex: 4,
    textTransform: 'none',
};

const onNodeDragStart = (event: any, node: any) => console.log('drag start', node);
const onNodeDragStop = (event: any, node: any) => console.log('drag stop', node);
const onNodeClick = (event: any, node: any) => console.log('click node', node);
const onPaneClick = (event: any) => console.log('onPaneClick', event);
const onPaneScroll = (event: any) => console.log('onPaneScroll', event);
const onPaneContextMenu = (event: any) => console.log('onPaneContextMenu', event);

const InteractionFlow = () => {
    const {width: windowWidth, height: windowHeight} = useGetWindowSize()
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback((params: Edge<any> | Connection) => setEdges((els) => addEdge(params, els)), []);

    const [isSelectable, setIsSelectable] = useState(false);
    const [isDraggable, setIsDraggable] = useState(false);
    const [isConnectable, setIsConnectable] = useState(false);
    const [zoomOnScroll, setZoomOnScroll] = useState(false);
    const [panOnScroll, setPanOnScroll] = useState(false);
    const [panOnScrollMode, setPanOnScrollMode] = useState('free');
    const [zoomOnDoubleClick, setZoomOnDoubleClick] = useState(false);
    const [panOnDrag, setpanOnDrag] = useState(true);
    const [captureZoomClick, setCaptureZoomClick] = useState(false);
    const [captureZoomScroll, setCaptureZoomScroll] = useState(false);
    const [captureElementClick, setCaptureElementClick] = useState(false);

    return (
        <div style={{height: windowHeight, width: windowWidth}} >
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                elementsSelectable={isSelectable}  // これがtrueのとき、ノードをクリックで選択できるようになる。
                nodesConnectable={isConnectable} // これがtrueのとき、ノードをドラッグで接続できるようになる。
                nodesDraggable={isDraggable} // これがtrueのとき、ノードをドラッグできるようになる。
                zoomOnScroll={zoomOnScroll} // これがtrueのとき、マウスホイールでズームインできるようになる。
                panOnScroll={panOnScroll} // これがtrueのとき、マウスホイールでパンできるようになる。
                // @ts-ignore
                panOnScrollMode={panOnScrollMode} // これがtrueのとき、マウスホイールでパンできるようになる。
                zoomOnDoubleClick={zoomOnDoubleClick} // これがtrueのとき、ダブルクリックでズームインできるようになる。
                onConnect={onConnect}
                onNodeClick={captureElementClick ? onNodeClick : undefined} // これがtrueのとき、ノードをクリックでonNodeClickが呼ばれる。
                onNodeDragStart={onNodeDragStart} // ノードをドラッグを始めると、onNodeDragStartが呼ばれる。
                onNodeDragStop={onNodeDragStop} // ノードをドラッグを止めると、onNodeDragStopが呼ばれる。
                panOnDrag={panOnDrag} // これがtrueのとき、ノードをドラッグでパンできるようになる。
                onPaneClick={captureZoomClick ? onPaneClick : undefined}  // これがtrueのとき、ノードをクリックでonPaneClickが呼ばれる。
                onPaneScroll={captureZoomScroll ? onPaneScroll : undefined} // これがtrueのとき、マウスホイールがスクロールされると、onPaneScrollが呼ばれる。
                onPaneContextMenu={captureZoomClick ? onPaneContextMenu : undefined}  // これがtrueのとき、右クリックでonPaneContextMenuが呼ばれる。
                fitView
                attributionPosition="top-right"
            >
                <MiniMap/>
                <Controls/>
                {/* @ts-ignore */}
                <div style={buttonWrapperStyle}>
                    <div>
                        <label htmlFor="draggable">
                            <input
                                id="draggable"
                                type="checkbox"
                                checked={isDraggable}
                                onChange={(event) => setIsDraggable(event.target.checked)}
                                className="react-flow__draggable"
                            />
                            nodesDraggable
                        </label>
                    </div>
                    <div>
                        <label htmlFor="connectable">
                            <input
                                id="connectable"
                                type="checkbox"
                                checked={isConnectable}
                                onChange={(event) => setIsConnectable(event.target.checked)}
                                className="react-flow__connectable"
                            />
                            nodesConnectable
                        </label>
                    </div>
                    <div>
                        <label htmlFor="selectable">
                            <input
                                id="selectable"
                                type="checkbox"
                                checked={isSelectable}
                                onChange={(event) => setIsSelectable(event.target.checked)}
                                className="react-flow__selectable"
                            />
                            elementsSelectable
                        </label>
                    </div>
                    <div>
                        <label htmlFor="zoomonscroll">
                            <input
                                id="zoomonscroll"
                                type="checkbox"
                                checked={zoomOnScroll}
                                onChange={(event) => setZoomOnScroll(event.target.checked)}
                                className="react-flow__zoomonscroll"
                            />
                            zoomOnScroll
                        </label>
                    </div>
                    <div>
                        <label htmlFor="panonscroll">
                            <input
                                id="panonscroll"
                                type="checkbox"
                                checked={panOnScroll}
                                onChange={(event) => setPanOnScroll(event.target.checked)}
                                className="react-flow__panonscroll"
                            />
                            panOnScroll
                        </label>
                    </div>
                    <div>
                        <label htmlFor="panonscrollmode">
                            <select
                                id="panonscrollmode"
                                value={panOnScrollMode}
                                onChange={(event) => setPanOnScrollMode(event.target.value)}
                                className="react-flow__panonscrollmode"
                            >
                                <option value="free">free</option>
                                <option value="horizontal">horizontal</option>
                                <option value="vertical">vertical</option>
                            </select>
                            panOnScrollMode
                        </label>
                    </div>
                    <div>
                        <label htmlFor="zoomondbl">
                            <input
                                id="zoomondbl"
                                type="checkbox"
                                checked={zoomOnDoubleClick}
                                onChange={(event) => setZoomOnDoubleClick(event.target.checked)}
                                className="react-flow__zoomondbl"
                            />
                            zoomOnDoubleClick
                        </label>
                    </div>
                    <div>
                        <label htmlFor="panOnDrag">
                            <input
                                id="panOnDrag"
                                type="checkbox"
                                checked={panOnDrag}
                                onChange={(event) => setpanOnDrag(event.target.checked)}
                                className="react-flow__panOnDrag"
                            />
                            panOnDrag
                        </label>
                    </div>
                    <div>
                        <label htmlFor="capturezoompaneclick">
                            <input
                                id="capturezoompaneclick"
                                type="checkbox"
                                checked={captureZoomClick}
                                onChange={(event) => setCaptureZoomClick(event.target.checked)}
                                className="react-flow__capturezoompaneclick"
                            />
                            capture onPaneClick
                        </label>
                    </div>
                    <div>
                        <label htmlFor="capturezoompanescroll">
                            <input
                                id="capturezoompanescroll"
                                type="checkbox"
                                checked={captureZoomScroll}
                                onChange={(event) => setCaptureZoomScroll(event.target.checked)}
                                className="react-flow__capturezoompanescroll"
                            />
                            capture onPaneScroll
                        </label>
                    </div>
                    <div>
                        <label htmlFor="captureelementclick">
                            <input
                                id="captureelementclick"
                                type="checkbox"
                                checked={captureElementClick}
                                onChange={(event) => setCaptureElementClick(event.target.checked)}
                                className="react-flow__captureelementclick"
                            />
                            capture onElementClick
                        </label>
                    </div>
                </div>
            </ReactFlow>
        </div>
    );
};

export default InteractionFlow;
