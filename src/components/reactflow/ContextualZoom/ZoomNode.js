import React, { memo } from 'react';
import { Handle, useStore, Position } from 'reactflow';

const Placeholder = () => (
    <div className="placeholder"> {/* cssで文字を隠している風にしている */}
        <div />
        <div />
        <div />
    </div>
);

const zoomSelector = (s) => (s.transform[2]); // 現在のzoomの値を取得

// eslint-disable-next-line react/display-name
export default memo(({ data }) => {
    const zoom = useStore(zoomSelector);
    // const zoom = useStore((s) => zoomSelector(s)); 冗長な書き方
    const showContent = zoom >= 1.5;

    return (
        <>
            <Handle type="target" position={Position.Left} />
            {showContent ? data.content : <Placeholder />}
            <Handle type="source" position={Position.Right} />
        </>
    );
});