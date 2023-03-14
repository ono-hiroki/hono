import Head from 'next/head';
import {useEffect, useRef} from "react";
import {useInView} from "react-intersection-observer";
import {css, keyframes} from "@emotion/react";

const p = css`
\ttext-align: center;
\tmargin: 20px 0;
\tfont-size: 1.3rem;
`

const roll = css`
span {
    transition-property: opacity,transform;
    transform: rotateY(360deg);
    transition: all .8s cubic-bezier(.77,0,.175,1);
    transition-timing-function: cubic-bezier(.77,0,.175,1);
    display: inline-block;
}
`


const Ugomemo81 = (props: any) => {
    const textRandomAnime1 = useInView({
        threshold: 0,
    });
    const elm = useRef(null);
    useEffect(() => {
        if (elm.current) {
            // @ts-ignore
            const elmText = elm.current.textContent;
            // @ts-ignore
            elm.current.textContent = "";
            for (let i = 0; i < elmText.length; i++) {
                const span = document.createElement("span");
                span.textContent = elmText[i];
                // @ts-ignore
                elm.current.appendChild(span);
            }

            // @ts-ignore
            elm.current.querySelectorAll("span").forEach((span, i) => {
                span.style.transitionDelay = `${i * 0.1}s`;
            });

        }
    }, []);

    return (
        <>
            <Head>
                <title>ugomemo3-1-1</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"/>
            </Head>

            <div className="wrapper">
                <div
                    ref={textRandomAnime1.ref}>
                    {/*@ts-ignore*/}
                    <p ref={elm} css={[p,textRandomAnime1.inView && roll]}>
                        テキストがバラバラに出現しますテキストがバラバラに出現しますテキストがバラバラに出現します
                    </p>
                </div>
            </div>

            <br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓
            <style jsx global>{Style}</style>
        </>
    )
}
export default Ugomemo81;

const Style = `
}
`
