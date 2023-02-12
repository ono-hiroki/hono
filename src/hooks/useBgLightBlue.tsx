import {useEffect} from "react";

export const useBgLightBlue = () => {
    // useEffectは、レンダリング後に実行される。
    useEffect(() => {
        document.body.style.backgroundColor = 'lightblue'

        return () => {
            document.body.style.backgroundColor = 'lightgreen'
        }
    }, [])
}