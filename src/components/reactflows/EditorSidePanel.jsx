import React from 'react'

export const EditorSidePanel = ({settings, node}) => {
    console.log(node)
    return (
        <div className="w-1/4 h-5/6 bg-white absolute bottom-10 right-4 z-50 rounded-2xl drop-shadow-md">
            <div
                className="rounded-t-2xl h-4"
                // style={{backgroundColor: node.data.color}}
            />
            <p>{node.id}</p>
            <p>{node.data.name}</p>
            <p>{node.data}</p>
        </div>
    )
}
