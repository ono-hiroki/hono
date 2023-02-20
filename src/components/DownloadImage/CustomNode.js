import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

// eslint-disable-next-line react/display-name
export default memo(({ data, isConnectable }) => {
    return (
        <>
            <Handle
                type="target"
                position={Position.Left}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
            />
            <div>▼</div>

            <Handle
                type="source"
                position={Position.Right}
                id="top"
                style={{ top: 5 }}
                isConnectable={isConnectable}
            />
            <Handle
                type="source"
                position={Position.Right}
                id="bottom"
                style={{ bottom: 5, top: 'auto' }}
                isConnectable={isConnectable}
            />
            <Handle
                type="source"
                position={Position.Bottom}
                id="aaa"
                isConnectable={isConnectable}
            />
        </>
    );
});
