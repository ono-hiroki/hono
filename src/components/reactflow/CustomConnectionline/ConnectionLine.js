import React from 'react';

// eslint-disable-next-line react/display-name
export default (props) => {
    const {
        fromX, fromY, fromPosition, toX, toY, toPosition, connectionLineType, connectionLineStyle,
    } = props;

    return (<g>
            <path
                fill="none"
                stroke="#222"
                strokeWidth={1.5}
                className="animated"
                d={`M${fromX},${fromY} C ${fromX} ${toY} ${fromX} ${toY} ${toX},${toY}`}
            />
            <circle cx={toX} cy={toY} fill="#fff" r={3} stroke="#222" strokeWidth={1.5}/>
        </g>);
};
