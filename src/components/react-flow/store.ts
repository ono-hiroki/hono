import {
    Edge,
    EdgeChange,
    Node,
    NodeChange,
    OnNodesChange,
    OnEdgesChange,
    applyNodeChanges,
    applyEdgeChanges,
    XYPosition,
} from 'reactflow';
import create from 'zustand';
import { nanoid } from 'nanoid/non-secure';

export type RFState = {
    nodes: Node[];
    edges: Edge[];
    onNodesChange: OnNodesChange;
    onEdgesChange: OnEdgesChange;
    addChildNode: (parentNode: Node, position: XYPosition) => void;
    updateNodeLabel: (nodeId: string, label: string) => void;
};

// nodesとedgesをstateとして持つ
// nodesとedgesを色々いじりたいので、それを行う関数もstateとして持つ
const useStore = create<RFState>((set, get) => ({ // setはstateを更新する関数、getはstateを取得する関数　useStateと同じ
    nodes: [
        {
            id: 'root',
            type: 'mindmap',
            data: { label: 'React Flow', label2: 'Mind Map' },
            position: { x: 0, y: 0 },
        },
    ],
    edges: [],
    onNodesChange: (changes: NodeChange[]) => {
        set({
            nodes: applyNodeChanges(changes, get().nodes),
        });
    },
    onEdgesChange: (changes: EdgeChange[]) => {
        set({
            edges: applyEdgeChanges(changes, get().edges),
        });
    },
    addChildNode: (parentNode: Node, position: XYPosition) => {
        const newNode = {
            id: nanoid(), // nanoid()はランダムな文字列を返す
            type: 'mindmap',
            data: { label: 'New Node' },
            position,
            parentNode: parentNode.id,
        };

        const newEdge = {
            id: nanoid(),
            source: parentNode.id,
            // もし複数のエッジをつなげたい場合は、source: [parentNode.id, parentNode.id]のように配列で指定する
            // もし複数のハンドルがある場合は、sourceHandle: 'hoge'のように指定する
            target: newNode.id,
        };

        set({ // setでstateを更新する
            nodes: [...get().nodes, newNode], // ...get().nodesは既存のノードを展開している
            edges: [...get().edges, newEdge],
        });
    },
    updateNodeLabel: (nodeId: string, label: string) => {
        set({
            nodes: get().nodes.map((node) => {
                if (node.id === nodeId) {
                    // it's important to create a new object here, to inform React Flow about the changes
                    node.data = { ...node.data, label }; // node.dataはreadonlyなので、新しいオブジェクトを作って代入する
                    // { ...node.data, label }は、node.dataのプロパティを展開して、labelを上書きする
                    // labelを指定せずに、labelが上書きされるのは、node.dataのlabelと同じ名前の変数がある場合
                    // label以外を上書きしたい場合は、{ ...node.data, label, label2: 'hoge' }のように書く
                }
                return node;
            }),
        });
    },
}));

export default useStore;