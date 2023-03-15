import React from "react";
import Head from "next/head";

export const HeadTag = () => {
    return (
        <>
            <Head>
                <title>1-1 女性向けサイト</title>
                <meta name="description" content="書籍「動くWebデザインアイディア帳」のサンプルサイトです"/>
                <meta name="robots" content="noindex,nofollow"/>
                <meta name="keywords" content=""/>
                <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
                <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
                <link
                    href="https://fonts.googleapis.com/css?family=Noto+Serif+JP%7CParisienne&display=swap"
                    rel="stylesheet"/>
            </Head>
        </>
    )
}
