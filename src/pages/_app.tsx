import '../styles/globals.css'
import '../styles/sass/top.scss'
import type { AppProps } from 'next/app'
import {useBgLightBlue} from "../hooks/useBgLightBlue";
import {useCounter} from "../hooks/useCounter";
import {useInputArray} from "../hooks/useInputArray";


export default function App({ Component, pageProps }: AppProps) {
  const counter = useCounter()
  const inputArray = useInputArray()
  useBgLightBlue()

  return <Component {...pageProps} foo={'bar'} {...counter} {...inputArray} ></Component>
}
