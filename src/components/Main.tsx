import styles from '../styles/Home.module.css'
import {Links} from "./Links";
import {Headline} from "./Headline";
import React, {useCallback, useState} from "react";

type Props = {
    page: string
}


const ITEMS = [
    {
        href: 'https://nextjs.org/docs',
        title: 'Documentation \u2192',
        description: 'Find in-depth information about Next.js features and API.',
    },
    {
        href: 'https://nextjs.org/learn',
        title: 'Learn \u2192',
        description: 'Learn about Next.js in an interactive course with quizzes!',
    },
    {
        href: 'https://github.com/vercel/next.js/tree/canary/examples',
        title: 'Examples \u2192',
        description: 'Discover and deploy boilerplate example Next.js projects.',
    },
    {
        href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
        title: 'Deploy \u2192',
        description: 'Instantly deploy your Next.js site to a public URL with Vercel.',
    },
]


export function Main(props: Props) {
    const [items, setItems] = useState(ITEMS)
    const handleReduce = useCallback(() => {
        setItems(items => items.slice(0, items.length - 1))
    }, [])

    return (
            <main className={styles.main}>
                <button onClick={handleReduce}>減らす</button>
                <Headline
                    page={props.page}
                >
                    <code className={styles.code}>pages/{props.page}.tsx</code><br/>
                   アイテムの数は{items.length}です
                </Headline>
                <Links items={items} />
            </main>
    )
}
