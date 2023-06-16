import React, {useState} from 'react';
import {getBezierPath} from 'reactflow';

export default function CustomEdge(props) {
    const {
        id,
        sourceX,
        sourceY,
        targetX,
        targetY,
        sourcePosition,
        targetPosition,
        style = {},
        data,
        markerEnd,
    } = props;
    const [edgePath] = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });
    const sourceTransform = `translate(${sourceX}, ${sourceY+10})`;
    const targetTransform = `translate(${targetX}, ${targetY-10})`;

    const foreignObjectSize = 40;
    const [labelX, labelY] = getBezierPath({
        sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition,
    });
    const [state, setState] = useState("初期値");
    return (
        <>
            <path
                id={id}
                style={style}
                className="react-flow__edge-path"
                d={edgePath}
                markerEnd={markerEnd}
            />
            <text>
                <textPath href={`#${id}`} style={{fontSize: 12}} startOffset="50%" textAnchor="middle">
                    {data?.text}
                </textPath>
            </text>
            <text className="cls-2" transform={sourceTransform}>
                <tspan x="0" y="0">あいう</tspan>
            </text>
            <text transform={targetTransform}>
                <tspan x="0" y="0">かきく</tspan>
            </text>

            <foreignObject
                width='100'
                height='40'
                x={targetX + 50}
                y={targetY - 20}
                className="edgebutton-foreignobject"
                requiredExtensions="http://www.w3.org/1999/xhtml"
            >
                <div style={{width: '100%', height: '100%', background: '#fff'}}>
                    <input
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        style={{width: '100%',   background: '#fff', border: 'none', outline: 'none'}}
                    />
                </div>
            </foreignObject>
        </>
    );
}
