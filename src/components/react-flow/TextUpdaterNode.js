import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10, top: 10, bottom: 10, right: 10 };
const handleStyle2 = {right: 10 };

function TextUpdaterNode({ data }) {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);
    console.log(handleStyle, handleStyle.right)
    return (
        <div className="text-updater-node">
            <Handle type="target" position={Position.Top} />
            <div>
                <label htmlFor="text">Text:</label>
                <input id="text" name="text" onChange={onChange} className="nodrag" /> {/** nodragは、ドラッグ操作を無効にするためのクラス */}
            </div>
            <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} />
            <Handle type="source" position={Position.Bottom} id="b" />
            <Handle type="source" position={Position.Bottom} id="c" style={handleStyle2} />
        </div>
    );
}

export default TextUpdaterNode;
