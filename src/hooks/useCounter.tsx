import React, {useCallback, useState} from "react";

export const useCounter = () => {
    const [count, setCount] = React.useState(0)
    const [isShow, setIsShow] = React.useState(true)

    // useMemoは、値をキャッシュする
    // ここでは、countの値が変わった時だけ、doubleCountの値を再計算する
    // ここで、doubleCountの値をキャッシュしているので、
    // このコンポーネントが再レンダリングされても、doubleCountの値は変わらない
    const doubleCount = React.useMemo(() => {
        return count * 2
    }, [count])

    const handleClick = useCallback(() => {
        if (count < 10) {
            setCount(count => count + 1)
        }

        // setFoo(count => count + 1)
        // setFoo(count => count + 1)
        // setFoo(foo + 1)
        // 関数との違いは、こっちは直接値を渡しているので、
        // この時点で値が決まっているので、useEffectの中で値を参照すると、
        // この時点での値が参照される。
    }, [count]);

    const handleDisplay = () => {
        setIsShow(!isShow)
    }

    return {count, doubleCount, isShow, handleClick, handleDisplay}

}