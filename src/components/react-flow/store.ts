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
            target: newNode.id,
        };

        set({ // setでstateを更新する
            nodes: [...get().nodes, newNode], // ...get().nodesは既存のノードを展開している
            edges: [...get().edges, newEdge],
        });
    },
}));

export default useStore;