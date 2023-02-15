import {Handle, NodeProps, Position} from 'reactflow'

export type NodeData = {
    label: string
}

function Nodes({ id, data}: NodeProps<NodeData>) {
    return (
        <>
            <input defaultValue={data.label} />
            <br />
            <input defaultValue={data.label} />

            <Handle type="target" position={Position.Top} /> {/*　線を引くためのハンドル */}
            <Handle type="source" position={Position.Bottom} />
            <Handle type="source" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
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
