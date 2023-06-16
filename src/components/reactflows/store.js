import {
    applyNodeChanges,
    applyEdgeChanges, MarkerType,
} from 'reactflow';
import {create} from 'zustand';

let id = 3;
const getId = () => `edge_${id++}`;

const useStore = create((set, get) => ({
    nodes: [
        {id: 'node-1', type: 'textUpdater', position: {x: 0, y: 0}, data: {label: 123}},
        {id: 'node-2', type: 'textUpdater', position: {x: 200, y: 0}, data: {label: 456}},
        {id: 'node-3', type: 'textUpdater', position: {x: 100, y: 200}, data: {label: 789}},
    ],
    edges: [
        {
            id: 'edge-1',
            source: 'node-1',
            target: 'node-2',
            sourceHandle: 'b',
            targetHandle: "",
            type: 'buttonedge',
            label: 'buttonedge',
            animated: true,
            style: {stroke: 'red'}
        },
        {
            id: 'edge-2',
            source: 'node-1',
            target: 'node-3',
            sourceHandle: 'b',
            targetHandle: "",
            label: 'ラベル',
            animated: true,
            markerEnd: {
                type: MarkerType.ArrowClosed,
                color: '#FF0072',
            },
            markerStart: {
                type: MarkerType.ArrowClosed,
                orient: 'auto-start-reverse',
                color: '#FF0072',
            },
            style: {
                strokeWidth: 2,
                stroke: '#FF0072',
            },
        },
        {
            id: 'edge-3',
            source: 'node-2',
            target: 'node-3',
            sourceHandle: 'b',
            targetHandle: "",
            type: 'custom',
            data: { text: 'custom edge' },
            animated: true,
            markerEnd: {
                type: MarkerType.ArrowClosed,
                color: '#FF0072',
            },
            markerStart: {
                type: MarkerType.ArrowClosed,
                orient: 'auto-start-reverse',
                color: '#FF0072',
            },
            style: {
                strokeWidth: 2,
                stroke: '#FF0072',
            },
        }
    ],
    // ノードを動かすため
    onNodesChange: (changes) => {
        set({
            nodes: applyNodeChanges(changes, get().nodes),
        });
    },
    // エッジをつなげたり切ったりするため
    onEdgesChange: (changes) => {
        console.log("onEdgesChange")
        set({
            edges: applyEdgeChanges(changes, get().edges),
        });
    },
    // const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

    onConnect: (params) => {
        console.log("onConnect")
        const id = getId();
        set({
            edges: [...get().edges, {id, ...params, type: 'custom'}],
        });


    },

    onDrop: (event, reactFlowInstance, reactFlowWrapper) => {
        console.log("onDrop")
        event.preventDefault(); // preventDefaultは、デフォルトのイベントをキャンセルするためのメソッドです。
        const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
        const type = event.dataTransfer.getData('application/reactflow');
        // check if the dropped element is valid
        if (typeof type === 'undefined' || !type) {
            return;
        }
        // reactFlowBounds.leftは、要素の左端からの距離を示す数値です。
        const position = reactFlowInstance.project({
            x: event.clientX - reactFlowBounds.left,
            y: event.clientY - reactFlowBounds.top,
        });
        const newNode = {
            id: getId(),
            type,
            position,
            data: {label: `${type} node`},
        };

        set((state) => ({nodes: [...state.nodes, newNode]}));
    },

    onDragOver: (event) => {
        console.log("onDragOver")
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    },

    updateNodeLabel: (id, label) => {
        console.log("updateNodeLabel")
        set({
            nodes: get().nodes.map((node) => {
                if (node.id === id) {
                    node.data = {...node.data, label};
                }

                return node;
            }),
        });
    },
}));

export default useStore;
