import React from 'react';

// eslint-disable-next-line react/display-name
export default () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType); // nodeTypeをdataTransferに保存
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <aside>
            <div className='description'>これらのノードを右側のペインにドラッグすることができます</div>
            <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
                Input Node
            </div>
            <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
                Default Node
            </div>
            <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
                Output Node
            </div>
        </aside>
    );
};