import styles from '../styles/Home.module.css'
import React from "react"

export default function Headline(props) {
    console.log(props)
    return (
        <>
            <h1 className={styles.title}>
                {props.page} Page
            </h1>

            <p className={styles.description}>
                Get started by editing{' '}
                <code className={styles.code}>pages/{props.page}.tsx</code>
            </p>
        </>
    )
}
