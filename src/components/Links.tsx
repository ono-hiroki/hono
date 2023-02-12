import styles from '../styles/Home.module.css'
import {useCallback, useState} from "react";


export function Links(props: any) {
const {items} = props

    return (
                <div className={styles.grid}>
                    {/*@ts-ignore*/}
                    {items.map(item => {
                        return (
                            <a key={item.href} href={item.href} className={styles.card}>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </a>
                        );
                    })}
                </div>
    )
}
