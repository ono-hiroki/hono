import React from 'react';
import {getBezierPath} from 'reactflow';


const foreignObjectSize = 40;

const onEdgeClick = (evt, id) => {
    evt.stopPropagation(); // これがないと、Edgeをクリックしたときに、NodeのonClickが呼ばれる
    alert(`remove ${id}`);
};

export default function CustomEdge(props) {
    const {id, sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition, style = {}, markerEnd} = props;
    // console.log(props)
    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition,
    });

    return (<>
        <path
            id={id}
            style={style}
            className="react-flow__edge-path"
            d={edgePath}
            markerEnd={markerEnd}
        />

        <foreignObject // htmlを描画するために必要
            width={foreignObjectSize}
            height={foreignObjectSize}
            x={labelX - foreignObjectSize / 2}
            y={labelY - foreignObjectSize / 2}
            className="edgebutton-foreignobject"
            requiredExtensions="http://www.w3.org/1999/xhtml" // 固定で必須っぽい
        >
            <div>
                <button className="edgebutton" onClick={(event) => onEdgeClick(event, id)}>
                    ×
                </button>
            </div>
        </foreignObject>
    </>);
}
