import '../styles/globals.css'
import '../styles/sass/top.scss'
import type { AppProps } from 'next/app'
import {useBgColor} from "../hooks/useBgColor";
import {useCounter} from "../hooks/useCounter";
import {useInputArray} from "../hooks/useInputArray";


export default function MyApp({ Component, pageProps }: AppProps) {
  const counter = useCounter()
  const inputArray = useInputArray()
  // useBgColor()

  return <Component {...pageProps} foo={'bar'} {...counter} {...inputArray} ></Component>
}
