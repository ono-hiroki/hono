import React, {useEffect, useLayoutEffect, useRef} from 'react';
import {Handle, NodeProps, Position} from 'reactflow';
import useStore from '../store';

export type NodeData = {
    label: string;
    label2: string;
};

function Nodes({id, data}: NodeProps<NodeData>) {
    const updateNodeLabel = useStore((state) => state.updateNodeLabel);
    const inputRef = useRef<HTMLInputElement>();


    useLayoutEffect(() => { // useLayoutEffectはレンダリング後に実行される
        if (inputRef.current) {
            inputRef.current.style.width = `${data.label.length * 8}px`;
        }
    }, [data.label.length]);

    useEffect(() => {
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus({ preventScroll: true });
            }
        }, 1);
    }, []);

    return (
        <>
            <div className="inputWrapper">
                <div className="dragHandle">
                    {/* icon taken from grommet https://icons.grommet.io */}
                    <svg viewBox="0 0 24 24">
                        <path
                            fill="#333"
                            stroke="#333"
                            strokeWidth="1"
                            d="M15 5h2V3h-2v2zM7 5h2V3H7v2zm8 8h2v-2h-2v2zm-8 0h2v-2H7v2zm8 8h2v-2h-2v2zm-8 0h2v-2H7v2z"
                        />
                    </svg>
                </div>


                <input defaultValue={data.label}
                       onChange={(evt) => updateNodeLabel(id, evt.target.value)}
                       className="input"
                        // @ts-ignore
                       ref={inputRef}
                />
                <br/>
                {/*<input defaultValue={data.label2}*/}
                {/*       onChange={(evt) => updateNodeLabel(id, evt.target.value)}*/}
                {/*       className="input"*/}
                {/*/>*/}
            </div>


            <Handle type="target" position={Position.Top}/>
            <Handle type="source" position={Position.Top}/>
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
