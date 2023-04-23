import React, { useCallback } from 'react';
import { useStore } from 'reactflow';

// transform state selectorは、ReactFlowコンポーネントの内部状態を取得するために使用されます。
const transformSelector = (state) => state.transform;

// eslint-disable-next-line react/display-name
export default ({ nodes, setNodes }) => {
    // transformSelectorの引数には、ReactFlowコンポーネントの内部状態が渡されます。
    const transform = useStore(transformSelector);
    // 省略しないと以下のようになる
    // const transform = useStore((state) => state.transform);
    // const transform = useStore((state) => transformSelector(state));

    console.log(nodes)


    const selectAll = useCallback(() => {
        setNodes((nds) =>
            nds.map((node) => {
                node.selected = true;
                return node;
            })
        );
    }, [setNodes]);

    return (
        <aside>
            <div className="description">
                これは、ReactFlowコンポーネントの外部で内部状態にアクセスする方法の例です。
            </div>
            <div className="title">Zoom & pan transform</div>
            <div className="transform">
                [{transform[0].toFixed(2)}, {transform[1].toFixed(2)}, {transform[2].toFixed(2)}]
            </div>
            <div className="title">Nodes</div>
            {nodes.map((node) => (
                <div key={node.id}>
                    Node {node.id} - x: {node.position.x.toFixed(2)}, y: {node.position.y.toFixed(2)}
                </div>
            ))}

            <div className="selectall">
                <button onClick={selectAll}>select all nodes</button>
            </div>
        </aside>
    );
};
