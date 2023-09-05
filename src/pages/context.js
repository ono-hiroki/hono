import React from 'react';
import * as cop from "contextjs"
import { layer, proceed, withLayers } from "contextjs"

class Foo {
    bar() {
        return `a`
    }
}

console.log(cop)


export const L1 = layer("L1")
//  活性化のときの振る舞いを定義

L1.refineClass(Foo, {
    bar() { return proceed() + `b`}
})
console.log(L1)
console.log(L1.isLayer())
console.log(L1.fullName())
console.log(L1.remove())

export const o = new Foo()

const Index = () => {

    // L1を活性化していないので、元の振る舞いが呼ばれる
    console.log(o.bar())  // 3
    // L1を活性化
    console.log(withLayers([L1], () => o.bar()))  // 7

    return (
        <>
            こんちくは
        </>
    )
}

export default Index;
