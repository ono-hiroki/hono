import React from 'react';
import * as cop from "contextjs"
import { layer, proceed, withLayers } from "contextjs"
import {L1, o} from "./context"


const Index = (props) => {
    console.log(o)
    console.log(withLayers([L1], () => o.bar()))  // 7


    return (
        <>
            こんちくは

        </>
    )
}

export default Index;
