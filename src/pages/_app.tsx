import '../styles/globals.css'
import '../styles/sass/top.scss'
import type {AppProps} from 'next/app'
import {useCounter} from "../hooks/useCounter";
import {useInputArray} from "../hooks/useInputArray";
import {LayerProvider} from "hono-my-npm-package";


export default function MyApp({Component, pageProps}: AppProps) {
    const counter = useCounter()
    const inputArray = useInputArray()
    // useBgColor()

    return (
        <LayerProvider>
            <Component {...pageProps} foo={'bar'} {...counter} {...inputArray} />
        </LayerProvider>
    )

}
