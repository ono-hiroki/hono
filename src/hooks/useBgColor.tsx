import {useEffect, useMemo} from "react";
import {useRouter} from "next/router";

export const useBgColor = () => {
    const router = useRouter()
    const bgColor = useMemo(() => {
        return router.pathname === '/' ? 'lightblue' : 'beige'
    }, [router.pathname])
    // useEffectは、レンダリング後に実行される。
    useEffect(() => {

        document.body.style.backgroundColor = bgColor

        return () => {
            document.body.style.backgroundColor = 'lightgreen'
        }
    }, [bgColor])
}