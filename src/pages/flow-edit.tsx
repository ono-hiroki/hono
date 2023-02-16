import {useCallback, useRef} from 'react';
import ReactFlow, {
    Controls,
    OnConnectEnd,
    OnConnectStart,
    Panel,
    useStoreApi,
    Node,
    useReactFlow,
    ReactFlowProvider,
    NodeOrigin,
    ConnectionLineType, Background,
} from 'reactflow';
import 'reactflow/dist/style.css';
import {useGetWindowSize} from "../hooks/useGetWindowSize";
import useStore, {RFState} from "../components/react-flow/store";
import {shallow} from "zustand/shallow";
import MindMapNode from "src/components/react-flow/Nodes";
import MindMapEdge from "src/components/react-flow/Edges";



const selector = (state: RFState) => ({
    nodes: state.nodes,
    edges: state.edges,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
    addChildNode: state.addChildNode,
});

const nodeOrigin: NodeOrigin = [0.5, 0.5];
const connectionLineStyle = { stroke: '#F6AD55', strokeWidth: 3 };
const defaultEdgeOptions = { style: connectionLineStyle, type: 'mindmap' };

const nodeTypes = {
    mindmap: MindMapNode,
}

const edgeTypes = {
    mindmap: MindMapEdge,
}

function Flow() {
    // whenever you use multiple values, you should use shallow for making sure that the component only re-renders when one of the values change
    // shallowは、値が変更されたときにコンポーネントのみを再レンダリングすることを確認するために使用する必要がある
    const { nodes, edges, onNodesChange, onEdgesChange, addChildNode } = useStore(selector, shallow);
    const connectingNodeId = useRef<string | null>(null);
    const store = useStoreApi();
    const { project } = useReactFlow();

    const getChildNodePosition = (event: MouseEvent, parentNode?: Node) => { // ?はオプショナルチェイニング あってもなくてもいい
        const { domNode } = store.getState(); // 選択したノードの位置を取得

        if (
            !domNode || // ノードが初期化されていない場合は、positionAbsoluteやwidth、heightがないので、チェックが必要
            !parentNode?.positionAbsolute ||
            !parentNode?.width ||
            !parentNode?.height
        ) {
            return;
        }

        const { top, left, right, bottom } = domNode.getBoundingClientRect(); // topはノードの上端の位置 leftはノードの左端の位置　値はpx
        // console.log(domNode.getBoundingClientRect(),"domNode.getBoundingClientRect()")


        // console.log(event.clientX,"event.clientX")
        // we need to remove the wrapper bounds, in order to get the correct mouse position
        // 正しいマウスの位置を取得するためにラッパーの境界を削除する必要があります
        const panePosition = project({ // flow上の座標を実際の画面上の座標に変換してる？
            x: event.clientX - left, // 画面からのマウスの位置からノードの左端の位置を引く
            y: event.clientY - top,
        });

        // console.log(parentNode.positionAbsolute,"parentNode.positionAbsolute") // 親ノードの
        // console.log(parentNode.width,parentNode.height,"parentNode")
        // console.log("式 x",panePosition.x,"-" ,parentNode.positionAbsolute.x,"+",parentNode.width / 2 , "=",panePosition.x - parentNode.positionAbsolute.x + parentNode.width / 2)
        // console.log("式 y",panePosition.y,"-" ,parentNode.positionAbsolute.y,"+",parentNode.height / 2, "=",panePosition.y - parentNode.positionAbsolute.y + parentNode.height / 2)
        // we are calculating with positionAbsolute here because child nodes are positioned relative to their parent
        return {
            // 下と右が正のであることに注意
            // 原点からのマウスの位置、親ノードの原点からの位置(ノードの中心)がわかる
            // 求めたいのは、追加するノードの親からの相対位置
                // 追加するノードは右下が原点であることに注意
                // 親ノードの原点は中心が原点であることに注意

            // panePositionは原点からのマウスの位置
            // parentNode.positionAbsoluteは親ノードの原点からの位置
            x: panePosition.x - parentNode.positionAbsolute.x + parentNode.width / 2,
            y: panePosition.y - parentNode.positionAbsolute.y + parentNode.height / 2,
        };
    };


    // ノードをクリックしたときに呼ばれる
    const onConnectStart: OnConnectStart = useCallback((_, { nodeId }) => {
        connectingNodeId.current = nodeId; // 接続する位置を決める
        console.log("onConnectStart")
    }, []);

    // ノードをドラッグしたあとに呼ばれる
    const onConnectEnd: OnConnectEnd = useCallback(
        (event) => {
            const { nodeInternals } = store.getState(); // nodeInternalsはNodeの情報を持っている
            // console.log(nodeInternals,"nodeInternals") // 現状存在するノードの情報すべてが入っている
            // console.log(nodeInternals.get(connectingNodeId.current)) // 選択したノードの情報が入っている
            const targetIsPane = (event.target as Element).classList.contains('react-flow__pane'); // 選択したノードに対して、クラス名がreact-flow__paneを持っているかどうかを判定している

            if (targetIsPane && connectingNodeId.current) { // react-flow__paneを持っている && 接続する位置が決まっている
                const parentNode = nodeInternals.get(connectingNodeId.current); // 選択したノードの情報を取得
                // @ts-ignore
                const childNodePosition = getChildNodePosition(event, parentNode);

                if (parentNode && childNodePosition) {
                    addChildNode(parentNode, childNodePosition);
                }
            }
        },
        [getChildNodePosition]
    );

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
                onConnectStart={onConnectStart} // エッジを追加しようとしたときに呼ばれる
                onConnectEnd={onConnectEnd} // エッジを追加しようとしたときに呼ばれる
                connectionLineStyle={connectionLineStyle} // エッジの色と太さ
                connectionLineType={ConnectionLineType.Bezier} // エッジを伸ばしたときの曲線の形
                panOnScroll
                selectionOnDrag
            >
                <Background gap={100} size={10} />
                <Controls showInteractive={false} />
                <Panel position="top-left" style={{color: '#eaeaec'}}>
                    React Flow Mind Map
                </Panel>
            </ReactFlow>
        </div>
    );
}

// eslint-disable-next-line react/display-name
export default () => (
    <ReactFlowProvider>
        <Flow />
    </ReactFlowProvider>
);
