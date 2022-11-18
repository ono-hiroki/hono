import styles from '../styles/Home.module.css'
import React from "react"

type props = {
    page: string
    children: React.ReactNode
}

export function Headline(props: props) {
    return (
        <>
            <h1 className={styles.title}>
                {props.page} Page
            </h1>

            <p className={styles.description}>
                Get started by editing{' '}
                {props.children}
            </p>
        </>
    )
}
