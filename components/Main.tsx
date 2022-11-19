import styles from '../styles/Home.module.css'
import {Links} from "./Links";
import {Headline} from "./Headline";
import React from "react";

type Props = {
    page: string
}

export function Main(props: Props) {
    return (
            <main className={styles.main}>
                <Headline
                    page={props.page}
                >
                    <code className={styles.code}>pages/{props.page}.tsx</code>
                </Headline>
                <Links />
            </main>
    )
}
