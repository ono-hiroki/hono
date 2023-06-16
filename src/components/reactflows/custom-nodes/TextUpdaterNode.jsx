import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import React from "react";
import {createRoot} from "react-dom/client";
import ReactFlow, {Controls, Background, applyNodeChanges, applyEdgeChanges, addEdge} from 'reactflow';
import 'reactflow/dist/style.css';
import useStore from "../store";

const handleStyle = { left: 10 };

function TextUpdaterNode(props) {
    const { data, isConnectable, id } = props;

    const onChange = useCallback((evt) => {
        // console.log(evt.target.value);
    }, []);
    const updateNodeLabel = useStore((state) => state.updateNodeLabel);

    return (
        <div className="text-updater-node">
            <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
            <div>
                <label htmlFor="text">Text:</label>
                <input
                    id="text"
                    name="text"
                    value={data.label}
                    onChange={(evt) => {
                        onChange(evt);
                        updateNodeLabel(id, evt.target.value);
                    }}
                    className="nodrag"
                />
            </div>
            <Handle
                type="source"
                position={Position.Bottom}
                id="a"
                style={handleStyle}
                isConnectable={isConnectable}
            />
            <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
        </div>
    );
}

export default TextUpdaterNode;
