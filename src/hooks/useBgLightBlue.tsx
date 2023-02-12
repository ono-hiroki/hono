import {useEffect} from "react";

export const useBgLightBlue = () => {
    // useEffectは、レンダリング後に実行される。
    useEffect(() => {
        console.log('useEffect')
        document.body.style.backgroundColor = 'lightblue'

        return () => {
            console.log('useEffect return')
            document.body.style.backgroundColor = 'lightgreen'
        }
    }, [])
}