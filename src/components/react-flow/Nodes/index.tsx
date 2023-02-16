import React from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import useStore from '../store';

export type NodeData = {
    label: string;
};

function Nodes({ id, data}: NodeProps<NodeData>) {
    const updateNodeLabel = useStore((state) => state.updateNodeLabel);
    return (
        <>
            <input defaultValue={data.label}
                   onChange={(evt) => updateNodeLabel(id, evt.target.value)}
            />
            <br />
            <input defaultValue={data.label}
                onChange={(evt) => updateNodeLabel(id, evt.target.value)}
            />
            <br />
            <input defaultValue={data.label}
                onChange={(evt) => updateNodeLabel(id, evt.target.value)}
            />
            {/*<br />*/}
            {/*<input defaultValue={data.label} />*/}

            <Handle type="target" position={Position.Top} />
            <Handle type="source" position={Position.Bottom} />
            {/*<Handle type="source" position={Position.Left} />*/}
            {/*<Handle type="source" position={Position.Right} />*/}
            {/*{console.log('data', data)}*/}
        </>
    );
}

export default Nodes;

// Position
// enum Position {
//     Top = 'top',
//     Right = 'right',
//     Bottom = 'bottom',
//     Left = 'left',
// }
