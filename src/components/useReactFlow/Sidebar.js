import React from 'react';
import { useStoreApi, useReactFlow } from 'reactflow';

// eslint-disable-next-line react/display-name
export default () => {
    const store = useStoreApi();
    // useReactFlow()は、useStoreApi()と同じように、
    // ReactFlowコンポーネントの内部状態を取得するためのフックです。
    // 違いは、useStoreApi()は、ReactFlowコンポーネントの内部状態を
    // カスタムフックの外部で取得するためのフックであるのに対し、
    // useReactFlow()は、ReactFlowコンポーネントの内部状態を
    // カスタムフックの内部で取得するためのフックであるという点です。
    const { zoomIn, zoomOut, setCenter } = useReactFlow();

    const focusNode = () => {
        const { nodeInternals } = store.getState();
        const nodes = Array.from(nodeInternals).map(([, node]) => node);

        if (nodes.length > 0) {
            const node = nodes[0];

            const x = node.position.x + node.width / 2;
            const y = node.position.y + node.height / 2;
            const zoom = 1.85;

            setCenter(x, y, { zoom, duration: 1000 });
        }
    };

    return (
        <aside>
            <div className="description">
                This is an example of how you can use the zoom pan helper hook
            </div>
            <button onClick={focusNode}>focus node</button>
            <button onClick={zoomIn}>zoom in</button>
            <button onClick={zoomOut}>zoom out</button>
        </aside>
    );
};