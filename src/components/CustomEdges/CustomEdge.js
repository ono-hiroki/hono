import React from 'react';
import {getBezierPath, MarkerType} from 'reactflow';

export default function CustomEdge(props) {
    const {id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, style = {}, data, markerEnd} = props;


    const [edgePath] = getBezierPath({// ここでエッジのパスを取得
        sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition,
    });

    console.log('props',props)
    // {
    //     id: 'edge-5-8',
    //     source: 'node-5',
    //     target: 'node-8',
    //     type: 'custom',
    //     data: {text: 'custom edge カスタムエッジ'},
    //     markerEnd: {
    //         type: MarkerType.ArrowClosed,
    //     },
    // },

    return (<>
        <path
            id={id}
            style={style}
            className="react-flow__edge-path" // 既存のクラス名を指定する
            d={edgePath}
            markerEnd={markerEnd} // ここでマーカーを指定する
        />
        <text>
            {/*startOffset 真ん中 textAnchor 真ん中*/}
            {/*hrefはidを指定するとpathをなぞるように表示される*/}
            <textPath href={`#${id}`} style={{fontSize: 12}} startOffset="50%" textAnchor="middle">
                {data.text}
            </textPath>
        </text>
    </>);
}

// たぶんこれ
// .react-flow__edge-path, .react-flow__connection-path {
//     stroke: #b1b1b7;
//     stroke-width: 1px;
//     fill: none;
// }
